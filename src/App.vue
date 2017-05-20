<template>
  <div id="app">
    <header>
      <h1 v-if="config.standalone"><a href="/#">Steamography</a></h1>
      <h1 v-else><a :href="config.links.lm.home">Leland Melvin</a></h1>
    </header>
    <transition name="fade">
      <router-view></router-view>
    </transition>
    <nav class="nav-footer flex-grid">
      <div class="col" v-if="true || !config.standalone">
        <div class="flex-grid">
          <div class="col"></div>
          <div class="col nav-footer-box">
            <a :href="config.links.lm.home" class="sitelink">Leland Melvin</a>
            <a :href="config.links.lm.home">Home</a>
            <a :href="config.links.lm.about" >About</a>
            <a :href="config.links.lm.contact" >Contact</a>
          </div>
        </div>
      </div>
      <div class="col">
        <a href="https://www.amazon.com/Chasing-Space-Readers-Leland-Melvin/dp/0062665928/ref=sr_1_1?ie=UTF8&qid=1490559996&sr=8-1&keywords=chasing+space+young+readers+edition"
          target="amazon">
          <img class="book-teaser" src="static/media/book_footer.jpg" alt="Chasing Space">
        </a>
      </div>
    </nav>
    <footer>
      Copyright 2017 Steamography | All Rights Reserved
    </footer>
  </div>
</template>

<script>

  import config from 'config.js'

  export default {
    name: 'app',
    data () {
      return {
        config: config
      }
    }
  }

</script>

<style scoped>

header {
  left: 0;
}
header, nav {
  position: fixed;
  top: 0;
  z-index: 10;
}
header, footer, nav {
  background-color: #000;
  color: #fff;
  padding: 0.5rem;
  right: 0;
  text-transform: uppercase;
}
.nav-footer {
  position: static;
  background-color: #4b5569;
}
.nav-footer a {
  display: block;
}
nav a {
  color: #fff;
  font-size: 0.8rem;
  font-weight: 700;
  padding: 0.5rem;
}
a:hover, a:focus {
  color: #d81921;
}

.fade-leave-active {
  display: none;
}
.fade-enter-active {
  transition: opacity .5s
}
.fade-enter  {
  opacity: 0
}

@media screen and (max-width: 639px) {
  nav {
    left: 0;
    top: 2.1rem;
  }
  .book-teaser {
    width: 200px;
  }
}
</style>
