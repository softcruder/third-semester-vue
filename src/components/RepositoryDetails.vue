<template>
  <div class="repo-details">
    <h1>{{ repo.name }}</h1>
    <p>{{ repo.description }}</p>
    <span>{{ repo.owner.avatar }}</span>
    <p>
      <strong>Language:</strong> {{ repo.language }}
    </p>
    <p>
      <strong>Stars:</strong> {{ repo.stargazers_count }}
    </p>
    <p>
      <strong>Created at:</strong> {{ repo.created_at }}
    </p>
    <p>
      <strong>Last updated:</strong> {{ repo.updated_at }}
    </p>
    <p>
      <strong>URL:</strong> <a target="_blank" :href="repo.html_url">{{ repo.html_url }}</a>
    </p>
  </div>
</template>
  
<script>
import axios from "axios";

export default {
  name: "RepositoryDetails",
  data() {
    return {
      repository: {},
    };
  },
  mounted() {
    this.getRepository();
  },
  methods: {
    async getRepository() {
      const response = await axios.get(
        `https://api.github.com/repos/softcruder/${this.$route.params.name}`
      );
      this.repository = response.data;
    },
  },
};
</script>
<style scoped>
.repo-details {
  border: 1px solid #e1e4e8;
  border-radius: .5rem;
  padding: 1rem;
  margin-bottom: 2rem;
}

.repo-details h1 {
  margin-top: 0;
}
</style>
  