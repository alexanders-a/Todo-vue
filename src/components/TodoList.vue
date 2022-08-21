<template>
  <table v-if="todos.length > 0" class="styled-table">
    <thead>
      <tr>
        <th class="table-direction-dividers">
          <Checkbox class="check-todo"></Checkbox>
        </th>
        <th>
          <div class="flex">
            <hr />
            <p class="p">Описание</p>
          </div>
        </th>
        <th>
          <div class="flex">
            <hr />
            <p class="p">Статус</p>
          </div>
        </th>
        <th>
          <div class="flex">
            <hr />
            <p class="p">Дата</p>
          </div>
        </th>
      </tr>
    </thead>
    <tbody v-for="todo in todos" :key="todo.id">
      <tr stop @click="onToggle">
        <td>
          <Checkbox
            @click="updateTodo($event.target.checked, todo)"
            :checked="todo.completed"
          ></Checkbox>
        </td>
        <td class="flex">
          <p>
            {{ todo.text }}
          </p>
        </td>
        <td
          class="is-mobile"
          style="color: #f89b11"
          v-if="todo.completed === false"
        >
          <p>В работе</p>
        </td>
        <td
          class="is-mobile"
          style="color: #134ec1"
          v-if="todo.completed === true"
        >
          <p>Выполнено</p>
        </td>
        <td class="is-mobile">
          <p>{{ todo.date }}</p>
        </td>
      </tr>
    </tbody>
  </table>
  <div class="nothing" v-else>
    <h2>Ничего нет</h2>
  </div>
</template>

<script>
import "./todoList.scss";

export default {
  props: {
    todos: {
      type: Array,
      required: true,
    },
  },
  methods: {
    updateTodo(checked, todo) {
      todo.completed = !todo.completed;
      localStorage.setItem("todos", JSON.stringify(this.todos));
    },
  },
};
</script>
