<template>
  <div class="app">
    <div  :class="{ blur: visibleModal }">
      <div>
        <Header v-model:show="visibleModal" />
      </div>
      <div>
        <Search
          :model-value="selectedTodo"
          :options="sortOptions"
          @update:model-value="setSelectedTodo"
        />
      </div>
      <TodoList :todos="sortedAndSearchedTodos" />
    </div>
    <Modal @create="createTodo" v-model:show="visibleModal" />
  </div>
</template>

<script>
import Header from "./components/Header/Header.vue";
import TodoList from "./components/TodoList.vue";
import Search from "./components/UI/search/Search.vue";
import { mapGetters, mapMutations, mapState } from "vuex";
import "./index.scss";

export default {
  name: "App",

  components: {
    Header,
    TodoList,
    Search,
  },

  data() {
    return {
      visibleModal: false,
    };
  },
  methods: {
    createTodo(todo) {
      this.todos.push(todo);
      this.visibleModal = false;
    },
    ...mapMutations({
      setSearchQuery: "todo/setSearchQuery",
      setSelectedTodo: "todo/setSelectedTodo",
    }),
  },
  computed: {
    ...mapState({
      todos: (state) => state.todo.todos,
      selectedTodo: (state) => state.todo.selectedTodo,
      searchQuery: (state) => state.todo.searchQuery,
      sortOptions: (state) => state.todo.sortOptions,
    }),
    ...mapGetters({
      sortedTodos: "todo/sortedTodos",
      sortedAndSearchedTodos: "todo/sortedAndSearchedTodos",
    }),
  },
};
</script>

<style lang="scss"></style>
