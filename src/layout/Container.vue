<template>
  <header>
    <h1>Vue 3 - Funcionalidades</h1>
  </header>
  <menu-component />
  <main></main>
</template>

<script>
import MenuComponent from "../components/Menu";

export default {
  components: {
    MenuComponent,
  },
  data() {
    return {
      funcionality: "",
    };
  },
};
</script>

<style scoped>
header {
  margin-top: 40px;
  text-align: center;
}

h1 {
  color: #333;
  font-size: 3rem;
}
</style>