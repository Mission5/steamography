<template>
  <main>
    <section>
      <animation></animation>
    </section>
    <section class="padded">
      <div class="flex-grid">
        <div class="col">
          <img class="teaser-book" src="static/media/book.png" alt="Book with science incons">
        </div>
        <div class="col text-large flex-center">
          <div>
            <p>
              I’ve played in the NFL and been to space twice. I’m an athlete, astronaut, photographer, engineer,
              and a scientist.
            </p>
            <div class="text-center padded">
              <a v-on:click.prevent="showVideoModal=true" aria-label="Play video" v-bind:href="currentVideo" class="btn btn-video">
                WATCH
              </a>
            </div>
          </div>
        </div>
      </div>
      <modal v-if="showVideoModal" @close="showVideoModal=false" width="560px">
        <div class="youtube-video-wrapper">
          <iframe v-bind:src="currentVideo + '?enablejsapi=true&showinfo=0&rel=0'" frameborder="0" allowfullscreen></iframe>
        </div>
      </modal>
    </section>
    <section class="padded-md">
      <div class="text-large text-white accordion-text">
        There have been ups and downs all along the way. It has been an exciting journey...
      </div>
      <accordion></accordion>
    </section>
    <section class="padded">
      <videos></videos>
    </section>
    <section class="padded">
      <experiments></experiments>
    </section>
    <section>
      <bookpanel></bookpanel>
    </section>
  </main>
</template>

<script>
export default {
  name: 'main',
  data () {
    return {
      msg: 'Steamography',
      currentVideo: 'https://www.youtube.com/embed/1VxB4hWzTA0',
      showVideoModal: false
    }
  }
}
</script>

<style scoped>

.accordion-text {
  padding-bottom: 20px;
}

.btn-video {
  background: #f89406 url(/static/media/playicon.png) no-repeat 5px center;
  color: white;
  line-height: 46px;
  padding-left: 56px;
}
.btn-video img {
  vertical-align: middle;
}

@media screen and (max-width: 639px) {
  .accordion-text {
    padding: 10px;
  }
  .flex-grid {
    display: block;
  }
  .teaser-book {
    padding-top: 2rem;
  }
}

</style>
