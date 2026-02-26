import { createRouter, createWebHistory } from "vue-router";
import { routes } from "./routes";
import { isLoggedIn } from "./authService";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach(async (to, from, next) => {
  const isAuthenticated = await isLoggedIn();

  // Si intenta ir al Login pero YA está autenticado -> Al Dashboard
  if (to.name === "Login" && isAuthenticated) {
    return next({ name: "Dashboard" });
  }

  // Si la ruta requiere auth y NO está autenticado -> Al Login
  if (to.meta.requiresAuth) {
    if (isAuthenticated) {
      next();
    } else {
      next({ name: "Login" });
    }
  } else {
    next(); // Rutas públicas
  }
});

export default router;
