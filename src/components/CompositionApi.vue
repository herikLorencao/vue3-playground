<template>
  <p>Variável: {{ reactiveVariable }}</p>
  <input v-model="reactiveVariable" />
  <p>{{ users }}</p>
</template>

<script>
import { ref } from "@vue/reactivity";
import UserService from "@/services/UserService";
import { onMounted } from "@vue/runtime-core";
export default {
  setup() {
    const reactiveVariable = ref("initial value");
    const users = ref([]);
    const userService = new UserService();

    const getUsers = async () => {
      users.value = await userService.list();
    };

    onMounted(getUsers);

    return { reactiveVariable, users };
  },
};
</script>

<style scoped>
* {
  font-size: 1.8rem;
}
</style>