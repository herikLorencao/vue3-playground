<template>
  <div>
    <input v-focus value="elemento focado" type="text" />
    <input
      v-color="'red'"
      value="elemento colorido por parâmetro"
      type="text"
    />
    <input
      v-css:[cssProperty]="'100px'"
      type="text"
      value="posicao manipulada por parametros (valores podem ser dinamicos)"
    />
    <p>
      Também podem ser passados valores que mudão em tempo de execução e objetos
      para múltiplos parâmetros
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cssProperty: "margin-top",
    };
  },
  directives: {
    focus: {
      mounted(el) {
        el.focus();
      },
    },
    color: {
      mounted(el, binding) {
        el.style.backgroundColor = binding.value;
      },
    },
    css: {
      mounted(el, binding) {
        // Validando se propriedade foi passada
        if (!binding.arg) return;

        const property = binding.arg;
        el.style[property] = binding.value;
      },
    },
  },
};
</script>

<style scoped>
div {
  display: flex;
  flex-direction: column;
  width: 70%;
}

input {
  padding: 10px 5px;
  font-size: 1.6rem;
  margin-bottom: 30px;
}

p {
  font-size: 2rem;
}
</style>