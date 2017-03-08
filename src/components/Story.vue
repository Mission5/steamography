<template>
  <div class="box">Content for "{{story.title}}"
   Pages: {{(story.pages) ? story.pages.length : 0}}
  </div>
</template>

<script>
export default {
  name: 'story',
  props: ['story'],
  data () {
    return {
      currentVideo: ''
    }
  }
}
</script>

<style scoped>


</style>
