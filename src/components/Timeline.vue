<template>
  <div class="timeline">
    <a href="#" class="story" v-for="story in stories"
      v-on:click.prevent="showStoryModal=true; currentStory=story.title">
      <span class="story-title">{{story.title}}</span>
    </a>
    <modal v-if="showStoryModal" @close="showStoryModal=false">
      <div class="box">Content for "{{currentStory}}" story...</div>
    </modal>
  </div>
</template>

<script>
export default {
  name: 'timeline',
  props: ['stories'],
  methods: {
    // toggle: function (index) {
    //   this.activePanel = index
    //   console.log('open')
    // }
  },
  data () {
    return {
      currentStory: '',
      showStoryModal: false
    }
  }
}
</script>

<style>
  .timeline {
    position: absolute;
    right: 10px;
    column-gap: 0;
    height: 100%;
    width: 100%;
  }

  .story {
    border: none;
    display: block;
    height: 24%;
    position: relative;
    text-align: left;
  }
    .story:focus {
      outline: 0;
    }

  .story:before {
    bottom: 0;
    border: 3px #000 dashed;
    content: '';
    height: calc(100% - 2.5rem);
    left: -22px;
    position: absolute;
  }

  .story:after {
    top: .5rem;
    left: -35px;
    background-color: red;
    border: 6px #fff solid;
    border-radius: 20px;
    content: '';
    height: 20px;
    position: absolute;
    transition: transform 0.25s;
    transform: scale(1);
    transform-origin: 50% 50%;
    width: 20px;
    /* fix Chrome rendering issue */
    -webkit-backface-visibility: hidden;
  }
    .story:hover:after, .story:focus:after {
      transform: scale(1.3);
    }

    font-size: 1.2rem;
    left: 10%;
    padding-top: 0.5rem;
    position: absolute;

    transition: transform 0.25s;
    transform-origin: 50% 50%;
    /* fix Chrome rendering issue */
    -webkit-backface-visibility: hidden;
  }
    .story:hover .story-title, .story:focus .story-title {
      transform: scale(1.3);
    }

  @media screen and (min-width: 640px) {
    .timeline {
      column-count: 2;
      right: 30px;
    }
    .story {
      display: inline-block;
      height: 48%;
      width: 100%;
      position: relative;
    }
    .story:nth-child(odd) {
      border-bottom: 5px black solid;
    }
    .story:nth-child(even) {
      text-align: right;
    }
    .story:after {
      top: auto;
      bottom: -18px;
      left: 20%;
    }
    .story:nth-child(even):after {
      left: 70%;
      top: -19px;
    }
    .story:nth-child(even) .story-title {
      top: 50%;
      left: auto;
      right: 20%;
      margin-left: 0;
      margin-right: -10%;
      text-align: right;
    }
    .story:before {
      height: 30%;
      left: calc(20% + 13px);
    }
    .story:nth-child(even):before {
      left: calc(70% + 13px);
      top: 0;
    }
    .story-title {
      bottom: 50%;
      font-size: 1.5rem;
      left: 20%;
      margin-left: -10%;
      padding-top: 0;
      position: absolute;
      text-align: center;
    }

    /*.panel-close-button {
      background: url('/static/media/close-icon.png') no-repeat;
      position: absolute; top: 2px; right: 2px;
      height: 28px;
      width: 28px;
    }*/
  }

  @media screen and (max-width: 639px) {


  }

</style>
