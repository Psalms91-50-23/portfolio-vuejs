<!-- ProjectCard.vue -->
<template>
    <div ref="elementToAnimate" class="project-card" :class="{ 'in-view': inView }">
      <h1 class="project-card-title">{{ project.title }}</h1>
      <div class="project-card-image-container">
        <img class="project-card-image" :src="project.linkImage" alt="Project" />
      </div>
      <div class="project-card-technologies-wrapper">
        <p class="technology-header-title">Technologies used in the project</p>
        <div class="project-card-technology-container">
          <div
            v-for="(technology, index) in project.nameOfTechnologies"
            :key="index"
            class="technology"
          >
            <img class="project-card-tech-image"  :src="project.imageOfTechnologies[index]" :alt="technology" />
            <span class="project-card-technology-color">{{ technology }}</span>
          </div>
        </div>
      </div>
      <a :href="'/projects/' + project.title" style="text-decoration: none; " class="project-link">
        Go to Project
      </a>
    </div>
</template>
  
<script>

export default {
  name: "ProjectCard",
  props: {
    project: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      inView: false
    }
  },
  mounted() {

    const outOfViewOptions = {
      rootMargin: '0px',
      threshold: 0.6 
    }
    const inViewOptions = {
      rootMargin: '0px',
      threshold: 0.1 
    }
  const outOfViewObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        } else {
          entry.target.classList.remove('in-view');
        }
      })
    }, outOfViewOptions)


  const inViewObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        } else {
          entry.target.classList.remove('in-view');
        }
      })
    }, inViewOptions)
    inViewObserver.observe(this.$refs.elementToAnimate);
  }
};
</script>

<style scoped>
.project-card {
  display: flex;
  position: relative;
  flex: 1;
  flex-direction: column;
  box-sizing: border-box;
  background-color: #ffffff;
  border-radius: 5px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  opacity: 0;
  transform: translateY(50px);
  transition: opacity 0.3s ease-out, transform 0.3s ease-out;
  padding: 1.5rem;
  width: 100%;
  height: 100%;
  margin-bottom: 1.5rem;
}

.technology-header-title {
  margin: 0;
  padding: 0;
  font-size: 0.8rem;
  font-weight: 800;
}
.slide-up {
  opacity: 1;
  transform: translateY(0);
  transition: all 0.5s ease-out;
}

.slide-down {
  opacity: 0;
  transform: translateY(50px);
  transition: all 0.5s ease-out;
}

.project-link {
  background-color: rgba(10, 112, 195, 0.439);
  padding: 1rem;
  text-align: center;
  color: black;
  font-weight: 900;
  transition: all 0.3s ease-out;
}

.project-link:active {
  transform: scale(1.05);
}

.project-link:hover {
  background-color:  rgba(10, 112, 195, 0.837);
  color: white;
}

.in-view {
  opacity: 1;
  transform: translateY(0px);
}
.project-card:hover {
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
}

.project-card-title {
  font-size: 24px;
  margin-bottom: 1rem;
}

.project-card-image-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;

}
.project-card-image {
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 5px;
  margin-bottom: 16px;
  border-radius: 50%;
  transition: all 0.2s ease-in-out;
}

.project-card-image:hover {
  border-radius: 5%;
}
.project-card-technologies-wrapper {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 1rem 0rem;
}

.project-card-technology-container{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.project-card-technology-color {
  color: black;
  font-size: 0.6rem ;
}

.technology {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  gap: 4px;
  margin: 0.5rem;
}

.project-card-button {
  background-color: #3498db;
  border: none;
  border-radius: 5px;
  color: #ffffff;
  cursor: pointer;
  font-size: 1rem;
  padding: 8px 16px;
  text-align: center;
  text-decoration: none;
  transition: background-color 0.3s;
}

.project-card-button:hover {
  background-color: #2980b9;
}

.project-card-tech-image {
  width: 20px;
  height: 20px;
}

.button-link {
  position: absolute;
  bottom: 1rem;
}

.slide-out {
  opacity: 0;
  transform: translateY(-50px);
  transition: all 0.3s ease-out;
}


@media screen and (max-width: 600px) {
  .technology-header-title {
    font-size: 0.7rem;
  }
  .project-card-technology-color {
  font-size: 0.5rem ;
}
}

@media screen and (min-width: 900px) {
    .project-card {
      max-width: 700px;
    }
}
</style>
  