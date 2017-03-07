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
  .animation, iframe {
    width: 100%;
  }

  .animation {
    padding-bottom: 56.25%;
    position: relative;
    overflow: hidden;
  }

  iframe {
    border: 0;
    position: absolute;
    width: 100%;
    height: 100%
  
  }
</style>
