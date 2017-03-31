<template>
  <div>
    <h2>Explore More</h2>
    <ul class="videos">
      <li v-for="video in videos">
        <a class="video" v-bind:href="video.href" v-on:click.prevent="currentVideo=video.href; showVideoModal=true">
          <img v-bind:src="video.poster" v-bind:alt="video.title"/>
          <h3>{{video.title}}</h3>
        </a>
      </li>
    </ul>
    <modal v-if="showVideoModal" @close="showVideoModal=false" width="560px">
      <div class="youtube-video-wrapper">
        <iframe v-bind:src="currentVideo" frameborder="0" allowfullscreen></iframe>
      </div>
    </modal>
  </div>
</template>

<script>
export default {
  name: 'videos',
  data () {
    return {
      showVideoModal: false,
      currentVideo: '',
      videos: [
        {
          title: 'Returning Home from Life in Space',
          poster: '/static/media/video-cominghome.jpg',
          href: 'https://www.youtube.com/embed/-cDXRsZbydU'
        }, {
          title: 'Turkey at Zero Gravity: What it\'s Like to Spend Thanksgiving in Space',
          poster: '/static/media/video-thanksgiving.jpg',
          href: 'https://www.youtube.com/embed/2NvrPbq3NeI'
        }, {
          title: 'How the NFL Prepared Me to Be a NASA Astronaut',
          poster: '/static/media/video-nfl.jpg',
          href: 'https://www.youtube.com/embed/oBpY7jWxC8I'
        }, {
          title: 'How to Deal with Space Emergencies',
          poster: '/static/media/video-emergency.jpg',
          href: 'https://www.youtube.com/embed/76vfKslkmWc'
        }, {
          title: 'This is What Outer Space Does to Your Body',
          poster: '/static/media/video-body.jpg',
          href: 'https://www.youtube.com/embed/Ix2kBOXHWCM'
        }, {
          title: 'Event Horizon: How Space Changes Your Perspective On Life',
          poster: '/static/media/video-spaceperspective.jpg',
          href: 'https://www.youtube.com/embed/HbRhtL0CIxI'
        }, {
          title: 'An Astronaut\'s Cosmic Visions',
          poster: '/static/media/video-cosmicvisions.jpg',
          href: 'https://www.youtube.com/embed/qmWcj_6O2Ac'
        }, {
          title: 'Please Pass the Space Food',
          poster: '/static/media/video-spacefood.jpg',
          href: 'https://www.youtube.com/embed/8Ce2eCcJP6Y'
        }
      ]
    }
  }
}
</script>

<style scoped>
  h2 {
    color: #fff;
    padding-bottom: 1rem;
  }

  .videos {
    column-count: 4;
    column-gap: 0.5rem;
  }

  .video {
    display: inline-block;
    outline: 0;
    margin-bottom: 0.5rem;
    position: relative;
  }

  .video h3 {
    color: #fff;
    font-weight: normal;
    padding: 1rem;
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
    position: absolute;
    opacity: 0;
    top: 0;
    transition: 0.8s ease-out opacity;
  }
    .video:hover h3, .video:focus h3 {
      opacity: 1;
    }

  .video:after {
    background: url('/static/media/video-play.png') no-repeat center;
    content: ' ';
    position: absolute; top: 0; left: 0; right: 0; bottom: 0;
  }
    .video:hover:after, .video:focus:after {
      opacity: 0.2;
    }

  .video img {
    filter: brightness(1.0);
    transition: 0.2s ease-out filter;
    width: 100%;
  }
    .video:hover img, .video:focus img {
      filter: brightness(0.4) blur(1px);
    }

  .youtube-video-wrapper {
    height: 0;
    padding-bottom: 56.25%; /* 16:9 */
    padding-top: 25px;
    position: relative;
  }

  .youtube-video-wrapper iframe {
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }

  @media screen and (max-width: 1023px) {
    .videos {
      column-count: 3;
    }
  }
  @media screen and (max-width: 639px) {
    .videos {
      column-count: 2;
    }
  }

</style>
