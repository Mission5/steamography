<template>
  <div class="timeline">
    <a href="#" class="story" v-for="(story, index) in stories"
      v-on:click.prevent="showStoryModal=true; currentStory=index">
      <span class="story-title" v-bind:style="'background-image:url(' + story.src + ')'">{{story.title}}</span>
    </a>
    <modal v-if="showStoryModal" @close="showStoryModal=false" width="90vw">
      <story v-bind:story="stories[currentStory]"/>
    </modal>
  </div>
</template>

<script>
export default {
  name: 'timeline',
  props: ['closeModal', 'stories'],
  data () {
    return {
      currentStory: null,
      showStoryModal: false
    }
  },
  watch: {
    closeModal: function (val) {
      if (val === false) this.showStoryModal = false
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
    height: calc(100% - 3rem);
    position: absolute;
  }

  .story:after {
    top: .5rem;
    left: -8px;
    background-color: black;
    border-radius: 10px;
    content: '';
    height: 20px;
    position: absolute;
    top: 1rem;
    transition: transform 0.25s;
    transform: scale(1);
    transform-origin: 50% 50%;
    width: 20px;
    /* fix Chrome rendering issue */
    -webkit-backface-visibility: hidden;
  }

  .story-title {
    background: no-repeat left center;
    background-size: 80px 80px;
    display: flex;
    flex-direction: column;
    padding-left: 85px;
    font-size: 1.2rem;
    justify-content: center;
    left: 10%;
    height: 90px;
    padding-top: 0.5rem;
    position: absolute;
    transition: transform 0.25s;
    transform-origin: 50% 50%;
    max-width: 150px;
    /* fix Chrome rendering issue */
    -webkit-backface-visibility: hidden;
  }

    .story:hover .story-title, .story:focus .story-title {
      transform: scale(1.3);
    }

  @media screen and (min-width: 768px) {

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

    .story:before {
      height: 30%;
      left: calc(20% + 7px);
    }
      .story:nth-child(even):before {
        left: calc(70% + 7px);
        top: 0;
      }

    .story:after {
      top: auto;
      bottom: -13px;
      left: 20%;
    }
      .story:nth-child(even):after {
        left: 70%;
        top: -15px;
      }

    .story-title {
      bottom: 50%;
      top: 10%;
      font-size: 1.5rem;
      left: 20%;
      margin-left: -10%;
      padding-top: 0;
      position: absolute;
    }
      .story:nth-child(even) .story-title {
        top: 40%;
        left: auto;
        right: 20%;
        margin-left: 0;
        margin-right: -10%;
      }

  }

</style>
