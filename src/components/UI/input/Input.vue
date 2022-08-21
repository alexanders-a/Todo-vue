<script>
import "./input.scss";
export default {
  name: "Input",
  props: {
    modelValue: [String, Number],
  },
  methods: {
    updateInput(e) {
      this.$emit("update:modelValue", e.target.value);
      // this.$emit('update:myValue', e.target.value)
    },
  },
};
</script>

<template>
  <input
    :value="modelValue"
    @input="updateInput"
    type="text"
    class="input-search"
  />
</template>
