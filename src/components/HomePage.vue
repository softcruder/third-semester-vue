<template>
  <div>
    <h1>Welcome to My GitHub Repositories</h1>
    <button><router-link to="/repositories">View Repositories</router-link></button>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
};
</script>
<style scoped>
div {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 50vh;
}
</style>
