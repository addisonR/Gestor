import { createRouter, createWebHistory } from "vue-router";
import { routes } from "./routes";
import { isLoggedIn } from "./authService";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = isLoggedIn();

  if (to.name === "Login" && isAuthenticated) {
    return next({ name: "Dashboard" });
  }

  if (to.meta.requiresAuth) {
    if (isAuthenticated) {
      next();
    } else {
      next({ name: "Login" });
    }
  } else {
    next();
  }
});

export default router;
