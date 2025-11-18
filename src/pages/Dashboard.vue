<script setup>
import Sidebar from "@/components/SIdebar.vue";
</script>
<template>
  <div class="layout">
    <Sidebar />
    <div class="content">
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
.layout {
  display: flex;
  height: 100%;
}

.content {
  flex-grow: 1;
  padding: 20px;
  overflow-y: auto;
}

.content h1 {
  margin-top: 0;
}
</style>
