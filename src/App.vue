<template>
  <div id="app">
    <header><h1><a href="/#">Steamography</a></h1></header>
    <nav>
      <a href="#about">about</a> |
      <a href="#contact">contact</a>
    </nav>
    <transition name="fade">
      <router-view></router-view>
    </transition>
    <nav class="nav-footer flex-grid">
      <div class="col">
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
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
export default {
  name: 'app'
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
