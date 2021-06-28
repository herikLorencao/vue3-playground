<template>
  <p>Componente escrito em TS, ver configuração na documentação</p>
  <p>Usar defineComponent para utilizar a inferência de tipo</p>
  <p>Colocar lang=ts na tag script</p>
  <p>Exemplo de atributo renderizado: {{ example }}</p>
  <p>Título livro (exemplo): {{ book.title }}</p>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { Book } from "@/typings/book";

export default defineComponent({
  setup() {
    const example = ref("atributo");
    return { example };
  },
  data() {
    return {
      book: {
        title: "Crônicas de SQL",
        author: "SQL Mage",
      } as Book,
    };
  },
});
</script>

<style>
p {
  font-size: 2rem;
}
</style>