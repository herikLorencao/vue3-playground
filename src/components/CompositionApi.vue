<template>
  <p>Variável: {{ reactiveVariable }}</p>
  <input v-model="reactiveVariable" />
  <p>{{ users }}</p>
  <p>Número de usuários: {{ numberOfUsers }}</p>
  <p>Prop value: {{ info }}</p>
</template>

<script>
import { userRepository } from "./composition-api/user-repository";
import { otherMethods } from "./composition-api/other-methods";

export default {
  props: {
    info: {
      type: Number,
      required: true,
    },
  },
  setup(props) {
    const { users, numberOfUsers } = userRepository();
    const { reactiveVariable, infoProp } = otherMethods(props);
    return { users, numberOfUsers, reactiveVariable, infoProp };
  },
};
</script>

<style scoped>
* {
  font-size: 1.8rem;
}
</style>