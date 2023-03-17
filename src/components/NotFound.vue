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
  
  <style>
  .not-found {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;
    justify-content: center;
  }

  button{
    background: linear-gradient(90deg, hsl(37, 100%, 51%) 3%, hsl(37, 93%, 34%) 134%);
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
  