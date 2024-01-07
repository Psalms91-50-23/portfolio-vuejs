<template>
  <div class="technology-card-container">
    <p>{{ projectNames }}</p>
  </div>
</template>

<script>

import { projectNames } from "../data/"

export default {
  name: "Technology",
  props: {
    projectName: {
        type: Object,
        required: true
    },
  },
  methods: {
    log(object){
     return  console.log(object);
    }
  },
    data() {
        return {
            projectNames
        }
    },
};

</script>
<style scoped>
    .technology-card-container {
        display: flex;
        flex-direction: column;
    }

    .technology-image {
        flex: 0 0 auto;
        width: calc(100%/3);
        height: auto;
        max-height: 100px;
        transition: transform 0.2s ease-in-out;
    }
</style>