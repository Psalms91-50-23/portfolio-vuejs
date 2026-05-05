<template>
  <div class="project-details">
    <div class="padding-container">
      <!-- BACK BUTTON -->
      <div class="back-button-parent">
        <div class="back-icon-container" @click="goBack">
          <font-awesome-icon
            icon="fa-solid fa-left-long"
            :style="{ color: 'white', fontSize: '3rem' }"
          />
          <div class="underline-back"></div>
        </div>
      </div>

      <!-- TITLE -->
      <p class="project-title">{{ project?.title }}</p>

      <!-- BODY -->
      <div class="project-body">
        <div class="project-description-container">
          <p v-if="project?.allow" class="project-allow-text">
            {{ project.allow }}
          </p>

          <p v-if="project?.miniDescription" class="project-mini-description">
            {{ project.miniDescription }}
          </p>

          <p class="project-reason-text">Project Overview:</p>
          <p class="project-description-text">{{ project?.description }}</p>
        </div>

        <div v-if="project?.challenges" class="project-challenges-container">
          <p class="project-challenge-title">Challenges:</p>
          <p class="project-challenges-text">{{ project.challenges }}</p>
        </div>

        <!-- CONDITIONAL EXTRA DETAILS -->
        <div
          v-if="
            project?.testAccounts ||
            project?.furtherInstructions ||
            project?.expoMsg ||
            project?.expoURL
          "
          class="project-extra-details-container"
        >

          <div v-if="project?.expoMsg" class="project-extra-detail-box">
            <p class="project-extra-detail-label">Expo Instructions:</p>
            <p class="project-extra-detail-text">{{ project.expoMsg }}</p>
          </div>

          <div v-if="project?.expoURL" class="project-extra-detail-box">
            <p class="project-extra-detail-label">Expo App:</p>
            <a
              :href="project.expoURL"
              target="_blank"
              rel="noopener noreferrer"
              class="project-link-live"
            >
              {{ project.expoURL }}
            </a>
          </div>
        </div>

        <div v-if="project?.projectImages?.length" class="project-images-container">
          <div
            v-for="(image, index) in project.projectImages"
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
      <div
        v-if="project?.testAccounts?.trim() || project?.furtherInstructions?.trim()"
        class="project-extra-details-container"
      >
        <p class="project-extra-details-title">
          Additional Project Details
        </p>

        <div v-if="project?.testAccounts?.trim()" class="project-extra-detail-box">
          <p class="project-extra-detail-label">Test Account</p>
          <p class="project-extra-detail-text">
            {{ project.testAccounts }}
          </p>
        </div>

        <div v-if="project?.furtherInstructions?.trim()" class="project-extra-detail-box">
          <p class="project-extra-detail-label">Testing Instructions</p>
          <p class="project-extra-detail-text">
            {{ project.furtherInstructions }}
          </p>
        </div>
      </div>
      <!-- TECHNOLOGIES -->
      <div class="project-technology-title">
        Technologies used in the project
      </div>

      <!-- FRONTEND -->
      <template v-if="project?.frontendTechnologies?.length">
        <div class="project-technology-subtitle">Frontend</div>

        <div class="project-technology-container">
          <div
            v-for="(tech, index) in project.frontendTechnologies"
            :key="'front-' + index"
            class="project-technologies"
          >
            <div class="project-content">
              <img
                v-if="project?.imageOfFrontendTechnologies?.[index]"
                :src="project.imageOfFrontendTechnologies[index]"
                :alt="tech"
                class="project-image-size"
              />
              <span class="project-technology-name">{{ tech }}</span>
            </div>
          </div>
        </div>
      </template>

      <!-- DEFAULT / OLD TECHNOLOGIES -->
      <template v-else-if="project?.nameOfTechnologies?.length">
        <div class="project-technology-container">
          <div
            v-for="(tech, index) in project.nameOfTechnologies"
            :key="'tech-' + index"
            class="project-technologies"
          >
            <div class="project-content">
              <img
                v-if="project?.imageOfTechnologies?.[index]"
                :src="project.imageOfTechnologies[index]"
                :alt="tech"
                class="project-image-size"
              />
              <span class="project-technology-name">{{ tech }}</span>
            </div>
          </div>
        </div>
      </template>

      <!-- BACKEND -->
      <template v-if="project?.backendTechnologies?.length">
        <div class="project-technology-subtitle">Backend</div>

        <div class="project-technology-container">
          <div
            v-for="(tech, index) in project.backendTechnologies"
            :key="'back-' + index"
            class="project-technologies"
          >
            <div class="project-content">
              <img
                v-if="project?.imageOfBackendTechnologies?.[index]"
                :src="project.imageOfBackendTechnologies[index]"
                :alt="tech"
                class="project-image-size"
              />
              <span class="project-technology-name">{{ tech }}</span>
            </div>
          </div>
        </div>
      </template>
      <!-- INTEGRATIONS -->
    <template v-if="project?.integrations?.length">
      <div class="project-technology-subtitle">Integrations</div>

      <div class="project-technology-container">
        <div
          v-for="(integration, index) in project.integrations"
          :key="'integration-' + index"
          class="project-technologies"
        >
          <div class="project-content">
            <!-- Optional icon support later -->
            <span class="project-technology-name">
              {{ integration }}
            </span>
            <img
              v-if="project?.integrationImages?.[index]"
              :src="project.integrationImages[index]"
              class="project-image-size"
            />
          </div>
        </div>
      </div>
    </template>
      <!-- LIVE LINK AT BOTTOM -->
      <div v-if="project?.url" class="project-bottom-link-container">
        <p class="project-bottom-link-title">Live Project:</p>
        <a
          :href="project.url"
          target="_blank"
          rel="noopener noreferrer"
          class="project-link-live"
        >
          {{ project.url }}
        </a>
      </div>
    </div>

    <!-- MODAL -->
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

    const goBack = () => router.go(-1);

    const openModal = (image) => {
      modalImage.value = image;
      isModalOpen.value = true;
    };

    const closeModal = () => {
      isModalOpen.value = false;
      modalImage.value = "";
    };

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
  overflow: -moz-scrollbars-none;
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

.project-mini-description {
  font-size: 0.95rem;
  font-weight: 800;
  font-style: italic;
  padding: 0.4rem 0;
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
  transition: all 0.3s ease-out;
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

.back-icon-container:hover .underline-back {
  transform: scaleX(1);
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

.project-images-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
}

.project-images {
  width: 100%;
  max-width: 400px;
  padding: 10px;
}

.project-sample-images {
  width: 100%;
  padding: 1rem 0;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
}

.project-sample-images:hover {
  transform: scale(1.05);
}

.project-challenges-container {
  display: flex;
  flex-direction: column;
}

.project-challenge-title {
  font-weight: 800;
}

.project-challenges-text {
  padding: 0.5rem;
  font-style: italic;
}

/* EXTRA DETAILS */
.project-extra-details-container {
  margin: 1rem 0;
  padding: 0.9rem;
  border-radius: 12px;
  background-color: rgba(255, 255, 255, 0.25);
}

.project-extra-details-title {
  margin: 0 0 0.7rem 0;
  font-weight: 900;
  font-size: 1rem;
}

.project-extra-detail-box {
  margin-bottom: 0.8rem;
}

.project-extra-detail-box:last-child {
  margin-bottom: 0;
}

.project-extra-detail-label {
  margin: 0;
  font-size: 0.85rem;
  font-weight: 800;
}

.project-extra-detail-text {
  margin: 0.25rem 0 0 0;
  font-size: 0.8rem;
  font-style: italic;
}

/* TECHNOLOGY SECTION */
.project-technology-title {
  font-size: 1rem;
  font-weight: 700;
  margin-top: 1.2rem;
}

.project-technology-subtitle {
  font-size: 0.85rem;
  font-weight: 700;
  margin-top: 0.6rem;
  margin-bottom: 0.3rem;
}

.project-technology-container {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
}

.project-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.2rem;
}

.project-image-size {
  width: 3.5rem;
  height: 2.5rem;
  object-fit: contain;
}

.project-technology-name {
  font-size: 0.6rem;
}

/* LINKS */
.project-link-live {
  display: inline-flex;
  font-size: 0.85rem;
  text-decoration: underline;
  font-weight: 800;
  color: black;
  transition: all 0.3s ease-out;
  word-break: break-word;
}

.project-link-live:hover {
  color: white;
}

.project-bottom-link-container {
  margin-top: 1.5rem;
  padding: 0.9rem;
  border-radius: 12px;
  background-color: rgba(255, 255, 255, 0.25);
}

.project-bottom-link-title {
  margin: 0 0 0.4rem 0;
  font-weight: 900;
  font-size: 1rem;
}

/* MODAL */
.modal-overlay {
  position: fixed;
  inset: 0;
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
  margin: 0;
  padding: 0;
  z-index: 10;

  transition: transform 0.2s ease-in-out;
}

.modal-close:hover {
  background: #eee;
  transform: scale(1.5);
}

.project-technology-subtitle {
  margin-top: 0.8rem;
}

@media (max-width: 480px) {
  .padding-container {
    padding: 3rem 1rem;
  }

  .project-title {
    font-size: 2rem;
  }

  .project-challenges-text,
  .project-description-text {
    font-size: 0.8rem;
  }

  .project-image-size {
    width: 2.5rem;
    height: 2rem;
  }

  .project-technology-name {
    font-size: 0.55rem;
  }

  .project-link-live {
    font-size: 0.75rem;
  }
}
</style>