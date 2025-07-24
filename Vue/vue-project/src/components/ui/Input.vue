<template>
  <input
    class="input"
    type="text"
    :value="modelValue"
    @input="updateInput"
  />
</template>

<script>
  export default {
    name: "Input",
    props: {
      modelValue: [String, Number]
    },
    methods: {
      updateInput(event) {
        this.$emit('update:modelValue', event.target.value)
      }
    }
  }
</script>

<style scoped>
.input {
  width: 100%;
  padding: 10px;
  margin-top: 10px;
  border: 1px solid teal;
}
</style>