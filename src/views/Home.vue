<template>
  <div class="profile-content-container">
    <div class="profile-image-content-container" >
      <div class='image-container slide-in-right'  :class="{ 'flipped': isFlipped }" >
        <div class="flipper" 
          @click="toggleFlip"
        >
          <div class="front">
            <img class="profile-image" src="/images/cartoon_me.png" />
            <p class="center">Click to see the real me</p>
          </div>
          <div class="back">
            <img class="profile-image-back" src="/images/real_me.png" />
            <p class="center">Click to see the cartoon me</p>
          </div>
        </div>
        <div class="speech-bubble slide-in-left-delay">
          <div class="speech-bubble-tail">
          </div>
          <div class="tail-shadow"></div>
          <p :key="typedText" class="about-me">
            {{ typedText }}
          </p>
        </div>
        <ThoughtBubble :thoughtBubble="thoughtBubble"/>
      </div>
    </div>
  </div>
</template>
<script>

import { aboutMe } from "../data"
import { ThoughtBubble } from "../components"

export default {
name: 'Home',
components: {
  ThoughtBubble
},
data() {
  return {
    isMobile: false,
    introText: "",
    thoughtBubble: aboutMe[0].thoughtBubble,
    currentLengthOfIntro: 0,
    isFlipped: false,
    isHovered: false,

  }
},
mounted() {
  this.updateIsMobile()
  window.addEventListener('resize', this.updateIsMobile)
  const hasVisitedBefore = localStorage.getItem('hasVisitedBefore');
  // console.log(this.hasVisitedBefore)
    if (hasVisitedBefore) {
      this.hasVisitedBefore = true;
    }
    else {
      // If it's the first visit, set the flag to true in local storage
      localStorage.setItem('hasVisitedBefore', true);
    }
  this.introText = aboutMe[0].pageIntro; // Assign the value of 
  this.updateText();
},
beforeUnmount() {
  window.removeEventListener('resize', this.updateIsMobile)
  cancelAnimationFrame(this.updateText)
},
methods: {
  updateIsMobile() {
    this.isMobile = window.innerWidth <= 768
  },
  updateText() {
    const speedFactor = this.hasVisitedBefore ? 0.8 : 0.5; // Adjust this value to control the speed
    const targetLength = this.introText.length;
    if (this.currentLengthOfIntro < targetLength) {
      this.currentLengthOfIntro += speedFactor;
    if (this.currentLengthOfIntro > targetLength) {
      this.currentLengthOfIntro = targetLength; // Clamp to the target length
    }
      window.requestAnimationFrame(this.updateText);
    }
  },
  // Added flip method to toggle flipped property
  toggleFlip() {
    this.isFlipped = !this.isFlipped;
  },
  showTooltip() {
    this.isHovered = true;
  },
  hideTooltip() {
    this.isHovered = false;
  },
},
computed: {
  typedText() {
    return this.introText.substring(0, this.currentLengthOfIntro)
    },

  }
}

</script>

<style scoped>

.profile-content-container {
  display: flex;
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  transition: all 0.3s ease-in-out;

}

.profile-image-content-container {
  display: flex;
  flex: 1;
  position: relative;
  animation: slide-in;
  justify-content: center;
  align-items: end;
  width: 100%;
  transition: all 0.3s ease-in-out;
  box-sizing: border-box;
  z-index: 0;
  margin-bottom: 6rem;
  
}

.image-container {
  position: relative;
  perspective: 1000px;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  width: 100%;
  max-width: 300px;
  max-height: 300px;
  height: 100%;
  border-radius: 50%;
  margin-bottom: 10px;
  
}

.flipper {
  transition: 0.6s;
  transform-style: preserve-3d;
  position: relative;
}

.flipper:hover {
  cursor: pointer;
}

.image-container.flipped {
  top: 0;
  transform: rotateY(180deg);
}

.front,
.back {
  backface-visibility: hidden;
  top: 0;
  left: 0;
}

.front {
  position: absolute;
  box-sizing: border-box;
  z-index: 2;
  top: -2rem;
  transform: rotateY(0deg);
}

.back {
  position: absolute;
  transform: rotateY(180deg);
  z-index: 2;
  top: -2rem;
}

.flipper.flipped {
  transform: rotateY(180deg);
}

.center {
  display: flex;
  box-sizing: border-box;
  justify-content: center;
  text-align: center;
  margin: 0;
}

.image-container.flipped .flipper {
  transform: rotateY(180deg);
  transition: transform 0.6s;
}
.profile-image {
  width: 100%;
  height: 100%;
  max-height: 300px;
  max-width: 300px;
  border-radius: 50%;
}

.profile-image,
.profile-image-back {
  width: 100%;
  height: 100%;
  max-width: 300px;
  max-height: 300px;
  border-radius: 50%;
}
.about-me {
  font-size: 0.1rem;
  margin: 0;
}

.speech-bubble {
  position: absolute;
  background-color: rgba(241, 241, 241, 1);
  border-radius: 5px;
  top: -18.5rem;
  left:-0.8rem;
  padding: 0.7rem;
  width: 100%;
  max-width: 150%;
  height: auto;
  transition: all 0.3s ease-in-out;
  opacity: 0;
  z-index: 2;
}

.speech-bubble-tail {
  position: absolute;
  bottom: -14px;
  width: 30px;
  height: 15px;
  transition: all 0.3s ease-in-out;
  background-color: rgba(241, 241, 241, 1);
  border-radius: 10% 0 0 70%;
  transition: all 0.3s ease-in-out;
  clip-path: polygon(0% 0%, 100% 0%, 89% 7%, 79% 14%, 68% 26%, 62% 39%, 59% 54%, 63% 67%, 70% 78%, 83% 88%, 100% 100%, 0% 99%);
  z-index: 5;
}

.tail-shadow {
  position: absolute;
  bottom: -15px;
  width: 20px;
  height: 15px;
  background-color: transparent;
  border-right: 15px solid transparent;
  border-radius: 20% 0 0 90%;
  box-shadow: -2px 2px 2px 1px rgba(0, 0, 0, 0.2); 
  transition: all 0.3s ease-in-out;
  z-index: 100;
}  
.profile-image {
  width: 100%;
  max-width: 300px;
  height: 100%;
  max-height: 300px;
  border-radius: 50%;
}

/* Media query for small devices (phones) */
@media only screen and (min-width: 576px) and (min-height: 700px){

  .about-me {
    font-size: 0.85rem;
  }

  .speech-bubble-tail {
    bottom: -14px;
    left: 1rem;
  }
  .tail-shadow {
    bottom: -15px;
    left: 0.9rem;
  }
}

/* Styles for small devices */
@media only screen and (max-height: 700px) {
  .profile-content-container {
    justify-content: center;
    align-items: center;
  }

  .speech-bubble {
    top: -16.7rem;
  }
  .about-me {
    font-size: 0.85rem;
  }
}


/* Media query for medium devices (tablets) */
@media only screen and (min-width: 768px) {
  .profile-content-container {
    justify-content: center;
    margin-bottom: 40px;
  }
  .speech-bubble {
    display: flex;
    flex: 1;
    left: -13rem;
    top: -18rem;
    width: 320px;
  }
  .speech-bubble-tail {
    bottom: -14px;
    left: 13.9rem;
  }
  .tail-shadow {
    bottom: -15px;
    left: 14rem;
  }
}

/* Media query for large devices (laptops/desktops) */
@media only screen and (min-width: 992px) {
  .profile-content-container {
    justify-content: center;
    align-items: center;
  }
  .speech-bubble {
    left: -21rem;
    top: -17rem;
    max-width: 450px;
  }
  .speech-bubble-tail {
    bottom: -25px;
    height: 30px;
    width: 70px;
    left: 17rem;
    pointer-events: none;
  }
  .tail-shadow {
    bottom: -25px;
    height: 30px;
    width: 60px;
    left: 16.9rem;
    pointer-events: none;
  }
}


 @media only screen and (max-width: 300px) and (max-height: 700px) {
  
    .speech-bubble {
      left: 0.1rem;
      top: -19rem;
      height: auto;
      width: 220px;
    }
    .image-container {
      bottom: -3.5rem;
    }
    .about-me {
    font-size: 0.75rem;
    margin: 0;
  }
 }

 @media only screen and (min-width: 1000px) and (min-height: 600px) { 

  .image-container {
    margin-bottom: 3rem;
  }
  .speech-bubble {
      left: -21rem;
      top: -12rem;
      height: auto;
      width: 450px;
    }
    .profile-image-content-container {
      padding-bottom: 0.5rem;
      height: 60vh;
      align-items: end;
      margin-bottom: 3rem;
      align-items: center;
   }
 }

 @media only screen and (min-width: 760px) and (min-height: 900px) {

.profile-content-container {
  align-items: center;
}
.profile-image-content-container {
  align-items: center;
 }
}

@media only screen and (min-width: 1000px) and (min-height: 600px) { 

.speech-bubble {
    left: -21rem;
    top: -11rem;
  }
  .profile-content-container {
    align-items: end;
  }
  .profile-image-content-container {
    padding-bottom: 2rem;
    align-items: end;
 }
}

 @media only screen and (min-width: 1200px) and (min-height: 700px) { 

  .speech-bubble {
      left: -21rem;
      top: -14rem;
    }
    .profile-content-container {
      align-items: end;
    }
    .profile-image-content-container {
      padding-bottom: 2rem;
      align-items: center;
   }
 }

</style>