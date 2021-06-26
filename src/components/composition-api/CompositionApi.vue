<template>
  <p>Variável: {{ reactiveVariable }}</p>
  <input v-model="reactiveVariable" />
  <p>{{ users }}</p>
  <p>Número de usuários: {{ numberOfUsers }}</p>
  <p>Prop value: {{ info }}</p>
  <p>Prop opcional: {{ optionalProp }}</p>
  <button type="button" @click="click">Clique aqui</button>
  <div ref="element">Conteudo do elemento exibido</div>
</template>

<script>
import { userRepository } from "./user-repository";
import { otherMethods } from "./other-methods";
import { onMounted, provide, readonly, ref, toRef } from "@vue/runtime-core";

export default {
  props: {
    info: {
      type: Number,
      required: true,
    },
    optionalProp: {
      type: String,
    },
  },
  setup(props, context) {
    // Como é uma propriedade opcional se passar o segundo parâmetro o método não gera erro
    const optionalValue = toRef(props, "optionalProp");

    // Conteúdo da tag div com ref element (precisa devolver variavel no return);
    const element = ref(null);

    onMounted(() => console.log(context));
    onMounted(() => console.log(element.value));

    provide("atributo", { atributo: true });
    provide("readonly", readonly({ atributo: true }));
    // inject("atributo");

    // Funções extraidas para outros arquivos
    const { users, numberOfUsers } = userRepository();
    const { reactiveVariable, infoProp } = otherMethods(props);

    return {
      users,
      numberOfUsers,
      reactiveVariable,
      infoProp,
      optionalValue,
      element,
    };
  },
  methods: {
    click() {
      alert("Botão clicado");
    },
  },
};
</script>

<style scoped>
* {
  font-size: 1.8rem;
}

button {
  color: #fff;
  background-color: #333;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #222;
}
</style>