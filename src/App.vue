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
        <div class="flex-grid">
          <div class="col flex-center">
            <img src="/static/media/rocket_footer.png" alt="rocket"/>
          </div>
          <div class="col nav-footer-box">
            <a href="#" class="sitelink text-case-initial">STEAMography</a>
            <div class="tagline text-small text-italic text-case-initial">The power of S.T.E.A.M. driven by the power of story.</div>
            <a href="#about" class="text-case-initial">ABOUT STEAMography</a>
          </div>
        </div>
      </div>
    </nav>
    <footer class="flex-grid">
      <div class="col">
        Copyright 2017 Steamography | All Rights Reserved
      </div>
      <div class="col">
        <social-sharing inline-template
          v-bind:url="config.links.root"
          v-bind:media="config.links.media"
          title="STEAMography"
          description="The power of S.T.E.A.M. driven by the power of story."
          twitter-user="Astro_Flow">
          <div>
            <network network="facebook">Facebook</network>
            <network network="twitter">Twitter</network>
            <network network="pinterest">Pinterest</network>
            <network network="reddit">Reddit</network>
          </div>
        </social-sharing>
      </div>
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

footer {
  font-size: 0.7em;
  font-style: italic;
}

.nav-footer {
  position: static;
  padding: 0;
  background-color: #393737;
}

.nav-footer > .col > .flex-grid {
  align-items: stretch;
  height: 100%;
}

.nav-footer-box {
  background-color: #2f2d2d;
  margin: 0 10px;
  padding: 30px 20px;
  align-items: stretch;
  flex: 5;
}
.nav-footer a {
  display: block;
  padding-left: 0;
  padding-right: 0;
}

.nav-footer .sitelink {
  color: #d81921;
  font-size: 1.3rem;
}

.tagline {
  padding-bottom: 0.5rem;
}

nav a {
  color: #fff;
  font-size: 0.8rem;
  font-weight: 700;
  padding: 0.3rem;
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
.fade-enter {
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

  .nav-footer {
    display: block;
  }

  .nav-footer > .col > .flex-grid   {
    border-bottom: 1px #000 solid;
  }

}
</style>
