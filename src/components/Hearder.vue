<script setup>
import { useDark } from "@vueuse/core";
import { watch, ref, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";

const isDark = useDark();
const router = useRouter();
const route = useRoute();

const rgbRandom = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
};

onMounted(async () => {
  await router.isReady();
  console.log("route.path", route.path);
  const navList = document.querySelectorAll(".header-tabs-link ");

  navList.forEach((e) => {
    // console.log(e.dataset.path)
    // console.log(route.meta.position)
    if (e.dataset.path != route.meta.position) {
      const isDark = document
        .getElementsByTagName("html")[0]
        .classList.value.includes("dark");
      if (!isDark) {
        e.style.color = `var(--black85)`;
      }
      if (isDark) {
        e.style.color = `var(--white85)`;
      }
    }
    if (e.dataset.path == route.meta.position) {
      const isDark = document
        .getElementsByTagName("html")[0]
        .classList.value.includes("dark");
      e.style.color = rgbRandom();
    }
  });
});

onMounted(() => {
  const navList = document.querySelectorAll(".header-tabs-link ");
  let interval = null;

  navList.forEach((e) => {
    e.onmouseover = () => {
      interval = setInterval(() => {
        e.style.color = rgbRandom();
      }, 150);
    };
  });

  navList.forEach((e) => {
    e.onmouseout = () => {
      clearInterval(interval);

      if (e.dataset.path == route.meta.position) {
        e.style.color = rgbRandom();
      } else {
        if (isDark.value) {
          e.style.color = `var(--white85)`;
        }
        if (!isDark.value) {
          e.style.color = `var(--black85)`;
        }
      }
    };
  });
});

watch(route, () => {
  console.log(route);
  const navList = document.querySelectorAll(".header-tabs-link ");
  navList.forEach((e) => {
    if (e.dataset.path != route.meta.position) {
      if (!isDark) {
        e.style.color = `var(--black85)`;
      }
      if (isDark) {
        e.style.color = `var(--white85)`;
      }
    }
    if (e.dataset.path == route.meta.position) {
      if (!isDark) {
        e.style.color = rgbRandom();
      }
      if (isDark) {
        e.style.color = rgbRandom();
      }
    }
  });
});

watch(isDark, (o, n) => {
  const navList = document.querySelectorAll(".header-tabs-link ");
  navList.forEach((e) => {
    if (e.dataset.path != route.meta.position) {
      isDark.value
        ? (e.style.color = `var(--white85)`)
        : (e.style.color = `var(--black85)`);
    }
  });
});
</script>

<template>
  <div class="container">
    <div class="header">
      <div class="header-name" @click="router.push('/')">
        <span>DSt.</span>
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

    @apply text-6xl 
        flex 
        items-center 
        justify-center 
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
