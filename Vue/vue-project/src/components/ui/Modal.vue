<script>
  import toggleMixin from '@/mixins/toggleMixin'

  export default {
    name: "Modal",
    mixins: [toggleMixin]
  }
</script>

<template>
  <div class="modal" v-if="show" @click="hideModal">
    <div class="modal--content" @click.stop>
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
  .modal {
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    display: flex;
  }

  .modal--content {
    width: fit-content;
    margin: auto;
    background: white;
    border-radius: 12px;
    min-height: 50px;
    min-width: 300px;
    padding: 10px;
  }
</style>