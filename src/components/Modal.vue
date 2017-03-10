<template>
  <transition name="modal">
    <div class="modal-mask" v-on:click.self="$emit('close')">
      <div class="modal-container" v-bind:style="'width:' + width">
        <button class="modal-close-button" @click="$emit('close')" aria-label="Close Modal" title="Close Modal"></button>
          <slot></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'modal',
  props: {
    'width': {
      default: '600px'
    }
  },
  data () {
    return {}
  }
}
</script>

<style scoped>
  .modal-mask {
    background-color: rgba(0, 0, 0, .7);
    cursor: pointer;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    left: 0;
    position: fixed;
    top: 0;
    transition: opacity .3s ease;
    width: 100%;
    z-index: 9998;
  }

  .modal-container {
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
    color: #000;
    margin: 0px auto;
    max-width: calc(100% - 10px);
    max-height: calc(100% - 10px);
    overflow-y: scroll;
    position: relative;
    transition: all .3s ease;
  }

  .modal-close-button {
    background: url('/static/media/close-icon.png') no-repeat center;
    height: 28px;
    padding: 20px;
    position: absolute; top: 0; right: 0;
    width: 28px;
  }

  .modal-enter {
    opacity: 0;
  }

  .modal-leave-active {
    opacity: 0;
  }

  .modal-enter .modal-container,
  .modal-leave-active .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }

  @media screen and (min-width: 640px) {
    .modal-close-button {
      right: -35px;
      top: -35px;
    }
  }
</style>
