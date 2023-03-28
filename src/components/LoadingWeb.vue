<script setup>
import Typed from "typed.js";
import { onMounted, vShow } from "vue";
import anime from "animejs/lib/anime.es.js";
import IconScroll from "./icons/iconScroll.vue";
import ChangeGradientColor from "@/assets/js/loading.js";
import _ from "lodash";

console.log(ChangeGradientColor);
let ary = [
  "DSteam.",
  "Design Something.",
  "Design Store.",
  "DeSign talents.",
  "Dancing Sometimes.",
  "Dringking Sometime.",
  "Dying Sometimes.",
];
let Pre = ["DSt."];
let finalAry;
const baseColorList = [
  "radial-gradient(at 18% 74%, hsla(127, 100%, 50%, 1) 0px, transparent 50%)",
  "radial-gradient(at 13% 17%, hsla(176, 100%, 50%, 1) 0px, transparent 50%)",
  "radial-gradient(at 50% 38%, hsla(46, 100%, 50%, 1) 0px, transparent 50%)",
  "radial-gradient(at 89% 14%, hsla(236, 100%, 50%, 1) 0px, transparent 50%)",
  "radial-gradient(at 56% 83%, hsla(20, 100%, 50%, 1) 0px, transparent 50%)",
  "radial-gradient(at 88% 88%, hsla(269, 100%, 50%, 1) 0px, transparent 50%)",
  "radial-gradient(at 73% 60%, hsla(356, 100%, 50%, 1) 0px, transparent 50%)",
];
let collap;
let typed;
let animation;

const shuffle = (List) => {
  let array = JSON.parse(JSON.stringify(List));
  let res = [],
    random;
  while (array.length > 0) {
    random = Math.floor(Math.random() * array.length);
    res.push(array[random]);
    array.splice(random, 1);
  }
  let final = Pre.concat(res);
  return final;
};

const HandleWheel = (event) => {
  _.debounce(() => {
    if (event.deltaY > 0) {
      handleClick();
    }
  }, 300)();
};

const HandleResize = (e) => {
  _.throttle(() => {
    document.querySelector(".colorful-page").style.height =
      window.innerHeight + "px";
  }, 30)();
};

const setTyped = () => {
  typed = new Typed(".type-text-d", {
    strings: finalAry,
    typeSpeed: 30,
    smartBackspace: true,
    showCursor: false,
    cursorChar: "|",
    autoInsertCss: true,
    backDelay: 700,

    onStart: (self) => {},
    onStop: (self) => {},
    onBegin: (self) => {},
    onComplete: (self) => {
      finalAry = shuffle(ary);
      self.reset();
    },
  });
};

const setAnime = () => {
  collap = anime({
    targets: ".colorful-page",
    height: "6px",
    autoplay: false,

    duration: 500,
    easing: "easeInOutQuad",
    begin: function (anim) {},
    complete: function (anim) {
      const bg = document.querySelector(".colorful-page");
      bg.style.position = "fixed";
      bg.style.top = 0;
      const linearBar = document.querySelector(".linearBar");
      // linearBar.style.display = "block";
      linearBar.classList.add("linearBarShow");
    },
  });
};

const init = () => {
  //baseStyle
  document.querySelector(".main").style.display = "none";

  const scrollElement = document.querySelector(".colorful-page");

  scrollElement.addEventListener("wheel", HandleWheel);

  window.addEventListener("resize", HandleResize);

  setTyped();
  setAnime();
  animation = new ChangeGradientColor(baseColorList, ".colorful-page");
};

const unmounted = () => {
  document
    .querySelector(".colorful-page")
    .removeEventListener("wheel", HandleWheel);
  window.removeEventListener("resize", HandleResize);
  typed.stop();
  animation.unmounted();
};

const handleClick = () => {
  document.querySelector(".main").style.display = "flex";
  document.querySelector(".scroll-button").style.display = "none";
  document.querySelector(".type-position").style.opacity = 0;
  collap.play();
  unmounted();
};

onMounted(() => {
  finalAry = shuffle(ary);

 
  init();
});
</script>

<template>
  <div class="colorful-page text-white85">
    <div class="galss"></div>



    <div class="linearBar"></div>
    <div
      class="type-position container text-6xl font-bold md:text-7xl 2xl:text-8xl;"
    >
      <div class="type-text-d"></div>
    </div>

    <div
      @click="handleClick"
      class="scroll-button text-base flex flex-col items-center justify-start text-4xl cursor-pointer text-white55"
    >
      <div>discover something</div>

      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-xiala-"></use>
      </svg>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.colorful-page {
  overflow: hidden;
  width: 100%;
  height: 100vh;
  position: relative;
  z-index: 200;
  background-color: hsla(126, 100%, 48%, 0.4);
  padding: 0 1rem;

  background-image: radial-gradient(
      at 18% 74%,
      hsla(127, 100%, 50%, 1) 0px,
      transparent 50%
    ),
    radial-gradient(at 13% 17%, hsla(176, 100%, 50%, 1) 0px, transparent 50%),
    radial-gradient(at 50% 38%, hsla(46, 100%, 50%, 1) 0px, transparent 50%),
    radial-gradient(at 89% 14%, hsla(236, 100%, 50%, 1) 0px, transparent 50%),
    radial-gradient(at 56% 83%, hsla(20, 100%, 50%, 1) 0px, transparent 50%),
    radial-gradient(at 88% 88%, hsla(269, 100%, 50%, 1) 0px, transparent 50%),
    radial-gradient(at 73% 60%, hsla(356, 100%, 50%, 1) 0px, transparent 50%);

  background-repeat: no-repeat;
}

.glass {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
  filter: blur(10px);

  backdrop-filter: blur(10px);
  color: black;
  font-size: 100px;
}

.type-position {
  font-size: 60px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 0 auto;
  transition: opacity 2s ease-in-out;
}

.type-text-d {
  position: absolute;
  top: 35%;
  transform: translateY(-50%);
  height: 200px;
}

.type-text {
  position: relative;
  overflow: hidden;
}

.scroll-button {
  position: absolute;
  left: 50%;
  bottom: 5%;
  transform: translate(-50%, 0%);
  user-select: none;
  animation: breathe ease-in-out 2s infinite alternate;

  @keyframes breathe {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
}

.icon {
  font-size: 48px;
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}

.linearBar {
  background-color: black;
  width: 100%;
  height: 6px;
  position: absolute;
  bottom: 0;
  left: 0;

  background: linear-gradient(
    87deg,
    rgba(10, 240, 10, 1) 3%,
    rgba(10, 10, 240, 1) 22%,
    rgba(255, 100, 0, 1) 38%,
    rgba(240, 210, 20, 1) 55%,
    rgba(140, 10, 255, 1) 74%,
    rgba(10, 240, 240, 1) 96%
  );
  // background-repeat: repeat-x;
  z-index: 200;
  opacity: 0;
  transition: opacity ease-in-out 0.5s;
}

.linearBarShow {
  opacity: 1;
}
</style>
