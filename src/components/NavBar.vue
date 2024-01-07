
<template>
  <nav class="navbar-container">  
    <NavButton :icon="faHome" buttonText="Home" url="/" iconSize="1x" />
    <NavButton :icon="faProjectDiagram" buttonText="Projects" url="/projects" iconSize="1x" />
    <!-- <NavButton :icon="faEnvelope" buttonText="Contact" url="/contact" iconSize="1x" /> -->
  </nav>
</template>
  
  <script>
  import { faHome, faProjectDiagram, faEnvelope } from "@fortawesome/free-solid-svg-icons";
  import NavButton from './NavButton.vue';
  
  export default {
    name: 'NavBar',
    components: {
        NavButton
    },
    computed: {
      faHome() {
        return faHome;
      },
      faProjectDiagram() {
        return faProjectDiagram;
      },
      faEnvelope() {
        return faEnvelope;
      },
    },
    
  };
  </script>
  
<style scoped>

.navbar-container {
    display: flex;
    /* position: sticky; */
    box-sizing: border-box;
    gap: 1rem;
    padding: 1rem 0rem;
    width: 100%;
    max-width: 900px;
    flex-direction: row;
    justify-content: left;
}

@media (max-width: 280px) {
  .navbar-container {
    gap: 0.5rem;
    padding: 0.5rem;
  }
}




</style>