<template>
  <transition name="modal">
    <div class="modal-mask" v-on:click.self="$emit('close')">
      <div class="modal-container" v-bind:style="'width:' + width">
        <button class="modal-close-button" @click="$emit('close')" aria-label="Close Modal" title="Close Modal"></button>
        <div class="modal-contents">
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
    max-width: 95vw;
    position: relative;
    transition: all .3s ease;
  }

  .modal-close-button {
    background: url('/static/media/close-icon.png') no-repeat center;
    height: 28px;
    padding: 20px;
    position: absolute;
    right: 10px;
    width: 28px;
    z-index: 1000;
  }

  .modal-contents {
    overflow-y: auto;
    max-height: 95vh;
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
      top: -10px;
      right: -35px;
    }
  }
  @media screen and (min-height: 640px) {
    .modal-close-button {
      top: -35px;
      right: -10px;
    }
  }
  @media screen and (min-width: 640px) and (min-height: 640px) {
    .modal-close-button {
      top: -35px;
      right: -35px;
    }
  }
</style>
