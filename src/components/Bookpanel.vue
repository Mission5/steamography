<template>
  <div class="bookpanel">
    <div class="flex-grid">
      <div class="col playbox text-center text-large">
        <div>READ MORE ABOUT MY JOURNEY IN MY BOOK <i>CHASING SPACE</i></div>
        <a v-on:click.prevent="showVideoModal=true" aria-label="Play video" v-bind:href="currentVideo">
          <img src="/static/media/video-play.png" alt="Play video"/>
        </a>
      </div>
      <div class="col imagebox">
        <a href="https://www.amazon.com/Chasing-Space-Readers-Leland-Melvin/dp/0062665928/" target="_blank">
          <img src="/static/media/ChasingSpaceBook.png" alt="Chasing Space Book"/>
        </a>
      </div>
    </div>
    <div class="padded flex-grid">
      <div class="col text-italic">
        <p>
          “Leland’s story moves fast from the deck of his home-built skateboard to the flight deck of the space shuttle.
          He shows us how he made the best of every opportunity... Once you get started you’ll want to join the chase.”
        </p>
        <p>
        –	Bill Nye, CEO, The Planetary Society
        </p>
      </div>
      <div class="col"></div>
    </div>

    <modal v-if="showVideoModal" @close="showVideoModal=false" width="560px">
      <div class="youtube-video-wrapper">
        <iframe v-bind:src="currentVideo + '?enablejsapi=true&showinfo=0&rel=0'" frameborder="0" allowfullscreen></iframe>
      </div>
    </modal>
  </div>
</template>

<script>
export default {
  name: 'videos',
  data () {
    return {
      currentVideo: 'https://www.youtube.com/embed/sYOhYrAe2JE',
      showVideoModal: false
    }
  }
}
</script>

<style scoped>

  .bookpanel {
    background-color: #ffecde;
  }

  .bookpanel > div:first-of-type {
    background: url(/static/media/SpaceShuttlebackground.jpg) no-repeat;
    background-size: cover;
  }

  .bookpanel > div:nth-child(2) {
    padding-bottom: 3rem;
    padding-top: 3rem;
  }

  .playbox {
    padding: 5% 10%;
  }

  .playbox a {
    display: inline-block;
    padding-top: 30px;
  }

  .imagebox {
    min-height: 240px
  }

  .imagebox img {
    position: absolute;
  }

  p {
    padding-bottom: 1em;
  }

  p:last-of-type {
    padding: 0;
  }

  @media screen and (max-width: 639px) {
    .flex-grid {
      display: block;
    }

    .imagebox {
      text-align: center;
    }

    .imagebox img {
      position: static;
    }
  }

</style>
