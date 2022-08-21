<template>
  <div class="flex-search-select">
    <div class="flex-search">
      <img src="@/assets/icons/Search.svg" alt="Search" />
      <Input
        type="text"
        name="Search"
        placeholder="Поиск ID, Имени, статуса и даты"
        class="input-search"
        :model-value="searchQuery"
        @update:model-value="setSearchQuery"
      />
    </div>
    <div class="flex-select select-category">
      <p class="isMobule">Сортировать по:</p>
      <select v-model="modelValue" @change="changeOption" name="data">
        <!-- <option disabled value="">Select option</option> -->
        <option
          v-for="option in options"
          :key="option.value"
          :value="option.value"
        >
          {{ option.name }}
        </option>
      </select>
    </div>
  </div>
</template>
<script>
import { mapMutations, mapState } from "vuex";
import "./search.scss";
export default {
  props: {
    modelValue: {
      type: String,
    },
    options: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    changeOption(e) {
      this.$emit("update:modelValue", e.target.value);
    },
    ...mapMutations({
      setSearchQuery: "todo/setSearchQuery",
    }),
  },
  computed: {
    ...mapState({
      todos: (state) => state.todo.todos,
      searchQuery: (state) => state.todo.searchQuery,
      sortOptions: (state) => state.todo.sortOptions,
    }),
  },
};
</script>


