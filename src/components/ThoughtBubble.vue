<template>
  <div class="thought-bubble-box" :class="{ hide: !isLargeScreen }">
    <div class="thought-bubble-contents">
      <div class="bubble-top"></div>
      <div class="bubble-top-left"></div>
      <div class="bubble-top-right"></div>
      <div class="bubble-right"></div>
      <div class="bubble-bottom"></div>
      <div class="bubble-bottom-right"></div>
      <div class="bubble-bottom-left"></div>
      <div class="bubble-left"></div>
      <div class="thought-bubble-tail" ></div>
      <p class="thought-text">{{ thoughtBubble }}</p>
    </div>
  </div>
</template>
  
  <script>

  export default {
    name: 'ThoughtBubble',
    props: {
      thoughtBubble: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
        isLargeScreen: false,
        // thoughtBubble: aboutMe[0].thoughtBubble,
      }
    },
    methods: {
      largeScreen() {
        this.isLargeScreen = window.innerWidth >= 768
      }
    },
    mounted() {
      this.largeScreen()
       window.addEventListener("resize", this.largeScreen)
    },
    beforeUnmount() {
    window.removeEventListener('resize', this.largeScreen)
    // cancelAnimationFrame(this.updateText)
  },
  }
  </script>
  
  <style>
  
.thought-bubble-box {
  position: absolute;
  box-sizing: border-box;
  width: 380px;
  height: auto;
  background-color: rgba(255, 255, 255, 1);
  right: -100%;
  top: -70%;
  transition: all 0.3s ease-in-out;
  /* outline: none; */
  animation: show-bubble-box 4.5s ease-in-out;
}

.hide {
  display: none;
}

.thought-text {
  width: 100%;
  font-size: 1rem;
  padding: 0.8rem;
}

.thought-bubble-contents {
  display: flex;
  box-sizing: border-box;
  position: relative;
  width: 100%;
  height: 100%;
  padding: 1rem;
  background-color: rgba(255, 255, 255, 1);
}

.bubble-top {
  position: absolute;
  width: 80px;
  height: 60px;
  left: calc(50% - (130px / 2));
  top: -45px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 50%;
  border-top: 1px solid rgba(0, 0, 0, 0.3);
  border-bottom: none;
  border-left: none;
}

.bubble-top-left {
  position: absolute;
  width: 60px;
  height: 60px;
  left: calc(0% - (60px / 2));
  top: -35px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 50%;
  border-top: 1px solid rgba(0, 0, 0, 0.3);
  border-right:  none;
  border-bottom: none;
  border-left: none;
  box-shadow: -3px 0px 2px 1px rgba(0, 0, 0, 0.3);
}

.bubble-top-left::before {
  position: absolute;
  content: "";
  right: -130%;
  bottom: 25%;
  width: 90px;
  height: 40px;
  border-top: 1px solid rgba(0, 0, 0, 0.3);
  border-right: none;
  border-bottom: none;
  border-left: none;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 50%;
}

.bubble-top-left::after {
  position: absolute;
  content: "";
  left: 5px;
  bottom: -90%;
  width: 40px;
  height: 60px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 50%;
  box-shadow: -3px 1px 2px 1px rgba(0, 0, 0, 0.3);
}

.bubble-top-right {
  position: absolute;
  width: 70px;
  height: 80px;
  right: calc(0% - (70px / 2));
  top: 0px;
  background-color: rgb(19, 18, 18);
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 1);
  border-top:1px solid rgba(0, 0, 0, 0.3);
  border-right:1px solid rgba(0, 0, 0, 0.3);
}

.bubble-top-right::before {
  content: "";
  position: absolute;
  width: 90px;
  height: 50px;
  left: calc(-70% - (110px / 2));
  top: -35px;
  background-color: rgb(19, 18, 18);
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 1);
  border-top:1px solid rgba(0, 0, 0, 0.3);
}

.bubble-top-right::after {
  content: "";
  position: absolute;
  width: 40px;
  height: 40px;
  left: calc(0% - (40px / 2));
  top: -20px;
  background-color: rgb(19, 18, 18);
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 1);
  border-top:1px solid rgba(0, 0, 0, 0.3);
  border-right:1px solid rgba(0, 0, 0, 0.3);
}

.bubble-right {
  position: absolute;
  width: 50px;
  height: 60px;
  right: -45px;
  border-radius: 50%;
  top: calc(50% - (60px / 2));
  background-color: rgba(255, 255, 255, 1);
  border-right:1px solid rgba(0, 0, 0, 0.3);
}

.bubble-right::before {
  content: "";
  position: absolute;
  width: 50px;
  height: 70px;
  right: calc(100% - (50px/2));
  top: calc(100% - (40px / 2));
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 1);
  border-right: 2px solid rgba(0, 0, 0, 0.3);
  z-index: 1;
}

.bubble-bottom {
  position: absolute;
  width: 90px;
  height: 50px;
  left: calc(50% - (90px / 2));
  bottom: -35px;
  border-radius: 40% 50%;
  background-color: rgba(255, 255, 255, 1);
  box-shadow: 0px 5px 3px 1px rgba(0, 0, 0, 0.3);

}

.bubble-bottom::before {
  content: "";
  position: absolute;
  width: 50px;
  height: 40px;
  left: -50px;
  bottom: 15px;
  border-top: none;
  border-right: none;
  border-bottom: 3px solid rgba(0, 0, 0, 0.3);
  border-left: none;
  border-radius: 40% 50%;
  background-color: rgba(255, 255, 255, 1);
  box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.3);

}
.bubble-bottom::after {
  content: "";
  position: absolute;
  width: 50px;
  height: 30px;
  right: -50px;
  bottom: 15px;
  border-top: none;
  border-right: none;
  border-bottom: 3px solid rgba(0, 0, 0, 0.3);
  border-left: none;
  border-radius: 45% 50%;
  background-color: rgba(255, 255, 255, 1);
  box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.3);
  z-index: 2;
}

.bubble-bottom-right {
  position: absolute;
  width: 90px;
  height: 50px;
  right: calc(10% - (90px / 2));
  bottom: calc(15% - (90px / 2));
  border-radius: 50%;
  border-right:  2px solid rgba(0, 0, 0, 0.3);
  background-color: rgba(255, 255, 255, 1);
  box-shadow: -1px 5px 2px 1px rgba(0, 0, 0, 0.3);
}

.bubble-bottom-left {
  position: absolute;
  width: 50px;
  height: 40px;
  left: calc(0% - (70px / 2));
  bottom: -15px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 50%;
  border-top: none;
  border-right:  none;
  border-bottom: 3px solid rgba(0, 0, 0, 0.3);
  border-left:  2px solid rgba(0, 0, 0, 0.3);
  box-shadow: -1px 2px 2px 1px rgba(0, 0, 0, 0.3);
  z-index: 2;
}

.bubble-bottom-left::before {
  content: "";
  position: absolute;
  width: 70px;
  height: 60px;
  right: calc(0% - (75px / 2));
  top: calc(100% - (70px/2));
  background-color: rgba(255, 255, 255, 1);
  border-radius: 50%;
  border-top: none;
  border-right:  none;
  border-bottom: 3px solid rgba(0, 0, 0, 0.3);
  border-left:  3px solid rgba(0, 0, 0, 0.3);
  box-shadow: -2px 3px 4px 1px rgba(0, 0, 0, 0.3);
  z-index: 2;
}

.bubble-bottom-left::after {
  content: "";
  position: absolute;
  width: 40px;
  height: 40px;
  left: calc(100% + (50px / 2));
  top: calc(100% - (70px/2));
  background-color: rgba(255, 255, 255, 1);
  border-radius: 50%;
  border-top: none;
  border-right:  none;
  border-bottom: 3px solid rgba(0, 0, 0, 0.3);
  border-left: none;
  box-shadow: 0 4px 3px 1px rgba(0, 0, 0, 0.3);
  z-index: 0;
}

.bubble-left {
  position: absolute;
  width: 40px;
  height: 60px;
  left: -30px;
  top: calc(50% - (60px / 2));
  background-color: rgba(255, 255, 255, 1);
  border-radius: 50%;
  border-top: none;
  border-right:  none;
  border-bottom: none;
  box-shadow: -4px 1px 2px rgba(0, 0, 0, 0.3);
}

.bubble-left::before {
  position: absolute;
  content: "";
  width: 60px;
  height: 45px;
  right: 0;
  bottom: calc(-75% + (40px / 2));
  background-color: rgba(255, 255, 255, 1);
  border-radius: 50%;
  border-top: none;
  border-right:  none;
  border-bottom: none;
  box-shadow: -3px 2px 2px 2px rgba(0, 0, 0, 0.3);
}

.bubble-left::after {
  position: absolute;
  content: "";
  width: 45px;
  height: 45px;
  right: -15%;
  top: 125%;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 50%;
  box-shadow: -3px 1px 1px 1px rgba(0, 0, 0, 0.3);
  z-index: 5;
}

.thought-bubble-tail {
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 1);
  bottom: calc(-50% + (60px/4));
  left: 20%;
  box-shadow: -1px 2px 5px 2px rgba(0, 0, 0, 0.3);
  animation: show 1.6s ease-in;
}


.thought-bubble-tail::before {
  position: absolute;
  content: "";
  width: 15px;
  height: 15px;
  left: -20px;
  bottom: -30px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 1);
  box-shadow: -1px 2px 5px 2px rgba(0, 0, 0, 0.3);
  animation: show-bubble-three 1s ease-in;
}

.thought-bubble-tail::after {
  position: absolute;
  content: "";
  width: 12px;
  height: 12px;
  left: -40px;
  bottom: -60px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 1);
  box-shadow: -1px 2px 5px 2px rgba(0, 0, 0, 0.3);
  animation: show-bubble-three 0.6s ease-in;
}

@keyframes show-bubble-box {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes show {
  from { opacity: 0; }
  to { opacity: 1; }
}
@keyframes show-bubble-one {
  from { opacity: 0; }
  to { opacity: 1; }
}
@keyframes show-bubble-two {
  from { opacity: 0; }
  to { opacity: 1; }
}
@keyframes show-bubble-three {
  from { opacity: 0; }
  to { opacity: 1; }
}


@media screen and (max-width: 900px) {
  .thought-bubble-box {
    width: 250px;
    right: -170px;
    top: -18rem;
  }

  .bubble-right::before {
    right: 0px;
  }

  .bubble-bottom-right {
    right: calc(5% - (90px / 2));
    bottom: calc(15% - (90px / 2));
  }

  .bubble-bottom::before {
    width: 40px;
    bottom: 5px;
    left: -30px;
    z-index: -1;
  }

  .bubble-top-right::after {
    position: absolute;
    content: "";
    width: 50px;
    height: 40px;
    bottom: -20px;
    right: 0;
    background-color: rgba(255,255,255,1);
    border-right: 1px solid rgba(0, 0, 0, 0.3);
    border-radius: 50%;
  }

  .bubble-left::after {
    top: 80px;
    height: 50px;
    width: 60px;
    left: -10px;
    box-shadow: -3px 1px 1px 1px rgba(0, 0, 0, 0.3);
  }
}

@media screen and (min-width: 901px) { 
  
  .thought-bubble-box {
    flex: 1;
    width: 300px;
    right: -250px;
    top: -290px;

  }
  .thought-text {
    font-size: 1rem;
  }
  .bubble-top-right {
    top: -5px;
  }
  .bubble-right {
    top: 60px;
    right: -35px;
  }
  .bubble-right::before {
    top: 50px;
    right: 5px;
    width: 40px;
    height: 50px;
  }

  .bubble-left {
    top: 40px;
  }

  .bubble-left::before {
    top: 40px;
    height: 50px;
    width: 60px;
    left: -20px;
    border-left: 0px;
    border-top: 0px;
    border-bottom: 3px;
  }
  .bubble-left::after {
    top: 72px;
    height: 50px;
    width: 50px;
    left: -3px;
    border: 2px;
    box-shadow: -3px 2px 2px 1px rgba(0, 0, 0, 0.3);
  }
  
}

@media only screen and (min-width: 1000px) and (min-height: 600px) { 
  .thought-bubble-box {
    top: -150px;
    right: -300px;
  }
  .thought-bubble-tail {
    left: 0%;
    top: 200px;
  }
  .thought-text{
    font-size: 1rem;
    padding: 0.2rem;
  }

}


@media only screen and (min-width: 1200px) and (min-height: 700px) { 

  .thought-bubble-box {
    top: -280px;
  }
}

  </style>
  