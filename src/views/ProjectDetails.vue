<template>
  <div class="project-details">
    <div class="padding-container">
    <div class="back-button-parent">
      <div class="back-icon-container" @click="goBack">
        <font-awesome-icon 
        icon="fa-solid fa-left-long" 
          :style="{ color: 'white', fontSize: '3rem' }"
        />
      <div class="underline-back"></div>
    </div>
    </div>
    <div class="top-left-corner"></div>
    <div class="bottom-right-corner"></div>
    <div class="">
      <p class="project-title">{{ project?.title }}</p>
    </div>
    <div class="project-body">
      <div class="project-description-container">
        <p v-if="project?.allow" class="project-allow-text">{{ project?.allow }}</p>
        <p class="project-reason-text">Reasons for the project:</p>
        <p class="project-description-text">{{ project?.description }}</p>
      </div>
      <div class="project-challenges-container">
        <p class="project-challenge-title">Some challengers I encountered:</p>
        <p class="project-challenges-text">
          {{ project?.challenges }}
        </p>
      </div>
      <div v-if="project?.projectImages" class="project-images-container" >
        <div v-for="(image, index) in project?.projectImages" :key="index" class="project-images" ref="projectToAnimate" >
          <img 
            :src="`${image}`" 
            alt="project images" 
            class="project-sample-images"
            >
        </div>
      </div>
    </div>
    <p class="project-technology-instructions" v-if="project?.furtherInstructions">{{ project?.furtherInstructions }}</p>
    <p class="project-link">Link to project Below</p>
    <a :href="project?.url" target="_blank" rel="noopener noreferrer" class="project-link-live">
      {{ project?.url }}
    </a>
    <p v-if="project?.expoMsg"  class="project-expo-msg">{{ project?.expoMsg }}</p>
    <a  v-if="project?.expoURL" 
      :href="project?.expoURL" target="_blank" rel="noopener noreferrer" class="project-expo-link-barcode">
      {{ project?.expoURL }}
    </a>
    <p class="project-test-accounts-title" v-if="project?.testAccounts">Test account</p>
    <p class="project-test-accounts-details"  v-if="project?.testAccounts">{{ project?.testAccounts }}</p>
    <div class="project-link-container">
    </div>
    <div class="project-technology-title">Technologies used in the project</div>
    <div class="project-technology-container">
      <div v-for="(technology, index) in project?.nameOfTechnologies" :key="index" class="project-technologies">
        <div ref="projectToAnimate" class="project-content" >
          <img :src="`${project?.imageOfTechnologies[index]}`" :alt="technology" class="project-image-size">
          <span class="project-technology-name">{{ technology }}</span>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { projects } from '../data';

export default {
  name: "ProjectDetails",
  setup() {
    const route = useRoute();
    const router = useRouter();
    let project = ref(null);
    onMounted(() => {
      const name = route.params['project'];
      const foundProject  = projects.find(p => p.title == name);
      // Redirect to Home if the project is not found
      if (!foundProject) {
        router.push({ name: 'Home' });
      }else {
        project.value = foundProject;
      }

    });
    function goBack() {
      // Use router to navigate back
      router.go(-1);
    }

    function backHome(){
      router.push("/");
    }
    return { 
      project,
      backHome,
      imageInView: false,
      goBack
    };
  },
};
</script>

<style scoped>
.project-details {
  max-width: 900px;
  padding: 1.1rem 1.1rem 5rem 1.1rem;
  border-top-right-radius: 25px;
  border-bottom-left-radius: 25px;
  overflow: auto;
  margin-bottom: 3rem;
  -ms-overflow-style: none;
  overflow: -moz-scrollbars-none; /* Firefox */
}

.project-details::-webkit-scrollbar-thumb {
  /* Set the color of the scrollbar thumb to transparent (works in WebKit browsers) */
  background-color: transparent; 
}

/* Hide scrollbar for IE, Edge, and Firefox */
.project-details::-webkit-scrollbar {
  display: none;
}

.project-allow-text {
  font-weight: 900;
  font-style: italic;
}
.back-button-parent {
  display: flex;
  position: sticky;
  justify-content: end;
  top: 2rem;
  right: 2rem;
  width: 100%;
  z-index: 1;
}

.back-icon-container {
  display: flex;
  justify-content: end;
  position: sticky;
  transition: all 0.3 ease-out;
  cursor: pointer;
  width: 3rem;

}
.back-icon-container:hover {
  transform: scale(1.3);
}

.back-icon-container:hover .underline-back {

  animation: squiggly 1s infinite;
  animation-timing-function: linear;
}

.underline-back {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet);
  transform: scaleX(0);
  transition: all 0.25s ease-out;
}
.back-icon-container.selected .icon-container .svg-inline--fa {
  color: white;
}
.back-icon-container:hover .underline-back,
.back-icon-container.active .underline-back,
.back-icon-container.selected .underline-back {
  transform: scaleX(1);
  transition: all 0.25s ease-out;
  transform-origin: left;
}

.padding-container {
  position: relative;
  box-sizing: border-box;
  padding: 2rem;
  background-color: rgba(32, 138, 237, 0.3);
  border-radius: 0px 25px;
}

/* Style for Firefox */
.project-title {
  font-size: 3rem;
  font-weight: bolder;
}

.project-reason-text {
  font-weight: 800;
}
.project-description-text {
  padding: 0.5rem;
  font-style: italic;
}

.top-left-corner {
  position: absolute;
  width: 0.1rem;
  height: 0.1rem;
  left: 0;
  top: 0;
}

.top-left-corner:before {
  content: "";
  position: absolute;
  width: 1rem;
  height: 8rem;
  background-color: white;
  left: -0.5rem;
  top: -0.5rem;
  animation: 0.3s fromLeft 0s ease;
}
.top-left-corner:after {
  content: "";
  position: absolute;
  width: 17rem;
  height:1rem;
  background-color:white;
  left: 0rem;
  top: -0.5rem;
  animation: fromLeftJam  1.5s ease-in-out;
}

.bottom-right-corner {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 0.1rem;
  height: 0.1rem;
  background-color: white;
}

.bottom-right-corner:before {
  content: "";
  position: absolute;
  bottom: -0.5rem;
  right: -0.5rem;
  width: 1rem;
  height: 9rem;
  background-color:white;
  transition: 0.3 all 0.3 ease-in-out;

}

.bottom-right-corner:after {
  content: "";
  position: absolute;
  bottom: -0.5rem;
  right: 0rem;
  width: 17rem;
  height: 1rem;
  background-color:white;
  transition: 0.3 all 0.3 ease-in-out;

}

.project-technology-container {
  display: flex;
  flex-wrap: wrap;
  flex-direction: columns;
}

.project-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.3rem;
}

.project-images-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
}

.project-images  {
  position: relative;
  width: 100%;
  height: auto;  
  max-width: 400px;
  padding: 10px;
}

.project-sample-images {
  position: relative;
  width: 100%;
  padding: 1rem 0rem;
  box-sizing: border-box;
}

.project-image-size {
  width: 5rem;
  height: 3rem;
 
} 

.project-challenges-container {
  display: flex;
  position: relative;
  box-sizing: border-box;
  flex-direction: column;
  overflow: auto;
}

.project-challenge-title {
  font-weight: 800;
}

.project-challenges-text {
  display: flex;
  padding: 0.5rem;
  height: auto;
  font-style: italic;
}

.project-technology-instructions {
  font-weight: 600;
  font-size: 0.8rem;
  padding: 0.5rem 0rem;
  font-style: italic;

}

.project-test-accounts-title {
  font-size: 0.9rem;
  font-weight: 600;
}
.project-test-accounts-details {
  padding: 0.25rem 0rem;
  font-size: 0.8rem;
  font-style: italic;
}
.project-link {
  padding: 0.5rem 0rem;
  font-weight: 600;
  font-size: 1.2rem;
}
.project-technology-title {
  padding: 1rem 0rem;
}

.project-link-live {
  display: flex;
  font-size: 1.1rem;
  text-align: center;
  padding: 0.5rem 0rem;
  color: black;
  font-weight: 900;
  transition: all 0.3s ease-out;
  text-decoration: none;
}

.project-expo-msg {
  font-size: 0.9rem;
  font-weight: 600;
}
.project-expo-link-barcode {
  display: flex;
  font-size: 1rem;
  text-align: center;
  padding: 0.5rem 0rem;
  color: black;
  font-weight: 900;
  transition: all 0.3s ease-out;
  text-decoration: none;
}
  .project-link-live:hover {
    color: white;
  }

  .project-expo-link-barcode:hover {
    color: white;
  }

  .project-technology-name {
    font-size: 0.7rem;
  }

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateX(300px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@media (max-width: 480px) {

  .padding-container {
    padding: 3rem 1rem;
  }

  .project-image-size {
    width: 2.5rem;
    height: 2.5rem;
  }

  .top-left-corner:after {
    width: 12rem;
    height:1rem;
  }
  .bottom-right-corner:before {
    width: 1rem;
    height: 9rem;
  }

  .bottom-right-corner:after {
    width: 12rem;
    height: 1rem;
  }

  .project-challenges-text {
    font-size: 0.8rem;
  }

  .project-sample-images {
    padding: 1rem 0.5rem;
  }
  .project-technology-title {
    font-size: 1rem;
  }

@media screen and (max-width:600px) {
  .project-link-live {
    font-size: 1rem;
  }
  .project-title {
    font-size: 2rem;
  }
}

}
</style>
