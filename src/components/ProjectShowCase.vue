<template>
    <div class="project-showcase" @mouseenter="pauseSlideshow" @mouseleave="startSlideshow">
      <div class="project-container" :style="{ transform: 'translateX(' + (-projectIndex * 100) + '%)' }">
        <div v-for="(project, index) in projects" :key="index" class="project">
          <ProjectShowCaseCard :project="project"/>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import  ProjectShowCaseCard  from "./ProjectShowCaseCard.vue"

  export default {
    name: "ProjectShowCase",
    props: {
        projects: {
            type: Object,
            required: true
        }
    },
    components: {
      ProjectShowCaseCard
    },
    data() {
      return {
        projectIndex: 0,
        intervalId: null
      }
    },
    mounted() {
      this.startSlideshow();
    },
    methods: {
      startSlideshow() {
        this.intervalId = setInterval(() => {
          this.projectIndex = (this.projectIndex + 1) % this.projects.length;
        }, 2000);
      },
      pauseSlideshow() {
        clearInterval(this.intervalId);
      }
    }
  }
  </script>
  
  <style>
  .project-showcase {
    position: relative;
    width: 100%;
    overflow: hidden;
  }
  .project-container {
    display: flex;
    transition: transform 0.5s;
  }
  .project {
    display: flex;
    flex: 0 0 100%;
    justify-content: center;
    align-items: center;
  }
  </style>
  