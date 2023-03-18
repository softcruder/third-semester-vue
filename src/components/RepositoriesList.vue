<template>
  <div>
    <div class="card-deck">
      <router-link :to="`/repository/${repo.name}`">
        <div v-for="repo in paginatedRepos" :key="repo.id" class="card">
          <img class="card-img-top" :src="repo.owner.avatar_url" alt="Repo Owner Avatar">
          <div class="card-body">
            <span class="card-title">{{ repo.name }}</span>
            <p class="card-text">{{ repo.language }}</p>
          </div>
        </div>
      </router-link>

    </div>
    <div class="pagination">
      <nav aria-label="Repository pagination">
        <ul class="pagination-container justify-content-center">
          <li class="page-item" :class="{ disabled: currentPage === 1 }">
            <a class="page-link" href="#" @click.prevent="currentPage--">Previous</a>
          </li>
          <li v-for="page in pages" :key="page" class="page-item" :class="{ active: page === currentPage }">
            <a class="page-link" href="#" @click.prevent="currentPage = page">{{ page }}</a>
          </li>
          <li class="page-item" :class="{ disabled: currentPage === pageCount }">
            <a class="page-link" href="#" @click.prevent="currentPage++">Next</a>
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

h6 {
  font-size: .75rem;
}

.card {
  flex: 1 1 40%;
  margin-bottom: 1.25rem;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease-in-out;
  flex-direction: column;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.3);
}

.card-body {
  padding: 20px;
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

.pagination {
  margin-top: 20px;
}

.pagination-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
}

li.page-item:disabled a {
  background: linear-gradient(70deg, hsl(0, 0%, 83%) 0%, hsl(0, 0%, 41%) 164%);
}

.page-link {
  font-weight: 400;
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
  padding: 0.25rem .5rem;
  background: linear-gradient(90deg, hsl(153, 48%, 49%) 3%, hsl(211, 28%, 29%) 134%);
  border-radius: 5px;
  border: none;
}</style>
