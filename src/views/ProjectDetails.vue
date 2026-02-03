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

      <div>
        <p class="project-title">{{ project?.title }}</p>
      </div>

      <div class="project-body">
        <div class="project-description-container">
          <p v-if="project?.allow" class="project-allow-text">{{ project?.allow }}</p>
          <p class="project-reason-text">Reasons for the project:</p>
          <p class="project-description-text">{{ project?.description }}</p>
        </div>

        <div class="project-challenges-container">
          <p class="project-challenge-title">Some challenges I encountered:</p>
          <p class="project-challenges-text">{{ project?.challenges }}</p>
        </div>

        <div v-if="project?.projectImages" class="project-images-container">
          <div
            v-for="(image, index) in project?.projectImages"
            :key="index"
            class="project-images"
          >
            <img
              :src="image"
              alt="project image"
              class="project-sample-images"
              @click="openModal(image)"
            />
          </div>
        </div>
      </div>

      <div class="project-technology-title">Technologies used in the project</div>
      <div class="project-technology-container">
        <div
          v-for="(technology, index) in project?.nameOfTechnologies"
          :key="index"
          class="project-technologies"
        >
          <div class="project-content">
            <img
              :src="project?.imageOfTechnologies[index]"
              :alt="technology"
              class="project-image-size"
            />
            <span class="project-technology-name">{{ technology }}</span>
          </div>
        </div>
      </div>
    </div>

    <div v-if="isModalOpen" class="modal-overlay" @click.self="closeModal">
      <div class="modal-content">
        <button class="modal-close" @click="closeModal">✕</button>
        <img :src="modalImage" alt="Enlarged Project Image" />
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import { projects } from "../data";

export default {
  name: "ProjectDetails",
  setup() {
    const route = useRoute();
    const router = useRouter();

    const project = ref(null);
    const isModalOpen = ref(false);
    const modalImage = ref("");

    onMounted(() => {
      const name = route.params["project"];
      const foundProject = projects.find((p) => p.title === name);
      if (!foundProject) {
        router.push({ name: "Home" });
      } else {
        project.value = foundProject;
      }
    });

    function goBack() {
      router.go(-1);
    }

    function openModal(image) {
      modalImage.value = image;
      isModalOpen.value = true;
    }

    function closeModal() {
      isModalOpen.value = false;
      modalImage.value = "";
    }

    return {
      project,
      goBack,
      isModalOpen,
      modalImage,
      openModal,
      closeModal,
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
  background-color: transparent;
}

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
  animation: squiggly 1s infinite linear;
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

.top-left-corner,
.bottom-right-corner {
  position: absolute;
}

.top-left-corner { left: 0; top: 0; width: 0.1rem; height: 0.1rem; }
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
  animation: fromLeftJam 1.5s ease-in-out;
}

.bottom-right-corner { bottom: 0; right: 0; width: 0.1rem; height: 0.1rem; background-color: white; }
.bottom-right-corner:before {
  content: "";
  position: absolute;
  bottom: -0.5rem;
  right: -0.5rem;
  width: 1rem;
  height: 9rem;
  background-color:white;
}

.bottom-right-corner:after {
  content: "";
  position: absolute;
  bottom: -0.5rem;
  right: 0rem;
  width: 17rem;
  height: 1rem;
  background-color:white;
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

.project-images {
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

.project-link-live,
.project-expo-link-barcode {
  display: flex;
  font-size: 1.1rem;
  text-align: center;
  padding: 0.5rem 0rem;
  color: black;
  font-weight: 900;
  transition: all 0.3s ease-out;
  text-decoration: none;
}

.project-link-live:hover,
.project-expo-link-barcode:hover {
  color: white;
}

.project-expo-msg {
  font-size: 0.9rem;
  font-weight: 600;
}

.project-technology-name {
  font-size: 0.7rem;
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
    height: 1rem;
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

  .project-link-live {
    font-size: 1rem;
  }

  .project-title {
    font-size: 2rem;
  }
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.85);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 1rem;
}

.modal-content {
  position: relative;
  max-width: 90%;
  max-height: 90%;
}

.modal-content img {
  width: 100%;
  height: auto;
  border-radius: 10px;
  display: block;
}

.modal-close {
  position: absolute;
  top: -10px;
  right: -10px;
  background: white;
  border: none;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  line-height: 1; 
  margin:0;
  padding: 0;     
  z-index: 10;

  transition: transform 0.2s ease-in-out; 
}

.modal-close:hover {
  background: #eee;
  transform: scale(1.5); 
}

.project-sample-images {
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
}

.project-sample-images:hover {
  transform: scale(1.05);
}
</style>
