// config.js

const standalone = !window.location.host.match('lelandmelvin')
const root = (window.location.href.match(/localhost/)) ? 'https://steamography.mybluemix.net/' : window.location

export default {
  standalone: standalone,
  gaToken: (standalone) ? 'UA-98658016-1' : 'UA44101510-1',
  links: {
    root: root,
    media: root + 'static/media/top_splash.jpg',
    lm: {
      home: 'http://www.lelandmelvin.com/main.html',
      about: 'http://www.lelandmelvin.com/about.html',
      contact: 'http://www.lelandmelvin.com/main.html#sendmessage'
    }
  }
}
