<template>
  <promise-component></promise-component>
</template>

<script>
import { defineAsyncComponent } from "@vue/runtime-core";
export default {
  components: {
    PromiseComponent: defineAsyncComponent(
      () =>
        new Promise((resolve) => {
          setInterval(() => resolve(import("./AsyncComponent.vue")), 2000);
        })
    ),
  },
};
</script>

<style>
</style>