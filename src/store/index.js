import { createStore } from "vuex";
import { todoModule } from "./TodoModule";

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    todo: todoModule,
  },
});
