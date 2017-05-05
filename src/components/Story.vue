

<template>

  <div class="slides">
    <div v-for="(slide, index) in slides" class="slide" ref="slide"
      v-on:touchstart="swipe" v-on:touchend="swipe"
      v-bind:class="[slide.template, {current: index===current, before: index < current, after: index > current}]"
      :style="slide.background ? 'backgroundImage: url(' + macros(slide.background, story.id) + ')' : ''">
      <div class="slide-contents">
        <div class="slide-flex-item">
          <div v-html="macros(slide.content.join(' '), story.id)"
            class="slide-root"></div>
        </div>
      </div>
    </div>
    <button v-on:click="back()" id="back" class="btn-nav" v-bind:class="{ hidden: current <= 0 }"
      v-bind:disabled="current<=0" aria-label="previous slide"></button>
    <button v-on:click="next()" id="next" class="btn-nav" v-bind:class="{ exit: current >= slides.length-1 }"
      aria-label="next slide"></button>
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
      },
      touchStartPosition: null
    }
  },
  methods: {
    keyHandler: function (e) {
      if (e.key === 'ArrowRight' || e.key === 'Right') {
        this.next()
      } else if (e.key === 'ArrowLeft' || e.key === 'Left') {
        this.back()
      } else if (e.key === 'Escape' || e.key === 'Esc') {
        this.$emit('close')
      }
    },
    next: function () {
      this.stopMedia()
      if (this.current >= this.slides.length - 1) {
        this.$emit('close')
      } else {
        this.current++
      }
    },
    back: function () {
      if (this.current === 0) return
      this.stopMedia()
      this.current--
    },
    stopMedia: function () {
      var slide = this.$refs.slide[this.current]
      var iframe = slide.querySelector('iframe')
      if (iframe) iframe.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*')
    },
    swipe: function (e) {
      if (e.type === 'touchstart' && e.touches.length === 1) {
        this.touchStartPosition = e.touches[0]
        this.touchStartPosition.timeStamp = e.timeStamp
      } else if (e.type === 'touchend' &&
        this.touchStartPosition && e.timeStamp < this.touchStartPosition.timeStamp + 500) {
        var touch = e.changedTouches[0]
        var deltaX = this.touchStartPosition.screenX - touch.screenX
        var deltaY = this.touchStartPosition.screenY - touch.screenY
        if (Math.abs(deltaX) > 150 && Math.abs(deltaX) > Math.abs(deltaY)) {
          var direction = (deltaX > 0) ? 'next' : 'back'
          this[direction]()
        }
      }
    }
  },
  created () {
    var fallback = [{template: 'callout malibu', content: ['Sorry, but I had some trouble connecting to the Internet.']}]
    if (this.story.id) {
      this.$http.get('/static/stories/' + this.story.id + '/manifest.json').then(response => {
        this.slides = response.body.slides
      }, response => {
        this.slides = fallback
      })
    } else {
      this.slides = fallback
    }
    window.addEventListener('keyup', this.keyHandler)
  },
  beforeDestroy () {
    window.removeEventListener('keyup', this.keyHandler)
  }
}
</script>

<style scoped>

.slides {
  height: 90vh;
  overflow: hidden;
  position: relative;
  width: 100%;
}

.slide {
  background-repeat: no-repeat;
  background-position: center bottom;
  background-size: contain;
  display: flex;
  font-size: 1.5rem;
  height: 100%;
  overflow: auto;
  position: absolute;
  transition: left 0.5s ease-in-out;
  width: 100%;
}
  .slide.before {
    left: -100%
  }
  .slide.current {
    left: 0;
  }
  .slide.after {
    left: 100%
  }
  .slide.cover {
    background-size: cover;
  }
  .slide.cover-x-20 {
    background-position-x: 20%;
  }
  .slide.cover-x-40 {
    background-position-x: 40%;
  }
  .slide.cover-x-60 {
    background-position-x: 60%;
  }
  .slide.cover-x-80 {
    background-position-x: 80%;
  }
  .slide.cover-y-20 {
    background-position-y: 20%;
  }
  .slide.cover-y-40 {
    background-position-y: 40%;
  }
  .slide.cover-y-60 {
    background-position-y: 60%;
  }
  .slide.cover-y-80 {
    background-position-y: 80%;
  }


.slide-contents {
  align-items: center;
  bottom: 0; left: 0; right: 0; top: 0;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  min-height: min-content;
  opacity: 0;
  position: absolute;
  transition: opacity 1s 0.5s;
  width: 100%;
}
  .slide.current .slide-contents {
    opacity: 1;
  }

.slide-flex-item {
  width: 100%;
}

.btn-nav {
  background: #fff url('/static/media/arrows.png') no-repeat 10px 10px;
  border: 5px black solid;
  border-radius: 25px;
  bottom: 10px;
  height: 50px;
  width: 50px;
  position: absolute;
  transition: opacity 0.5s;
}
  .btn-nav.hidden {
    opacity: 0;
  }
  .btn-nav:focus {
    outline: 0;
    border-color: rgb(84, 145, 65);
  }
  #back {
    left: 10px;
  }
  #next {
    background-position-x: -30px;
    right: 10px;
  }
  #next.exit {
    background-position-x: -70px;
    border-color: red;
  }

/* slide theme colors */

.buttercup { /* orange */
  background-color: #f39c12;
}

.chambray { /* dark blue */
  background-color: #3a539b;
  color: white;
}

.black {
  background-color: black;
  color: white;
}

.eucalyptus { /* green */
  background-color: #26a65b;
}

.jade {
  background-color: #27a55b;
}

.lime { /* lime-green */
  background-color: #bdd630;
}

.malibu { /*light blue */
  background-color: #1bbaf2;
}

.midnight {
  background: #1b4564;
  color: white;
}

.pumice { /* light gray */
  background-color: #d2d7d3;
}

.red {
  background-color: #c23622;
}

.royalblue {
  background-color: #4183d7;
  color: white;
}

.sandstorm { /* yellow */
  background-color: #f9bf3b;
}

.silversand {
  background-color: #bdc3c7;
}

.space {
  background-repeat: no-repeat, repeat;
  background-position: center;
  background-size: cover, auto;
  background-image:
    radial-gradient(farthest-corner at 50% 100%, rgba(255,255,255,0.1) 50%, rgba(0,0,0,0.9) 100%),
    url(/static/media/space.png);
  color: white;
}

.teal {
  background-color: #4ec3bc;
}

.text-white {
  color: #fff;
}

</style>

<style>

.slides, .slides * {
  box-sizing: border-box;
}

/* Non-scoped classes */

@keyframes zoomAnimation {
  0% {
    transform: scale(0);
  }
  80% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}

/* template: intro */

  .slide.intro .slide-contents {
    max-width: 500px;
  }

  .slide.intro .slide-root {
    animation: 0.5s 0.5s ease-in-out zoomAnimation forwards;
    border: 10px solid rgb(84, 145, 65);
    border-radius: 50%;
    margin: 0 auto;
    min-width: 300px;
    overflow: hidden;
    padding-bottom: 90%;
    position: relative;
    transform: scale(0);
    width: 90%;
  }
    .slide.intro.sandstorm-accent .slide-root {
      border-color: #f9bf3b;
    }
    .slide.intro.red-accent .slide-root {
      border-color: #d81921;
    }
    .slide.intro.green-accent .slide-root {
      border-color: #549141;
    }
    .slide.intro.blue-accent .slide-root {
      border-color: #3c7bb1;
    }

  .slide.intro .slide-root > div {
    position: absolute;
    top: 10%;
    left: 8%;
    right: 8%;
    text-align: center;
  }

  .slide.intro h2 {
    font-size: 1.5rem;
    line-height: 1;
    margin: 1%;
    padding: 0;
    text-align: center;
    padding: 0 10% 5% 10%;
  }

  .slide.intro img {
    width: 70%;
  }


/* template: callout */

  .slide.callout > div {
    font-size: 1.25em;
    padding: 0 10%;
    text-align: center;
  }

/* template: flex-columns */

  .slide.flex-columns .slide-root {
    flex: 1;
    justify-content: center;
    padding: 5% 5% 60px 5%;
  }

  .slide.flex-columns img {
    display: block;
    margin: 0 auto;
    max-width: 100%;
  }

/* template: flex-rows */

  .slide.flex-rows .slide-root {
    padding: 5% 5% 60px 5%;
  }

  .slide.flex-rows .slide-root > div {
    margin: 20px 0;
  }
  .slide.flex-rows .slide-root > div:first-child {
    margin-top: 0;
  }
  .slide.flex-rows .slide-root > div:last-child {
    margin-bottom: 0;
  }

  .slide.flex-rows img {
    display: block;
    margin: 0 auto;
    max-width: 100%;
  }

/* template: question */
  .slide.question ul {
    padding: 40px 0 40px 10px;
  }

  .slide.question .choice {
    cursor: pointer;
    display: inline-block;
    padding: 10px 0 10px 50px;
    position: relative;
  }

  .slide.question .choice:before {
    background: url(/static/media/list-item.png) no-repeat;
    border: 3px transparent solid;
    border-radius: 50%;
    content: '';
    display: inline-block;
    height: 35px;
    position: absolute;
    top: 5px;
    left: 0;
    width: 35px;
    transition: 0.5s border-color;
  }

  .slide.question input {
    position: absolute;
    left: -10000px;
    height: 1px;
    width: 1px;
  }

  .slide.question input:checked + .choice:before {
    border-color: yellow;
  }


/* generic slide elements */

  .slide p {
    padding-bottom: 1em;
  }

  .slide.content-padded .slide-root {
    padding: 5%;
  }

  .slide.bold {
    font-weight: bold;
  }

  .slide figcaption {
    font-size: 0.8rem;
    font-style: italic;
    text-align: center;
  }

  .slide .img-panel {
    align-items: center;
    display: flex;
    flex-direction: column;
    padding-bottom: 10px;
  }
    .slide .img-panel > div, .slide .img-panel img {
      width: 100%;
    }

  .slide img {
    max-width: 100%; /* undo the others */
  }

  .slide .shadow-box {
    background-color: rgba(0,0,0,0.5);
    border-radius: 10px;
    padding: 10px;
  }

  .slide .youtube {
    height: 0;
    padding-bottom: 56.25%; /* 16:9 */
    position: relative;
  }

  .slide .youtube iframe {
    border: none;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }

  .slide.max-width-600 .slide-contents {
    max-width: 600px;
  }
  .slide.max-width-800 .slide-contents {
    max-width: 800px;
  }
  .slide.max-width-1000 .slide-contents {
    max-width: 1000px;
  }
  .slide.max-width-1200 .slide-contents {
    max-width: 1200px;
  }

  @media screen and (max-width: 767px) {

    .slide.flex-columns .slide-root > div {
      margin: 5% 0;
    }
    .slide.flex-columns .slide-root > div:first-child {
      margin-top: 0;
    }
    .slide.flex-columns .slide-root > div:last-child {
      margin-bottom: 0;
    }

    .slide .img-panel > * {
      padding: 10px 0;
    }
    .slide .img-panel > *:first-child {
      padding-top: 0;
    }
    .slide .img-panel > *:last-child {
      padding-bottom: 0;
    }
  }

  @media screen and (min-width: 768px) {

    .slide.intro .slide-root {
      padding-bottom: 100%;
      width: 100%;
    }

    .slide.intro h2 {
      font-size: 2.5rem;
    }

    .slide.callout > div {
      font-size: 1.75em;
    }

    .slide.flex-columns .slide-root {
      align-items: center;
      display: flex;
    }
    .slide.flex-columns.align-top .slide-root {
      align-items: flex-start;
    }
    .slide.flex-columns .slide-root > div {
      flex: 1;
    }
    .slide.flex-columns .slide-root > div {
      margin: 0 5%;
    }
    .slide.flex-columns .slide-root > div:first-child {
      margin-left: 0;
    }
    .slide.flex-columns .slide-root > div:last-child {
      margin-right: 0;
    }

    .slide .img-panel {
      flex-direction: row;
    }
    .slide .img-panel > * {
      padding: 0 10px
    }
    .slide .img-panel > *:first-child {
      padding-left: 0;
    }
    .slide .img-panel > *:last-child {
      padding-right: 0;
    }

  }

</style>
