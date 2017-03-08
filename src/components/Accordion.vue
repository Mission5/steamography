<template>
  <div class="accordion" v-on:mouseleave="close()">
    <ul class="panels" v-bind:class="{ panelsopen: activePanel!==null }" >
      <li class="panel" tabIndex="0" v-for="(panel, index) in panels"
        v-bind:class="{ open: activePanel==index }" v-bind:style="{ 'background-color': panel.bgColor }"
        v-on:mouseover="toggle(index)" v-on:click="toggle(index)" v-on:focus="toggle(index)" v-on:keyup.enter="toggle(index)">
        <div class="panel-wrapper">
          <div class="panel-background">
            <div class="panel-header">
              <h2>{{panel.title}}</h2>
              <img v-bind:src="panel.img" v-bind:alt="panel.title" />
            </div>
            <div class="panel-content">
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
            {title: 'The Amazing Arthur Ashe', src: 'static/media/childhoodicon1.png', alt: 'tennis ball'},
            {title: 'The Big Kaboom', src: 'static/media/childhoodicon2.png', alt: 'chemistry set'},
            {title: 'The Need for Speed', src: 'static/media/childhoodicon3.png', alt: 'Skateboard)'},
            {title: 'Vision on Wheels', src: 'static/media/childhoodicon4.png', alt: 'truck'}
          ]
        }, {
          title: 'football',
          bgColor: '#d81921',
          img: '/static/media/leland2.png',
          timeline: [
            {title: 'The Drop', src: 'static/media/footballicon1.png', alt: 'dropped football'},
            {title: 'Drafted!', src: 'static/media/footballicon2.png', alt: 'football helmet'},
            {title: 'The Playbook', src: 'static/media/footballicon3.png', alt: 'football plays)'},
            {title: 'Sidelined', src: 'static/media/footballicon4.png', alt: 'bandaid'}
          ]
        }, {
          title: 'scientist',
          bgColor: '#549141',
          img: '/static/media/leland3.png',
          timeline: [
            {title: 'Backup Plan', src: 'static/media/scienceicon1.png', alt: 'science goggles'},
            {title: 'Flying Penguins', src: 'static/media/scienceicon2.png', alt: 'penguin mascot)'},
            {title: 'Jake and Scout', src: 'static/media/scienceicon3.png', alt: 'dogs'},
            {title: 'I Can\'t Hear', src: 'static/media/scienceicon4.png', alt: 'ear'}
          ]
        }, {
          title: 'astronaut',
          bgColor: '#3c7bb1',
          img: '/static/media/leland4.png',
          timeline: [
            {title: 'Cleared for Take Off', src: 'static/media/astronauticon1.png', alt: 'green light'},
            {title: 'Life in Space', src: 'static/media/astronauticon2.png', alt: 'space shuttle'},
            {title: 'Manning the Arm', src: 'static/media/astronauticon3.png', alt: 'joystick'},
            {title: 'Picture This', src: 'static/media/astronauticon4.png', alt: 'earth'}
          ]
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

  .panels {
    width: 100%;
    display: table;
    table-layout: fixed;
    margin: 0;
    padding: 0;
  }

  .panel {
    display: table-cell;
    vertical-align: bottom;
    position: relative;
    width: 25%;
    height: 430px;
    background-repeat: no-repeat;
    background-position: center center;
    transition: all 500ms ease;
  }
    .panelsopen .panel {
      box-shadow: 0 0 10px 0 rgba(0,0,0,0.5);
      width: 5%;
    }
   .panelsopen .panel.open {
      width: 80%;
    }

  .panel-wrapper {
    display: block;
    overflow: hidden;
    width: 100%;
  }

  .panel-background {
    color: #fff;
    height: 430px;
    position: relative;
    padding: 15px 20px;
    box-sizing: border-box;
    transition: background 200ms ease;
    width: 100%;
  }
    .panelsopen .panel.open .panel-background {
      background: rgba(0, 0, 0, 0.15);
    }

  .panel-content {
    height: 100%;
    opacity: 0;
    position: absolute; top: 0; right: 0;
    transition: opacity 0.5s;
    width: calc(100% - 220px);
  }
    .panelsopen .panel.open .panel-content {
      opacity: 1;
      display: block;
      transition: opacity 0.5s 0.7s;
    }

  h2 {
    color: #fff;
    font-size: 24px;
    text-transform: uppercase;
    margin: 2px;
    text-align: center;
    text-overflow: clip;
  }

  .panel-header {
    height: 100%;
    max-width: 290px;
    text-align: center;
    width: 100%;
    transition: width 0.5s;
  }
    .panelsopen .panel-header {
      width: 200px;
    }
    .panel-header img {
      transition: transform 0.2s;
      width: 199px;
    }
    .panel.open img {
      transform: scale(1.05);
    }


  @media screen and (max-width: 639px) {

    .accordion { height: auto; }

    .panels .panel,
    .panels .panel.open,
    .panelsopen .panel,
    .panelsopen .panel.open {
      position: relative;
      display: table;
      table-layout: fixed;
      width: 100%;
      -webkit-transition: none;
      transition: none;
    }

    .panel .panel-header {
      width: 150px;
    }

    .panel-header img {
      padding-top: 40px;
      width: 160px;
    }

   .panel-content {
      opacity: 1;
    }

  }

</style>
