<!-- RotatingComponent.vue -->
<template>
    <div class="rotating-element" :style="rotateAnimation">
        <ProjectThumbnail
            v-for="(project, index) in projects"
            :key="index"
            :image="project.linkImage"
            :title="project.title"
            :style="positionThumbnail(index)"
            @stop-rotation="stopRotation"
            @resume-rotation="resumeRotation"
            :project="project"
            :index="index"
        />
    </div>
  </template>
  
<script>
    import { ProjectThumbnail, Thumbnail } from "./";
    import { projects } from "../data";

  export default {
    name: "Rotating",
    components: {
        ProjectThumbnail
    },
    data(){
        return {
            projects,
            isRotating: true
        }
    },
    methods: {
        positionThumbnail(index) {
        const angle = (360 / this.projects.length) * index;
        const distance = 120;
        const x = Math.cos((angle * Math.PI) / 180) * distance;
        const y = Math.sin((angle * Math.PI) / 180) * distance;
        const counterRotate = -angle;
        return {
        transform: `translate(${x}px, ${y}px) rotate(${counterRotate}deg)`,
        animation: this.rotationStyle,
        };
    },
    stopRotation() {
      this.isRotating = false;
    },
    resumeRotation() {
      this.isRotating = true;
    },
  },
    computed: {
      rotateAnimation() {
        return {
          animation: "my-animation 20s linear infinite",
        };
      },
    },
  };
  </script>
  
  <style scoped>
  .rotating-element {
    position: relative;
    width: 100px;
    height: 100px;
    background-color: red;
    transform-origin: center center;
    animation: parent-animation 15s linear infinite;;
  }

  @keyframes parent-animation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
  </style>
  