<template>
  <header>
    <h1>Vue 3 - Funcionalidades</h1>
  </header>
  <menu-component @active="changeMenu" />
  <main>
    <composition-api
      v-if="isMenu(0)"
      :info="propInfo"
      :optional-prop="optionalProp"
    />
    <parent-root v-if="isMenu(1)"></parent-root>
    <mixins v-if="isMenu(2)"></mixins>
    <root v-if="isMenu(3)"></root>
    <custom-directives v-if="isMenu(4)"></custom-directives>
    <teleport-component v-if="isMenu(5)"></teleport-component>
    <typescript v-if="isMenu(6)"></typescript>
  </main>
</template>

<script>
import MenuComponent from "../components/Menu";
import CompositionApi from "../components/composition-api/CompositionApi";
import ParentRoot from "../components/provide-inject/ParentRoot";
import Mixins from "../components/mixins/Mixins";
import Root from "../components/async-components/Root";
import CustomDirectives from "../components/custom-directives/CustomDirectives";
import TeleportComponent from "../components/teleport/Teleport";
import Typescript from "../components/typescript-component/Typescript";

export default {
  components: {
    MenuComponent,
    CompositionApi,
    ParentRoot,
    Mixins,
    Root,
    CustomDirectives,
    TeleportComponent,
    Typescript,
  },
  data() {
    return {
      funcionality: 0,
      propInfo: 1,
      optionalProp: "",
    };
  },
  methods: {
    isMenu(menu) {
      return this.funcionality == menu;
    },
    changeMenu(idxElement) {
      this.funcionality = idxElement;
    },
  },
  mounted() {
    setInterval(() => {
      this.propInfo = 2;
      this.optionalProp = "teste";
    }, 2000);
  },
};
</script>

<style>
header {
  margin-top: 40px;
}

header > h1 {
  font-size: 3rem;
}

h1 {
  margin-top: 30px;
  color: #333;
  font-size: 2rem;
  text-align: center;
}
</style>