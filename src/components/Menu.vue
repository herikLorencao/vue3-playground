<template>
  <nav>
    <ul>
      <li @click="active(i)" v-for="(menu, i) in menus" :key="i">{{ menu }}</li>
    </ul>
  </nav>
</template>

<script>
import MenuService from "../services/MenuService";

export default {
  data() {
    return {
      menus: [],
    };
  },
  methods: {
    active(idx) {
      this.$emit("active", idx);
    },
  },
  mounted() {
    const menuService = new MenuService();
    this.menus = menuService.list();
  },
};
</script>

<style scoped>
ul {
  display: flex;
  justify-content: space-around;
  width: 100%;
  list-style: none;
  background-color: #333;
  height: 40px;
}

li {
  cursor: pointer;
  display: flex;
  align-items: center;
  height: 100%;
  color: #fff;
  font-size: 1.8rem;
}

li:hover {
  background-color: #fff;
  padding: 0 10px;
  color: #333;
}
</style>