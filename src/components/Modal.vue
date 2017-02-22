<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper" v-on:click.self="$emit('close')">
        <div class="modal-container" v-bind:style="'max-width:100%; width:' + width">
          <button class="modal-close-button" @click="$emit('close')" aria-label="Close Modal" title="Close Modal"></button>
            <slot></slot>
          </div>
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
    display: table;
    height: 100%;
    left: 0;
    position: fixed;
    top: 0;
    transition: opacity .3s ease;
    width: 100%;
    z-index: 9998;
  }

  .modal-wrapper {
    display: table-cell;
    vertical-align: middle;
  }

  .modal-container {
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
    color: #000;
    margin: 0px auto;
    padding: 5px;
    position: relative;
    transition: all .3s ease;
  }

  .modal-close-button {
    background: url('/static/media/close-icon.png') no-repeat;
    position: absolute; top: -30px; right: -30px;
    height: 28px;
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

</style>
