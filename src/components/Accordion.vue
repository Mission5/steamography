<template>
  <div class="accordion" v-on:mouseleave="close()">
    <ul class="panels" v-bind:class="{ panelsopen: activePanel!==null }" >
      <li class="panel" tabIndex="0" v-for="(panel, index) in panels"
        v-bind:class="{ open: activePanel==index }" v-bind:style="{ 'background-color': panel.bgColor }"
        v-on:mouseover="toggle(index)" v-on:click="toggle(index)" v-on:focus="toggle(index)" v-on:keyup.enter="toggle(index)">
        <div class="panel-wrap">
          <div class="panel-background">
            <h2>{{panel.title}}</h2>
            <img v-bind:src="panel.img" v-bind:alt="panel.title" />
            <div class="panel-wrapper">
              <!--<button class="panel-close-button" v-on:click="close()" aria-label="Close Panel" title="Close Panel">ddd</button>-->
              <timeline v-bind:stories="panel.timeline"/>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'accordion',
  methods: {
    close: function (index) {
      this.activePanel = null
    },
    toggle: function (index) {
      this.activePanel = index
    }
  },
  data () {
    return {
      panels: [
        {
          title: 'childhood',
          bgColor: '#eac012',
          img: '/static/media/childhood.png',
          timeline: [
            {title: 'The Amazing Arthur Ashe', alt: 'tennis ball'},
            {title: 'The Big Kaboom', alt: 'chemistry set'},
            {title: 'The Need for Speed', alt: 'Skateboard)'},
            {title: 'Vision on Wheels', alt: 'truck'}
          ]
        }, {
          title: 'football',
          bgColor: '#d81921',
          img: '/static/media/leland2.png',
          timeline: [
            {title: 'The Drop', alt: 'dropped football'},
            {title: 'Drafted!', alt: 'football helmet'},
            {title: 'The Playbook', alt: 'football plays)'},
            {title: 'Sidelined', alt: 'bandaid'}
          ]
        }, {
          title: 'scientist',
          bgColor: '#549141',
          img: '/static/media/leland3.png',
          timeline: [
            {title: 'Backup Plan', alt: 'science goggles'},
            {title: 'Flying Penguins', alt: 'penguin mascot)'},
            {title: 'Jake and Scout', alt: 'dogs'},
            {title: 'I Can\'t Hear', alt: 'ear'}
          ]
        }, {
          title: 'astronaut',
          bgColor: '#3c7bb1',
          img: '/static/media/leland4.png',
          timeline: [
            {title: 'Cleared for Take Off', alt: 'green light'},
            {title: 'Life in Space', alt: 'space shuttle'},
            {title: 'Manning the Arm', alt: 'joystick'},
            {title: 'Picture This', alt: 'earth'}
          ]
        }, {
          title: 'steam and you',
          bgColor: '#e58636',
          img: '/static/media/weels-big.png'
        }
      ],
      activePanel: null
    }
  }
}
</script>

<style scoped>

  .accordion {
    width: 100%;
    /*max-width: 1080px;*/
    height: 430px;
    overflow: hidden;
    margin: 50px auto;
  }

  .accordion .panels {
    width: 100%;
    display: table;
    table-layout: fixed;
    margin: 0;
    padding: 0;
  }

  .accordion .panel {
    display: table-cell;
    vertical-align: bottom;
    position: relative;
    width: 20%;
    height: 430px;
    background-repeat: no-repeat;
    background-position: center center;
    transition: all 500ms ease;
  }

  .accordion .panel-wrap
  {
    display: block;
    overflow: hidden;
    width: 100%;
  }
  .accordion .panel-background {
    color: #fff;
    height: 430px;
    position: relative;
    padding: 15px 20px;
    box-sizing: border-box;
    transition: background 200ms ease;
    width: 100%;
  }

  .panel-wrapper {
    height: 100%;
    opacity: 0;
    position: absolute; top: 0; right: 0;
    transition: opacity 0.5s;
    width: calc(100% - 250px);
  }

  .accordion h2 {
    color: #fff;
    position: absolute; top: 10px; left: 10px;
    font-size: 24px;
    text-transform: uppercase;
    margin: 2px;
    text-align: center;
    text-overflow: clip;
    width: 200px;
  }

  .accordion img {
    bottom: 10px;
    left: 10px;
    position: absolute;
    transition: transform 0.2s;
  }

  .accordion .panelsopen .panel {
    box-shadow: 0 0 10px 0 rgba(0,0,0,0.5);
    width: 5%;
  }

  .accordion .panelsopen .panel.open {
    width: 80%;
  }

  .accordion .panel.open img {
    transform: scale(1.05);
  }

  .accordion .panelsopen .panel.open .panel-background {
    background: rgba(0, 0, 0, 0.15);
  }

  .accordion .panelsopen .panel.open .panel-wrapper {
    opacity: 1;
    display: block;
    transition: opacity 0.5s 0.7s;
  }

  @media screen and (max-width: 639px) {

    /*body { margin: 0; }*/

    .accordion { height: auto; }

    .accordion .panels .panel,
    .accordion .panels .panel.open,
    .accordion .panelsopen .panel,
    .accordion .panelsopen .panel.open {
      position: relative;
      display: table;
      table-layout: fixed;
      width: 100%;
      -webkit-transition: none;
      transition: none;
    }

    .accordion .panel-wrapper {
      opacity: 1;
    }

  }

</style>
