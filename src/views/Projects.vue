<template>
  <div class="projects-container" >
    <!-- <h3>projects</h3> -->
    <div class="project-show-case-container">
      <ProjectShowCase :projects="projects"/>
    </div>
    <div class="projects-contents-container" v-for="project in projects" :key="project.id">
      <ProjectCard :project="project" />
    </div>
  </div>
</template>

<script>
import { ProjectCard, ProjectShowCase } from '../components';
import { projects } from '../data';
export default {
    name: 'Projects',
    components : {
      ProjectCard,
      ProjectShowCase
    },
    data() {
      return {
        projects,
        
      }
    }
}
</script>

<style scoped>
.projects-container {
  display: flex;
  flex-direction: row;
  padding-bottom: 6rem;
  flex-wrap: wrap;
  overflow: auto;
  width: 100%;
  height: auto;
  justify-content: center;
}

.projects-container::-webkit-scrollbar-thumb {
  background-color: transparent; /* Set the color of the scrollbar thumb to transparent (works in WebKit browsers) */
}

.projects-container::-webkit-scrollbar {
  display: none;
}

.project-show-case-container {
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
  max-height: 300px;
  max-width: 900px;
  background-color: white;
  z-index: 10;
  padding: 1rem;
}
.projects-contents-container {
  display: flex;
  justify-content: center;
  width: 100%;
  box-sizing: border-box;
  margin: 2rem 1rem;
}
</style>