// config.js

const standalone = !window.location.host.match('lelandmelvin')

export default {
  standalone: standalone,
  gaToken: (standalone) ? 'UA-98658016-1' : 'UA44101510-1'
}
