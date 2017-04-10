<template>
  <div class="animation">
    <iframe src="/static/media/animation/index.html"></iframe>
  </div>
</template>

<script>

export default {
  name: 'animation'
}
</script>

<style scoped>

  .animation {
    padding-bottom: 56.25%;
    position: relative;
    overflow: hidden;
  }

  iframe {
    border: 0;
    position: absolute;
    height: 100%;
    width: 100%;
  }
</style>
