<template>
  <a 
    class="nav-button" 
    :class="{ selected: isSelected, scaled: isScaled }" 
    :href="url"
    >
    <!-- @click="navigateToUrl" -->
    <div class="icon-container">
      <FontAwesomeIcon v-if="isSelected" :icon="icon" :size="iconSize" beat/>
      <FontAwesomeIcon v-else :icon="icon" :size="iconSize" color="white"/>
    </div>
    <div class="text-container">{{ buttonText }}</div>
    <div class="underline"></div>
  </a>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  name: 'NavButton',
  props: {
    iconSize: {
      type: String,
      default: () => "1x"
    },
    icon: {
      type: Object,
      required: true
    },
    buttonText: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      buttons: [],
      isScaled: false,
      selected: false,
      active: false
    }
  },
  watch: {
    selected(newValue) {
      this.selected = newValue;
    }
  },
  mounted() {
    // Retrieve all NavButton instances in the parent component
    if(this.$parent && this.$parent.$children){
      this.buttons = this.$parent.$children.filter(child => child.$options.name === 'NavButton');
      }
  },
  methods: {
    navigateToUrl() {
      // Loop through all NavButton instances in the parent component and update their active status
        for (const button of this.buttons) {
          button.isSelected = button === this;
        }
        this.$router.push(this.url);
      },
    },
  computed: {
    isSelected() {
      return this.$route.path === this.url || this.selected; 
    }
  },
  components: {
    FontAwesomeIcon
  }
}
</script>

<style scoped>
.nav-button {
  display: flex;
  flex-direction: row;
  cursor: pointer;
  position: relative;
  transition: all 0.1s ease-in-out;
  text-decoration: none;
  /* background-color: rgba(112, 205, 20,0.5); */
}

.nav-button:hover .underline {
  animation: squiggly 1s infinite;
  animation-timing-function: linear;
}

/* @keyframes squiggly {
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(50%);
  }
  100% {
    transform: translateX(0);
  }
} */
.icon-container {
  display: flex;
  align-items: center;
  padding: 0.1rem;
  margin: 0.2rem 0.3rem;
}

.text-container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  padding: 0.2rem;
  color: white;
  font-size: 1.4rem;
  color: inherit;
  
}
/* .icon-container .fa-icon {
  font-size: 0.5em;
} */

/* .fa-icon {
  font-size: 0.5em;
} */

.nav-button.active {
  /* background-color: rgba(112, 205, 20,1); */
  transform: scale(1.1);
}

/* .nav-button.selected {
  transform: scale(1.1);
} */

.underline {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet);
  transform: scaleX(0);
  transition: all 0.25s ease-out;
}

.nav-button.selected .icon-container .svg-inline--fa {
  /* color: rgba(0, 174, 255,0.8);  */
  color: white;
}
.nav-button:hover .underline,
.nav-button.active .underline,
.nav-button.selected .underline {
  transform: scaleX(1);
  transition: all 0.25s ease-out;
  transform-origin: left;
}

@media (max-width: 400px){
  .text-container {
    font-size: 0.7rem;
  }
}

@media (min-width: 700px) {
  .icon-container{
    margin: 1rem;
  }
}

</style>
