<template>
    <div class="not-found">
      <h1>404 Not Found</h1>
      <p>The page you're looking for doesn't exist.</p>
      <button><router-link to="/home">Go Home</router-link></button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'NotFound',
  };
  </script>
  
  <style scoped>
  .not-found {
    display: flex;
    height: 80vh;
    flex-direction: column;
    gap: 2rem;
    align-items: center;
    justify-content: center;
  }

  button{
    background: linear-gradient(90deg, hsl(153,48%,49%) 3%,  hsl(211,28%,29%) 134%);
    color: #fff;
    border: none;
    border-radius: .5rem;
    padding: .75rem;
  }
  a{
    color: #fff;
    text-decoration: none;
    font-weight: 400;
  }
  </style>
  