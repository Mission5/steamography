

<template>

  <div class="slides">
    <!--Slide: {{current + 1}} / {{ slides.length }}-->
    <div v-for="(slide, index) in slides" class="slide"
      v-bind:class="[slide.template, {current: index===current, before: index < current, after: index > current}]"
      :style="slide.background ? 'backgroundImage: url(' + macros(slide.background, story.id) + ')' : ''">
      <div class="slide-contents">
        <div v-html="macros(slide.content.join(''), story.id)"
          class="slide-root"></div>
      </div>
    </div>
    <button v-on:click="current--" id="back" class="btn-nav" v-bind:class="{ hidden: current <= 0 }"
      v-bind:disabled="current<=0" aria-label="previous slide"></button>
    <button v-on:click="current++" id="next" class="btn-nav" v-bind:class="{ hidden: current >= slides.length-1 }"
      v-bind:disabled="current>=slides.length-1" aria-label="next slide"></button>
  </div>
</template>

<script>
export default {
  name: 'story',
  props: ['story'],
  data () {
    return {
      current: 0,
      slides: [],
      macros: function (content, id) {
        return content.replace(/~\//gi, '/static/stories/' + id + '/')
      }
    }
  },
  created () {
    this.$http.get('/static/stories/' + this.story.id + '/manifest.json').then(response => {
      this.slides = response.body.slides
      console.log(response.body)
    }, response => {
      this.slides = [{template: 'callout malibu', content: ['I\'m afraid I can\'t open that section Dave.<br/>Maybe try Jake and Scout?']}]
    })
  }
}
</script>

<style scoped>


</style>
