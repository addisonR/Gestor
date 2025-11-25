import { ref } from "vue";
import { defineStore } from "pinia";

export const useProfeliStore = defineStore("profile", () => {
  const name = ref("");
  const role = ref("");
  const image = ref("");

  const dataProfile = (dataUser) => {
    name.value = dataUser.value.name;
    role.value = dataUser.value.role;
    image.value = dataUser.value.image;
  };

  return { name, role, image, dataProfile };
});
