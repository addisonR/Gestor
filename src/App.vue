<script setup></script>

<template>
  <div id="app" :class="{ 'center-content': $route.name === 'Login' }">
    <router-view />
  </div>
</template>

<style scoped></style>
