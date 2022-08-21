export const todoModule = {
  state: () => ({
    todos: localStorage.getItem("todos")
      ? JSON.parse(localStorage.getItem("todos"))
      : [],
    selectedTodo: "id",
    searchQuery: "",
    sortOptions: [
      { value: "id", name: "Дате" },
      { value: "completed", name: "Статусу" },
    ],
  }),
  actions: {
    addTodo({ commit, todo }) {
      if (this.state.todo !== "") {
        commit("addTodo", todo);
      }
    },
    updateTodo({ commit }, id) {
      commit("updateTodo", id);
    },
  },
  getters: {
    sortedTodos(state) {
      if (state.selectedTodo === "id") {
        return [...state.todos].sort((a, b) => b.id - a.id);
      }
      if (state.selectedTodo === "completed") {
        return [...state.todos].sort(
          (todo1, todo2) => todo1.completed - todo2.completed
        );
      }
    },
    sortedAndSearchedTodos(state, getters) {
      return getters.sortedTodos.filter((todo) =>
        todo.text.toLowerCase().includes(state.searchQuery.toLowerCase())
      );
    },
  },

  mutations: {
    addTodo(state) {
      const createTodo = {
        id: state.todos.length + 1,
        text: state.text,
        completed: false,
        date: new Date().toISOString().slice(0, 10),
      };
      state.todos.push(createTodo);
      localStorage.setItem("todos", JSON.stringify(state.todos));
      state.createTodo = {
        text: (state.text = ""),
      };
    },

    updateTodo: (state, { index, data }) => {
      state.todos[index].completed = data.completed;
      state.todos.save(state.todos);
    },

    setTodos(state, todos) {
      state.todos = todos;
    },

    setSelectedTodo(state, selectedTodo) {
      state.selectedTodo = selectedTodo;
    },
    setSearchQuery(state, searchQuery) {
      state.searchQuery = searchQuery;
    },
  },
  //!!
  namespaced: true,
};
