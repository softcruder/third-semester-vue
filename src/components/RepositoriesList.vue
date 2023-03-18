<template>
  <div>
    <div class="card-deck">
        <div v-for="repo in paginatedRepos" :key="repo.id" class="card">
          <img class="card-img-top" :src="repo.owner.avatar_url" alt="Repo Owner Avatar">
          <div class="card-body">
            <span class="card-title"><router-link :to="`/repository/${repo.name}`">{{ repo.name }}</router-link></span>
            <p class="card-text">{{ repo.language }}</p>
          </div>
          <span class="center"><router-link :to="`/repository/${repo.name}`">View</router-link> </span>
        </div>
    </div>
    <div class="pagination">
  <nav aria-label="Repository pagination">
    <ul class="pagination-container justify-content-center">
      <li class="page-item" :class="{ disabled: currentPage === 1 }">
        <a class="page-link" href="#" @click.prevent="currentPage > 1 && currentPage--">Previous</a>
      </li>
      <li v-for="page in pages" :key="page" class="page-item" :class="{ active: page === currentPage }">
        <a class="page-link" href="#" @click.prevent="currentPage = page">{{ page }}</a>
      </li>
      <li class="page-item" :class="{ disabled: currentPage === pageCount }">
        <a class="page-link" href="#" @click.prevent="currentPage < pageCount && currentPage++">Next</a>
      </li>
    </ul>
  </nav>
</div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'RepositoryList',
  data() {
    return {
      repos: [],
      currentPage: 1,
      pageSize: 6,
    };
  },
  computed: {
    paginatedRepos() {
      const startIndex = (this.currentPage - 1) * this.pageSize;
      return this.repos.slice(startIndex, startIndex + this.pageSize);
    },
    pageCount() {
      return Math.ceil(this.repos.length / this.pageSize);
    },
    pages() {
      const pages = [];
      for (let i = 1; i <= this.pageCount; i++) {
        pages.push(i);
      }
      return pages;
    },
  },
  mounted() {
    axios.get('https://api.github.com/users/softcruder/repos')
      .then(response => {
        this.repos = response.data;
      })
      .catch(error => {
        console.log(error);
      });
  },
};
</script>

<style scoped>
.card-deck {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 1rem;
}

 span a {
  color: hsl(211, 28%, 29%);
}
a{
    color: #fff;
    text-decoration: none;
    font-weight: 400;
}
.card {
  flex: 1 1 40%;
  margin-bottom: 1.25rem;
  background-color: #fff;
  border: 2px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease-in-out;
  flex-direction: row;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.3);
}
.card-img-top {
  height: 250px;
  object-fit: cover;
  border-radius: 40%;
  padding-left: .5rem;
  padding-top: .5rem;
}

.card-title {
  font-size: 1rem;
  margin-bottom: 10px;
  padding: .33rem;
}

.card-text {
  padding: 0.33rem;
  font-size: .75rem;
}

p {
  color: hsl(211, 28%, 29%);
}

.card:hover {
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.4);
  transform: translateY(-10px);
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}

.card-body {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 5px;
  height: 100%;
}

.card-text {
  margin-top: 10px;
}

.center {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
}

.center a {
  color: #fff;
  background-color: hsl(153, 48%, 49%);
  border-radius: 1.2rem;
  padding: 10px 20px;
  text-decoration: none;
  transition: background-color 0.3s ease-in-out;
}

.center a:hover {
  background-color: hsl(211, 28%, 29%);
  transition: background-color 0.3s ease-in-out;
}
.pagination {
  margin-top: 20px;
}

.pagination-container {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 1rem 0;
  justify-content: center;
  align-items: center;
}

.pagination-container .page-item {
  margin: 0 0.5rem;
}

.pagination-container .page-link {
  color: hsl(153, 48%, 49%);
  background-color: transparent;
  border: none;
  text-decoration: none;
  cursor: pointer;
  transition: color 0.2s ease-out;
  padding: 0.75rem;
}

.pagination-container .page-link:hover {
  color: hsl(211, 28%, 29%);
}

.pagination-container .active .page-link {
  background: linear-gradient(90deg, hsl(153, 48%, 49%) 3%, hsl(211, 28%, 29%) 134%);
  color: #fff;
  border-radius: 0.25rem;
}
.pagination-container .active .page-link:hover {
  transform: translateY(-5px);
  background-color: hsl(153, 48%, 49%);
}

.pagination-container .disabled .page-link {
  color: #6c757d;
  cursor: not-allowed;
}

</style>
