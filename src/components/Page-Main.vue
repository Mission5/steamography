<template>
  <main>
    <section>
      <img class="full-width" src="/static/media/top_splash.jpg" alt="dummy image"/>
    </section>
    <section class="padded">
      <div class="flex-grid">
        <div class="col text-large">
          I’ve played in the NFL and been to space twice. I’m an athlete, an astronaut, a photographer, an engineer,
          and a scientist. There have been ups and downs all along the way...
        </div>
        <div class="col">
          <img class="teaser-book" src="static/media/book.png" alt="Book with science incons">
        </div>
      </div>
    </section>
    <section class="padded">
      <accordion></accordion>
    </section>
    <section class="padded">
      <videos></videos>
    </section>
    <section class="padded">
      <experiments></experiments>
    </section>
  </main>
</template>

<script>
export default {
  name: 'main',
  data () {
    return {
      msg: 'Steamography',
      showModal: false
    }
  }
}
</script>

<style scoped>
.teaser-book {
  width: 100%;
}

@media screen and (max-width: 639px) {
  .flex-grid {
    display: block;
  }
  .teaser-book {
    padding-top: 2rem;
  }
}

</style>
