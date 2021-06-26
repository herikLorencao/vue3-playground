<template>
  <p>Valor componente filho: {{ provideValue }}</p>
</template>

<script>
export default {
  inject: ["provideValue"],
};
</script>

<style>
</style>