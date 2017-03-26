<template>
  <div class="experiments">
    <h2>STEAM Activities</h2>
    <!-- sprite this! -->
    <img src="static/media/i1.png" alt="Science"/>
    <img src="static/media/i3.png" alt="Technology"/>
    <img src="static/media/i5.png" alt="Engineering"/>
    <img src="static/media/i2.png" alt="Art"/>
    <img src="static/media/i4.png" alt="Math"/>
    <ul class="activities">
      <li v-for="activity in activities" class="activity">
        <h3>{{activity.title}}</h3>
        <div>{{activity.description}}</div>
        <div><a class="btn" v-bind:href="activity.href" v-bind:class="activity.type" target="blank">Go</a></div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'experiments',
  data () {
    return {
      activities: [
        {
          title: 'Build a Rocket Racer!',
          description: 'In this activity you will construct your own rocket racer and investigate basic forces that affect motion – just like Leland did with his skateboard!',
          href: '#',
          type: 'internal'
        }, {
          title: 'Dissolve the Candy Coating',
          description: 'Astronauts conduct experiments in space to test reactions in a new environment. In this activity, you will see what happens to your favorite candy when immersed in water.',
          href: '/static/resources/DissolveTheCandyCoatingWeb.pdf',
          type: 'pdf'
        }, {
          title: 'Build a Paper Rocket!',
          description: 'Leland launched into space for the first time in February 2008.  In this activity you will construct a simple design to demonstrate how a rocket flies through the atmosphere.',
          href: '/static/resources/BuildAPaperRocketWeb.pdf',
          type: 'pdf'
        }, {
          title: 'Build A Water Bottle Rocket Assembly',
          description: 'In this activity you will build a more advanced Water Bottle Rocket, test your rocket for stability and learn how to assemble a rocket launcher.',
          href: '#',
          type: 'external'
        }, {
          title: 'Activity 5',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At quam, porro hic architecto enim assumenda molestiae magnam',
          href: '#',
          type: 'internal'
        }, {
          title: 'Activity 6',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At quam, porro hic architecto enim assumenda molestiae magnam',
          href: '#',
          type: 'document'
        }
      ]
    }
  }
}
</script>

<style scoped>

  .activity {
    padding: 1rem;
    -webkit-column-break-inside: avoid;
          page-break-inside: avoid;
               break-inside: avoid;
  }
  .btn {
    margin-top: 5px;
  }
  
  @media screen and (min-width: 768px) {
    .activities {
      column-count: 2;
    }
  }

</style>
