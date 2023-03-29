import { defineStore } from "pinia";
import { useDark, useToggle } from "@vueuse/core";

import { ref } from "vue";
import { useRoute } from "vue-router";

export const useTheme = defineStore("Theme", () => {
  const route = useRoute();

  const isDark = useDark();
  const toggleDark1 = useToggle(isDark);

  const isEnterWord = ref(false);
  const rgbRandom = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
  };

  const changeBG = () => {
    if (isDark.value) {
      document.querySelector("html").style.backgroundColor = "var(--black90)";
    }
  };

  const restorBG = () => {
    document.querySelector("html").style.backgroundColor = "var(--bg-color)";
  };
  const toggleDark = () => {
    toggleDark1();

    const navList = document.querySelectorAll(".link-item");
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


      restorBG()
      changeBG

    
  };

  return {
    isDark,
    isEnterWord,
    changeBG,
    restorBG,
    toggleDark,
  };
});
