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
import { onMounted } from "@vue/runtime-core";

export default {
  components: {
    Children,
  },
  setup() {
    const provideValue = ref("Valor root");

    onMounted(() =>
      setInterval(() => (provideValue.value = "Valor root atualizado"), 2000)
    );

    return { provideValue };
  },
  // valores reativos e estaticos podem ser passados
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