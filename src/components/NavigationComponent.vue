<template>
    <div id="C">
      <nav>
        <div class="logo">
          <img src="./assets/logo.png" alt="Logo">
        </div>
        <div class="nav-links">
          <router-link to="/home">Home</router-link>
          <router-link to="/repositories">Repositories</router-link>
        </div>
      </nav>
    </div>
  </template>
<script>
export default {
  name: 'NavigationComponent',
};
</script>