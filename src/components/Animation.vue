<template>
  <div class="animation-container">
    <div class="animation">
      <img class="background" src="static/media/animation-background.jpg" alt="Surface of Moon with Earth in background"/>
      <div class="title">
        <h2>LELAND MELVIN</h2>
        <div class="subtext"><span>ASTRONAUT</span><span>S.T.E.A.M.</span><span>EXPLORER</span></div>
      </div>
      <img class="leland" src="static/media/animation-leland.gif" alt="Leland in spacesuit saluting"/>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'animation'
  }
</script>

<style scoped>
  .animation-container {
    padding-bottom: 56.25%;
    position: relative;
    overflow: hidden;
  }

  .animation {
    animation: scaleIn 3s ease-out;
    height: 100%;
    width: 100%;
    position: absolute;
  }

  .background, .leland, .title {
    position: absolute;
  }

  .title {
    animation: fadeIn 3s 3s forwards ease-in-out;
    left: 5%;
    opacity: 0;
    text-align: center;
    top: 30%;
    width: 45%;
  }

  h2 {
    color: #d71921;
    font-size: 4vw;
    letter-spacing: 5px;
  }

  .subtext {
    color: white;
    font-size: 1.7vw;
    padding-top: 2%;
  }

  .subtext span {
    padding: 0 2%;
  }

  .background {
    height: 100%;
    width: 100%;
  }

  .leland {
    bottom: 5%;
    right: 3%;
    width: 50%;
  }

  @keyframes scaleIn {
    from {
      transform: scale(1.5);
      left: -20%;
    }

    to {
      transform: scale(1);
      left: 0;
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
</style>
