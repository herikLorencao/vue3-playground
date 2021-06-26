<template>
  <p>Variável: {{ reactiveVariable }}</p>
  <input v-model="reactiveVariable" />
  <p>{{ users }}</p>
  <p>Número de usuários: {{ numberOfUsers }}</p>
</template>

<script>
import { ref } from "@vue/reactivity";
import UserService from "@/services/UserService";
import { onMounted, watch } from "@vue/runtime-core";
export default {
  setup() {
    const reactiveVariable = ref("initial value");
    const users = ref([]);
    const numberOfUsers = ref(0);
    const userService = new UserService();

    const getUsers = async () => {
      users.value = await userService.list();
    };

    const updateNumberOfUsers = (newUsersValue) => {
      numberOfUsers.value = newUsersValue.length;
    };

    onMounted(getUsers);

    watch(users, updateNumberOfUsers);

    return { reactiveVariable, users, numberOfUsers };
  },
};
</script>

<style scoped>
* {
  font-size: 1.8rem;
}
</style>