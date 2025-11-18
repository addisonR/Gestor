import Login from "@/pages/Login.vue";
import Dashboard from "@/pages/Dashboard.vue";
import NotFound from "@/pages/NotFound.vue";
//submenu
import DashboardHome from "@/components/DashboardHome.vue";
import CasosView from "@/components/CasosView.vue";
import ClientesView from "@/components/ClientesView.vue";
import UsuariosView from "@/components/UsuariosView.vue";

export const routes = [
  { path: "/", name: "Login", component: Login },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
    meta: { requiresAuth: true },
    children: [
      {
        path: "", // Se activa en /dashboard
        name: "InicioDashboard",
        component: DashboardHome,
      },
      {
        path: "casos", // Se activa en /dashboard/casos
        name: "Casos",
        component: CasosView,
      },
      {
        path: "clientes", // Se activa en /dashboard/clientes
        name: "Clientes",
        component: ClientesView,
      },
      {
        path: "usuarios", // Se activa en /dashboard/usuarios
        name: "Usuarios",
        component: UsuariosView,
      },
    ],
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFound,
  },
];
