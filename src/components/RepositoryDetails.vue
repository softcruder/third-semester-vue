<template>
  <div class="repo-details">
    <h1>{{ repository.name }}</h1>
    <p>{{ repository.description }}</p>
    <!-- <p>
      <strong>Owner:</strong> {{ repository.owner.login }}
    </p> -->
    <p>
      <strong>Language:</strong> {{ repository.language }}
    </p>
    <p>
      <strong>Stars:</strong> {{ repository.stargazers_count }}
    </p>
    <p>
      <strong>Forks:</strong> {{ repository.forks_count }}
    </p>
    <p>
      <strong>Watchers:</strong> {{ repository.watchers_count }}
    </p>
    <p>
      <strong>Subscribers:</strong> {{ repository.subscribers_count }}
    </p>
    <p>
      <strong>Created at:</strong> {{ repository.created_at }}
    </p>
    <p>
      <strong>Last updated:</strong> {{ repository.updated_at }}
    </p>
    <p>
      <strong>URL:</strong> <a target="_blank" :href="repository.html_url">{{ repository.html_url }}</a>
    </p>
    <p>
      <strong>Live Site:</strong> <a target="_blank" :href="repository.homepage"><button>Go</button></a>
    </p>
  </div>
  <div>
    <router-link to="/repositories"><button>Go Back</button></router-link>
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
      try {
        const response = await axios.get(
          `https://api.github.com/repos/softcruder/${this.$route.params.name}`
        );
        console.log("Response:", response);
        this.repository = response.data;
      } catch (error) {
        console.error("Error:", error);
      }
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

a {
  color: black;
}
</style>
  