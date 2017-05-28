<template>
  <div class="experiments">
    <h2>STEAM Power</h2>
    <!-- sprite this! -->
    <p class="tagline">Activities and resources to help you harness all the STEAM Power you can!</p>
    <ul class="activities">
      <li v-for="activity in activities" class="activity">
        <h3>{{activity.title}}</h3>
        <div>{{activity.description}}</div>
        <div><a class="btn" v-bind:href="activity.href" v-bind:class="activity.type" target="blank">Go</a></div>
      </li>
    </ul>
    <div class="disclaimer">Disclaimer: The STEAM Activities section may contain links to Web sites created and
      maintained by other public and/or private organizations. We provide links to these sites as a service to
      our users. The presence of a link is not an endorsement of STEAMography or Leland Melvin. When users follow
      a link to an outside Web site, they are leaving STEAMography and are subject to the privacy and security
      policies of the owners/sponsors of the outside Web site(s). We are not responsible for the information
      collection practices of any other site.</div>
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
          href: '/static/resources/BuildARocketRacerWeb.pdf',
          type: 'pdf'
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
          title: 'Build a Water Bottle Rocket Assembly',
          description: 'In this activity you will build a more advanced Water Bottle Rocket, test your rocket for stability and learn how to assemble a rocket launcher.',
          href: '/static/resources/BuildAWaterBottleRocketAssemblyWeb.pdf',
          type: 'pdf'
        }, {
          title: 'From the Hubble',
          description: 'If your students enjoyed the Great Big Story videos about Leland\'s experiences in space, check out the The NASA Hubblecast. The site presents short informative videos that introduce viewers to lessons in astronomy, telescopes, space facts and the beautiful imagery from the Hubble telescope.',
          href: 'http://www.spacetelescope.org/videos/archive/category/hubblecast/',
          type: 'external'
        }, {
          title: 'Public Opinion Poll',
          description: 'As an astronaut, Leland has been interviewed many times about the value of space programs. He continues to be an advocate for exploration, space education and research. This activity introduces students to the basics ideas behind creating a survey, gathering data, and analyzing answers to determine public opinion about the value of space exploration to our society.',
          href: 'http://phoenix.lpl.arizona.edu/pdf/lesson_5.pdf',
          type: 'pdf'
        }, {
          title: 'Cosmic Colors',
          description: 'Leland took his photographs from space using a regular camera and a long lens - but many objects in space are not visible to the naked eye. Explore how different types of telescopes help detect what\'s invisible to the human eye and reveal Cosmic Colors.',
          href: 'https://spaceplace.nasa.gov/cosmic-colors/en/#',
          type: 'external'
        }, {
          title: 'Blind Engineering',
          description: 'Leland trained for months with his team to perfect his communication while using the robotic arm in space. Precise instructions and specific responses are needed to prevent mission failure and to keep everyone alive! This activity provides the opportunity for students to experience the difficulty of communication in engineering an object using Legos or building blocks.',
          href: 'http://phoenix.lpl.arizona.edu/pdf/lesson_11.pdf',
          type: 'pdf'
        }
      ]
    }
  }
}
</script>

<style scoped>

  h2 {
    border-bottom: 1px #000 solid;
    padding-bottom: 4px;
  }

  .tagline {
    color: #3c7bb1;
    font-size: 1.2rem;
    font-style: italic;
    padding-top: 4px;
  }

  .activity {
    padding: 1rem 1rem 1rem 0;
    -webkit-column-break-inside: avoid;
          page-break-inside: avoid;
               break-inside: avoid;
  }

  .btn {
    background-color: #3c7bb1;
    border-color: transparent;
    color: #fff;
    margin-top: 5px;
  }

  .btn:focus, .btn:hover {
    background-color: #2e5e88;
    outline: none;
    text-decoration: underline;
  }

  .disclaimer {
    border-top: 1px #ddd solid;
    font-size: 0.9rem;
    padding-top: 1rem;
  }
  
  @media screen and (min-width: 768px) {
    .activities {
      column-count: 2;
    }
    .activity {
      display: inline-block;
    }
  }

</style>
