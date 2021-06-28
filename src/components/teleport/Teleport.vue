<template>
  <div class="container">
    <span>Conteúdo inicial</span>
    <button @click="toggleTeleport">Mostrar teleport</button>
  </div>

  <teleport to=".container">
    <span v-if="showTeleport"
      >Conteúdo teleportado (adicionado dentro do componente referenciado)
    </span>
  </teleport>
</template>

<script>
import { ref } from "@vue/reactivity";
export default {
  setup() {
    const showTeleport = ref(false);
    return { showTeleport };
  },
  methods: {
    toggleTeleport() {
      this.showTeleport = !this.showTeleport;
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

span {
  font-size: 2.5rem;
  margin: 20px 0;
}

button {
  font-size: 1.8rem;
  background-color: #333;
  color: #fff;
  width: 20%;
  padding: 10px 0;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #222;
}
</style>