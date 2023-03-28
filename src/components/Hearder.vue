<script setup>
import { useDark } from "@vueuse/core";
import { watchEffect, ref, onMounted, computed, watch } from "vue";
import { useRouter, useRoute } from "vue-router";
import Typed from "typed.js";
import { storeToRefs } from "pinia";

import { useProjStore } from "../stores/proj";

const { ProjData } = storeToRefs(useProjStore());
const dst = computed(() => ProjData.value);

const isDark = useDark();
const router = useRouter();
const route = useRoute();

const rgbRandom = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
};

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
const shuffle = (List) => {
  let array = JSON.parse(JSON.stringify(List));
  let res = [],
    random;
  while (array.length > 0) {
    random = Math.floor(Math.random() * array.length);
    res.push(array[random]);
    array.splice(random, 1);
  }
  let final = Pre.concat(res).concat(Pre);
  return final;
};

let curTyped = null;

const setTyped = (data) => {
  curTyped = new Typed(".header-name-type", {
    strings: shuffle(data),
    typeSpeed: 90,
    smartBackspace: true,
    showCursor: false,
    cursorChar: "|",
    autoInsertCss: false,
    backDelay: 1400,
    loop: true,

    onStart: (self) => {},
    onStop: (self) => {},
    onBegin: (self) => {},
    onComplete: (self) => {
      // self.reset();
    },
  });
};

const changeColorIndarkMode = () => {
  const navList = document.querySelectorAll(".header-tabs-link ");
  navList.forEach((e) => {
    if (e.dataset.path != route.meta.position) {
      isDark.value
        ? (e.style.color = `var(--white85)`)
        : (e.style.color = `var(--black85)`);
    }
    if (e.dataset.path == route.meta.position) {
      e.style.color = rgbRandom();
    }
  });
};

watch(route, () => {
  changeColorIndarkMode();
});

watchEffect(() => {
  if (
    route.name == "ArticleView" &&
    ProjData.value &&
    ProjData.value.dst.length > 0 &&
    document.body.offsetWidth > 768
  ) {
    setTyped(ProjData.value.dst);
  } else if (curTyped) {
    curTyped.destroy();
    document.querySelector(".header-name-type").innerHTML = "DSt.";
  }
});

watch(isDark, (o, n) => {
  changeColorIndarkMode();
});

const bindMouseEvent = () => {
  const navList = document.querySelectorAll(".header-tabs-link ");
  let interval = null;

  navList.forEach((e) => {
    e.onmouseover = () => {
      interval = setInterval(() => {
        e.style.color = rgbRandom();
      }, 150);
    };
    e.onmouseout = () => {
      clearInterval(interval);
      if (e.dataset.path != route.meta.position) {
        isDark.value
          ? (e.style.color = `var(--white85)`)
          : (e.style.color = `var(--black85)`);
      }
      if (e.dataset.path == route.meta.position) {
        e.style.color = rgbRandom();
      }
    };
  });
};
onMounted(() => {
  bindMouseEvent();
});

onMounted(async () => {
  await router.isReady();
  console.log("route.path", route.path);
  changeColorIndarkMode();
});
</script>

<template>
  <div class="container">
    <div class="header">
      <div class="header-name" @click="router.push('/')">
        <span class="header-name-type">DSt.</span>
      </div>

      <div class="header-tabs color85">
        <RouterLink
          class="header-tabs-link"
          data-path="work"
          name="home"
          to="/"
        >
          works
        </RouterLink>
        <RouterLink class="header-tabs-link" data-path="contact" to="/contact">
          contact
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.header {
  @apply py-8 md:py-16 md:pt-24 flex items-baseline justify-between font-bold;

  .header-name {
    transition: var(--header-transition--color);
    user-select: none;
    width: 100%;
    overflow: hidden;
    display: flex;

    &-type {
      display: block;
      height: 100%;
      overflow: hidden;
      white-space: nowrap;
    }
    &-type::after {
      content: "1";
      visibility: hidden;
    }
    @apply text-6xl 
        flex 
        items-center 
        justify-start 
        md:text-7xl 
        2xl:text-8xl
        cursor-pointer
        
        text-black
        dark:text-white;
  }

  .header-tabs {
    @apply text-2xl 
        
        flex 
        uppercase 
        md:text-3xl 
        2xl:text-4xl;

    transition: var(--header-transition--color);

    & > a {
      @apply px-2 md:px-3 2xl:px-4 3xl:px-6;
    }

    & > a:nth-last-child(1) {
      @apply pr-0;
    }
  }
}
</style>
