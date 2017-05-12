<template>
  <div class="animation-container" v-bind:class="{ loading: graphicsLoaded < 2 }">
    <div class="animation">
      <img class="background" src="static/media/animation-background.jpg" v-on:load="loaded()" alt="Surface of Moon with Earth in background"/>
      <div class="title">
        <h2>LELAND MELVIN</h2>
        <div class="subtext"><span>ASTRONAUT</span><span>S.T.E.A.M.</span><span>EXPLORER</span></div>
      </div>
      <img class="leland" src="static/media/animation-leland.gif" v-on:load="loaded()" alt="Leland in spacesuit saluting"/>
    </div>
    <div class="preloader">
      <img src="static/media/animation-preloader.gif" alt="preloading"/>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'animation',
    data () {
      return {
        graphicsLoaded: 0
      }
    },
    methods: {
      loaded: function (e) {
        this.graphicsLoaded++
      }
    }
  }
</script>

<style scoped>
  .animation-container {
    padding-bottom: 56.25%;
    position: relative;
    overflow: hidden;
  }

  .animation {
    height: 100%;
    left: 0;
    width: 100%;
    position: absolute;
    transition: all 3s ease-out;
    transform: scale(1);
  }

  .background, .leland, .preloader, .title {
    position: absolute;
  }

  .preloader {
    align-items: center;
    bottom: 0;
    display: none;
    justify-content: center;
    left: 0;
    right: 0;
    top: 0;
  }

  .loading .preloader {
    display: flex;
  }

  .title {
    left: 0;
    text-align: center;
    top: 16%;
    transition: opacity 3s 3s ease-in-out;
    width: 45%;
  }

  h2 {
    color: #d71921;
    font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif;
    font-size: 4vw;
    letter-spacing: 5px;
    text-shadow: 0px 0px 8px rgba(0, 0, 0, 0.6);
  }

  .subtext {
    color: white;
    font-size: 1.7vw;
    padding-top: 2%;
  }

  .subtext span {
    padding: 0 2%;
  }

  .background {
    height: 100%;
    width: 100%;
  }

  .leland {
    bottom: 5%;
    right: 3%;
    width: 50%;
  }

  .loading .animation {
    transform: scale(1.5);
    left: -20%;
  }

  .loading .title {
    opacity: 0;
  }

</style>
