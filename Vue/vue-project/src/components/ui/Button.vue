<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script>
  export default {
    name: "Button"
  }
</script>

<style scoped>
  .btn {
    align-self: flex-end;
    padding: 10px 20px;
    background: none;
    color: teal;
    border: 1px solid teal;
    cursor: pointer;
  }
</style>