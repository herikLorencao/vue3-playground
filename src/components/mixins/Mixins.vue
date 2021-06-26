<template>
  <p>{{ valor }}</p>
</template>

<script>
import mixin from "./mixin";

export default {
  mixins: [mixin],
};
</script>

<style scoped>
p {
  font-size: 2rem;
}
</style>