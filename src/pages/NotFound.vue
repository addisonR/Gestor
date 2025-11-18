<template>
  <div class="not-found">
    <h1>404</h1>
    <h2>¡Ups! Esta página no existe.</h2>
    <p>La ruta que has intentado acceder no se encuentra.</p>
    <router-link to="/">Volver a la página principal</router-link>
  </div>
</template>
<style>
.not-found {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100dvh;
}
</style>

<script setup></script>
