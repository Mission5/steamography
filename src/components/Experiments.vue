<template>
  <div class="experiments">
    <h2>Steam Activities You Can Try Yourself</h2>
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
        <div><a class="btn" v-bind:href="activity.href" v-bind:class="activity.type">Go</a></div>
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
          title: 'Activity 1',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At quam, porro hic architecto enim assumenda molestiae magnam',
          href: '#',
          type: 'internal'
        }, {
          title: 'Activity 2',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At quam, porro hic architecto enim assumenda molestiae magnam',
          href: '#',
          type: 'external'
        }, {
          title: 'Activity 3',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At quam, porro hic architecto enim assumenda molestiae magnam',
          href: '#',
          type: 'document'
        }, {
          title: 'Activity 4',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At quam, porro hic architecto enim assumenda molestiae magnam',
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
  .activities {
    column-count: 2;
  }
  .activity {
    border: 1px red solid;
    padding: 1rem;
  }


</style>
