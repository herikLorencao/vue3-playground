<template>
  <h1>
    Passagem de dados entre componente pai e filhos sem necessidade de passar
    por toda cadeia de componentes
  </h1>
  <p>Atributo no Root = {{ provideValue }}</p>
  <children></children>
</template>

<script>
import { ref } from "@vue/reactivity";
import Children from "./Children";

export default {
  components: {
    Children,
  },
  setup() {
    const provideValue = ref("Valor root");
    return { provideValue };
  },
  provide() {
    return {
      provideValue: this.provideValue,
    };
  },
};
</script>

<style scoped>
p {
  font-size: 1.8rem;
}
</style>