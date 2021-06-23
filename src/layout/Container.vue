<template>
  <header>
    <h1>Vue 3 - Funcionalidades</h1>
  </header>
  <menu-component @active="changeMenu" />
  <main>
    <composition-api />
  </main>
</template>

<script>
import MenuComponent from "../components/Menu";
import CompositionApi from "../components/CompositionApi";

export default {
  components: {
    MenuComponent,
    CompositionApi,
  },
  data() {
    return {
      funcionality: "",
    };
  },
  methods: {
    changeMenu(idxElement) {
      this.funcionality = idxElement;
    },
  },
};
</script>

<style>
header {
  margin-top: 40px;
}

header > h1 {
  font-size: 3rem;
}

h1 {
  margin-top: 30px;
  color: #333;
  font-size: 2rem;
  text-align: center;
}
</style>