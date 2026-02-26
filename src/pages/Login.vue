<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useProfeliStore } from "@/stores/profile";

const email = ref("");
const password = ref("");
const tongleContraseña = ref(false);
const userData = ref({
  name: "",
  role: "",
  image: "",
});
const URL = "http://localhost:3000";

const profileStore = useProfeliStore();
const router = useRouter();

async function login() {
  const credentials = {
    email: email.value,
    password: password.value,
  };

  try {
    const response = await fetch(`${URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });
    if (!response.ok) {
      if (response.status === 401) {
        return alert("Credenciales inválidas. Verifica tu email o contraseña.");
      } else {
        return console.log(errorData.message);
      }
    }
    const data = await response.json();
    //GUARDAR ESTADO DE USUARIO
    userData.value = {
      name: data.name,
      role: data.role,
      image: "../../public/favicon.ico",
    };
    profileStore.dataProfile(userData);

    //IR A DASHBOARD
    router.push("/dashboard");
  } catch (error) {
    return null;
  }
}

function verContraseña() {
  tongleContraseña.value = !tongleContraseña.value;
}
</script>

<template>
  <div class="login-contenedor">
    <h1>Iniciar sesion</h1>
    <form class="form-login" action="" @submit.prevent="login">
      <label class="label-form" for="correo">Correo</label>
      <input
        v-model="email"
        class="input-form"
        type="email"
        name="correo"
        id="correo"
        placeholder="Test@correo.com"
        required
      />
      <label class="label-form" for="contraseña">Contraseña</label>
      <div class="password-wrapper">
        <input
          v-model="password"
          class="input-form"
          :type="tongleContraseña ? 'text' : 'password'"
          name="contraseña"
          id="contraseña"
          placeholder="************"
          minlength="6"
          required
        />
        <button
          type="button"
          class="toggle-password"
          @click="verContraseña()"
          aria-label="Alternar visibilidad de contraseña"
        >
          {{ tongleContraseña ? "🙈" : "👁️" }}
        </button>
      </div>
      <input class="btn-form" type="submit" value="Ingresar" />
    </form>
  </div>
</template>

<style scoped>
.login-contenedor {
  background-color: #ffffff;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 380px;
  text-align: center;
  margin: 50px auto;
  font-family: Arial, sans-serif;
}

.login-contenedor h1 {
  color: #333333;
  margin-bottom: 30px;
  font-size: 28px;
  font-weight: 600;
}

.form-login {
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-bottom: 20px;
}

.label-form {
  color: #555555;
  font-weight: 500;
  margin-bottom: 5px;
  margin-top: 15px;
  font-size: 15px;
}

.input-form {
  padding: 12px 15px;
  border: 1px solid #cccccc;
  border-radius: 6px;
  font-size: 16px;
  transition:
    border-color 0.3s,
    box-shadow 0.3s;
}

.input-form:focus {
  border-color: #007bff;
  outline: none;
  box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.25);
}

.password-wrapper {
  position: relative;
  display: flex;
}

.password-wrapper .input-form {
  width: 100%;
}

.toggle-password {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  font-size: 1.2rem;
  line-height: 1;
}

.password-wrapper .input-form {
  padding-right: 40px;
}

.btn-form {
  background-color: #007bff;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 17px;
  font-weight: bold;
  width: 100%;
  margin-top: 25px;
  transition:
    background-color 0.3s ease,
    transform 0.1s;
}

.btn-form:hover {
  background-color: #0056b3;
}

.btn-form:active {
  transform: scale(0.99);
}
</style>
