<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

function cerrarSesion() {
  localStorage.removeItem("access-point");
  router.push("/");
}
</script>

<template>
  <div class="sidebar">
    <div class="sidebar-hero">
      <img src="#" alt="" />
      <h2>Mi nombre</h2>
      <p>Rol</p>
    </div>
    <div class="sidebar-menu">
      <ul>
        <li><RouterLink to="/dashboard" exact>Inicio</RouterLink></li>
        <li><RouterLink to="/dashboard/casos">Casos</RouterLink></li>
        <li><RouterLink to="/dashboard/clientes">Clientes</RouterLink></li>
        <li><RouterLink to="/dashboard/usuarios">Usuarios</RouterLink></li>
      </ul>
    </div>
    <hr />
    <div class="sidebar-footer">
      <button @click="cerrarSesion">Cerrar Sesion</button>
    </div>
  </div>
</template>

<style scoped>
.sidebar {
  width: 250px;
  height: 100dvh;
  background-color: #2c3e50;
  color: #ecf0f1;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
}

.sidebar-hero {
  text-align: center;
  padding: 20px;
  border-bottom: 1px solid #34495e;
}

.sidebar-hero img {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 10px;
  border: 3px solid #3498db;
}

.sidebar-hero h2 {
  margin: 5px 0 0;
  font-size: 1.2em;
  color: #fff;
}

.sidebar-hero p {
  margin: 5px 0 0;
  font-size: 0.9em;
  color: #bdc3c7;
}

.sidebar-menu {
  flex-grow: 1;
  padding: 20px 0;
}

.sidebar-menu ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.sidebar-menu li {
  cursor: pointer;
  margin: 0;
}

.sidebar-menu a {
  display: block;
  text-decoration: none;
  color: inherit;
  padding: 12px 20px;
  transition: background-color 0.3s ease;
}

.sidebar-menu a:hover {
  background-color: #34495e;
}

.sidebar-menu a.router-link-exact-active {
  background-color: #34495e;
  border-left: 4px solid #3498db;
  padding-left: 16px;
}

.sidebar hr {
  border: none;
  border-top: 1px solid #34495e;
  margin: 10px 20px;
}

.sidebar-footer {
  padding: 20px;
  text-align: center;
}

.sidebar-footer button {
  width: 100%;
  padding: 10px;
  background-color: #e74c3c;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1em;
  transition: background-color 0.3s ease;
}

.sidebar-footer button:hover {
  background-color: #c0392b;
}
</style>
