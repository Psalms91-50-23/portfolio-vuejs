<template>
  <div class="profile-container"  
  >
    <video class="video" autoplay muted loop>
      <source src="./assets/video/Snow.webm" type="video/mp4">
    </video>
    <NavBar />
    <div class="content-container">
      <div class="contents" :style="{ height: isHome? '100vh': containerHeight}">
        <router-view></router-view> 
      </div>
    </div>
  </div>
</template>

<script>
import {  NavBar } from "./components";
import { projects } from "./data";

export default {
  name: "App",
  components: {
    NavBar,
  },
  data() {
    return {
      projects,
      isSmallDevice: false,
      containerHeight: "100vh"
    };
  },
  computed: {
    isHome() {
      if(this.$route.name === "/" || this.$route.name === null || this.$route.name === undefined){
        return true;
      }
      return false;
    },
  },
  mounted() {
    document.title = "Kho's Portfolio";
  }

};

</script>

<style scoped>

.profile-container {
  display: flex;
  box-sizing: border-box;
  position: relative;
  align-items: center;
  width: 100%;
  flex-direction: column;
  padding: 1rem;
  box-sizing: border-box;

}

.background-video {
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 1200px;
  overflow: hidden;
  align-items: end;
  justify-content: center;
}

.video {
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  transform: translate(-50%, -50%);
  z-index: -1;
}

.background-video {
  position: relative;
  width: 100%;
  height: 100%;
}

.content-container {
  display: flex;
  position: relative;
  flex: 1;
  width: 100%;
  height: 100%;
  z-index: 5;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
}

.contents {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  transition: all 0.3s ease-in-out;
}

/* Hide scrollbar for IE, Edge, and Firefox */
.contents::-webkit-scrollbar {
  display: none;
}

/* Style for Firefox */
.contents {
  overflow: -moz-scrollbars-none; /* Firefox */
}


.profile-image-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

.profile-image {
  position: relative;
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 50%;
  z-index: 1;
}


@keyframes my-animation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@media only screen and (min-width: 576px) and (min-height: 660px){ 
  .content-container {
    justify-content: center;
    align-items: end;
  }

}

@media screen and (min-width: 750px){
.content-container {
  justify-content: center;
  align-items: center;
  bottom: -1rem;
}
  .contents {
    margin-bottom: 40px;
  }
  
}

@media screen and (min-width: 1000px) and (min-height: 590px){
  .content-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
  .contents {
    margin-bottom: 40px;
  }
  
}


@media screen and (max-width: 449px){
  .contents.project-details {
    /* margin-bottom: 0px; */
    padding-top: 20rem;
  }
  
}
</style>
