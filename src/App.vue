<template>
  <div id="app">
    <nav>
      <div class="logo">
        <img src="./assets/logo.png" alt="Logo">
      </div>
      <div class="nav-links">
        <router-link to="/home">Home</router-link>
        <router-link to="/repositories">Repositories</router-link>
      </div>
    </nav>
    <main>
      <router-view></router-view>
    </main>
    <footer>
      <p>&copy; 2023 My GitHub Repositories | Softcruder</p>
    </footer>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap');

*{
  font-family: 'Poppins', sans-serif;
  margin: auto;
}
nav {
  padding: 1rem;
  display: flex;
  justify-content: space-evenly;
  border-bottom: 1px solid #dfdfdf;
}

img {
  max-height: 2rem;
  float: left;
}

nav a {
  color:  hsl(211,28%,29%);
  font-weight: 600;
  text-decoration: none;
  padding: 1rem;
}

nav a:hover {
  border-bottom: 2px solid hsl(153,48%,49%);
}

nav a:active{
  border-bottom: 2px solid hsl(153,48%,49%);
}

a{
    color: #fff;
    text-decoration: none;
    font-weight: 400;
}

main {
  max-width: 90%;
  margin: 0 auto;
  padding: 1rem;
}

button{
    background: linear-gradient(90deg, hsl(153,48%,49%) 3%,  hsl(211,28%,29%) 134%);
    color: #fff;
    border: none;
    border-radius: .5rem;
    padding: .75rem;
}

footer {
  background-color: #24292e;
  color: white;
  text-align: center;
  padding: 1rem;
  position: fixed;
  bottom: 0;
  width: 100%;
}
</style>
