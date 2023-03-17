<template>
  <div>
    <div class="card-deck">
      <div v-for="repo in paginatedRepos" :key="repo.id" class="card">
        <img class="card-img-top" :src="repo.owner.avatar_url" alt="Repo Owner Avatar">
        <div class="card-body">
          <h5 class="card-title">{{ repo.name }}</h5>
          <p class="card-text">{{ repo.language }}</p>
        </div>
      </div>
    </div>
    <div class="pagination">
      <nav aria-label="Repository pagination">
        <ul class="pagination justify-content-center">
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
}
.card {
  flex: 1 1 30%;
  margin-bottom: 1.25rem;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease-in-out;
  flex-direction: column;
  gap: 1rem;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.3);
}
.card-body {
  padding: 20px;
}
.card-img-top {
  height: 200px;
  object-fit: cover;
  border-radius: 50%;
}
.card-title {
  font-size: 1.2rem;
  margin-bottom: 10px;
}
.card-text{
  padding: 0.33rem;
  background-color:  hsla(37, 100%, 46%, 0.548);
  color: hsl(37, 100%, 50%);
  border-radius: .5rem;
  font-size: .75rem;
}
.pagination {
  margin-top: 20px;
}
</style>
