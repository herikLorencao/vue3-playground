<template>
  <container />
</template>

<script>
import Container from "@/layout/Container";

export default {
  name: "App",
  components: {
    Container,
  },
};
</script>

<style>
* {
  font-family: "Roboto", sans-serif;
  font-size: 10px;
  box-sizing: border-box;
  border: 0;
}

body {
  background-color: #eee;
}
</style>
