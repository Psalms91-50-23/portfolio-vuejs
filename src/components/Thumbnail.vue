<template>
    <div class="thumbnail" @mouseover="stopRotation">
      <img :src="image" :alt="title" />
      <div class="technologies">
        <div v-for="(tech, index) in projects" :key="index" class="tech">
          <img :src="tech.image" :alt="tech.name" class="project-image"/>
          <span>{{ tech.name }}</span>
        </div>
      </div>
      <button @click="openProjectUrl">View Project</button>
    </div>
  </template>
  
  <script>
  import { projects } from "../data";
  
  export default {
    name: "Thumbnail",
    props: {
      image: String,
      title: String,
    },
    data(){
        return {
            projects
        }
    },
    computed: {
      project() {
        return projects.find(p => p.title === this.title) || {};
      },
    },
    methods: {
      stopRotation() {
        this.$emit("stop-rotation");
      },
      openProjectUrl() {
        window.open(this.project.url, "_blank");
      },
    },
  };
  </script>
  
  <style scoped>
  .thumbnail {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 50px;
    height: 50px;
    cursor: pointer;
    z-index: 1;
  }
  
  .technologies {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: opacity 0.3s;
  }
  .thumbnail:hover .technologies {
    opacity: 1;
  }
  
  .tech {
    display: flex;
    align-items: center;
    margin: 5px 0;
  }
  
  .tech img {
    margin-right: 5px;
    object-fit: contain;
  }
  
  button {
    position: absolute;
    bottom: -20px;
    left: 50%;
    transform: translateX(-50%);
    opacity: 0;
    transition: opacity 0.3s;
  }
  
  .thumbnail:hover button {
    opacity: 1;
  }
  </style>
  