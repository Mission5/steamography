

<template>

  <div class="slides">
    <!--Slide: {{current + 1}} / {{ slides.length }}-->
    <div v-for="(slide, index) in slides" class="slide"
      v-bind:class="[slide.template, {current: index===current, before: index < current, after: index > current}]"
      :style="slide.background ? 'backgroundImage: url(' + macros(slide.background, story.id) + ')' : ''">
      <div class="slide-contents">
        <div v-html="macros(slide.content.join(' '), story.id)"
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
    }, response => {
      this.slides = [{template: 'callout malibu', content: ['I\'m afraid I can\'t open that section Dave.<br/>Maybe try Jake and Scout?']}]
    })
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
  display: block;
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

.slide-contents {
  align-items: center;
  display: flex;
  justify-content: center;
  min-height: 100%;
  opacity: 0;
  transition: opacity 1s 0.5s;
}
  .slide.current .slide-contents {
    opacity: 1;
  }

.btn-nav {
  background: #fff;
  background-position: center center;
  background-repeat: no-repeat;
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
    border-color: red;
  }
  #back {
    background-image: url('/static/media/backarrow.png');
    left: 20px;
  }
  #next {
    background-image: url('/static/media/nextarrow.png');
    right: 20px;
  }

/* slide theme colors */


.buttercup {
  background-color: #f39c12;
}

.chambray {
  background-color: #3a539b;
  color: white;
}

.eucalyptus {
  background-color: #26a65b;
}

.malibu {
  background-color: #1bbaf2;
}

.pumice {
  background-color: #d2d7d3;
}

</style>

<style>

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

  .slide.intro .slide-root {
    animation: 0.5s 0.5s ease-in-out zoomAnimation forwards;
    border: 10px solid red;
    border-radius: 100%;
    padding: 50px 110px;
    transform: scale(0);
  }

  .slide.intro h1 {
    font-size: 2.5rem;
    font-family: 'Changa One', cursive;
    text-align: center;
  }

/* template: callout */

  .slide.callout > div {
    font-size: 1.75em;
    padding: 0 10%;
    text-align: center;
  }

/* template: flex-rows */

  .slide.flex-rows .slide-root {
    padding: 20px;
  }

  .slide.flex-rows .slide-root > div {
    margin: 10px 0;
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

/* template: flex-columns */

  .slide.flex-columns .slide-root {
    flex: 1;
    justify-content: center;
    padding: 20px;
  }

  .slide.flex-columns img {
    display: block;
    margin: 0 auto;
    max-width: 100%;
  }


/* generic slide elements */

  .slide p {
    padding-bottom: 1em;
  }

  .slide.content-padded .slide-root {
    padding: 20px;
  }

  .slide.bold {
    font-weight: bold;
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

  @media screen and (min-width: 768px) {

    .slide.flex-columns .slide-root {
      align-items: center;
      display: flex;
    }
    .slide.flex-columns .slide-root > div {
      flex: 1;
    }
    .slide.flex-columns .slide-root > div {
      margin: 0 10px;
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
