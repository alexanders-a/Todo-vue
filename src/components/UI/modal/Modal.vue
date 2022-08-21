<script>
import useKeyDown from "@/hooks/Usekey";
import ModalMix from "@/mixins/ModalMix";
import { mapState } from "vuex";
import "./modal.scss";

export default {
  name: "Modal",
  mixins: [ModalMix],
  computed: {
    ...mapState({
      todos: (state) => state.todo.todos,
    }),
    todo: {
      get() {
        return this.$store.state.todo;
      },
      set(value) {
        this.$store.state.todo = value;
      },
    },
  },
  methods: {
    addTodo() {
      this.$store.dispatch("todo/addTodo", this.todos);
      this.todos = "";
      this.close();
    },
  },

  setup(props, { emit }) {
    useKeyDown([
      {
        key: "Escape",
        fn: () => {
          emit("update:show", false);
        },
      },
    ]);
    return {
      emit,
    };
  },
};
</script>

<template>
  <div v-if="show">
    <div @click.stop="close" class="container">
      <div @click.stop class="content">
        <div class="title-modal">
          <h2 class="text-modal">Создать новую задачу</h2>
          <button @click="close" class="close">✖</button>
        </div>
        <h2 class="text-modal-direction">Описание</h2>
        <Input
          v-focus
          v-model="todo.text"
          class="input-modal"
          placeholder="Введите описание"
          @keyup.enter="addTodo()"
        />
        <Button class="button-modal" @click="addTodo">Создать</Button>
      </div>
    </div>
  </div>
</template>
