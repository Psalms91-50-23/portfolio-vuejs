<template>
  <div class="project-card">
    <h1 class="project-card__title">{{ title }}</h1>
    <img class="project-link-image" :src="linkImage"/>
    <div class="parent-div">
    </div>
  </div>
</template>
<script>

import Technology from "./Technology.vue"
import { projectNames } from "../data"

export default {
  name: 'Project',
  components: {
    Technology
  },
  props: {
    description: {
      type: String,
      required: true
    },
    linkImage: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: true
    },
  },
  data() {
    return {
      projectNames
    }
  },
  computed:{
    message(){
      return projectNames
    }
  }
}
</script>

<style scoped>

</style>

