<script setup>


import { storeToRefs } from "pinia";
import { watch, ref, onMounted, } from "vue";
import { useRouter, useRoute } from "vue-router";

import { useDark, useToggle } from '@vueuse/core'


const router = useRouter()
const route = useRoute()

const rgbRandom = () => {
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)
    return `rgb(${r},${g},${b})`

}

const isDark = useDark()
const NavActived = ref('work')




onMounted(async () => {
      await router.isReady()
      console.log('route.path', route.path)
      const navList = document.querySelectorAll('.link-item')

      navList.forEach((e) => {
            // console.log(e.dataset.path)
            // console.log(route.meta.position)
            if (e.dataset.path != route.meta.position) {
                const isDark = document.getElementsByTagName('html')[0].classList.value.includes('dark')
                if (!isDark) { e.style.color = `var(--black85)` }
                if (isDark) { e.style.color = `var(--white85)` }
            }
            if (e.dataset.path == route.meta.position) {
                const isDark = document.getElementsByTagName('html')[0].classList.value.includes('dark')
                e.style.color = rgbRandom()
            }
        })

    })


onMounted(() => {
    const navList = document.querySelectorAll('.link-item')
    let interval = null




    navList.forEach(e => {
        e.onmouseover = () => {
            interval = setInterval(() => {
                e.style.color = rgbRandom()
            }, 200)
        }
    })

    navList.forEach(e => {
        e.onmouseout = () => {
            clearInterval(interval)
            if (e.dataset.path == route.meta.position) {
                e.style.color = rgbRandom()
            } else {
                const isDark = document.getElementsByTagName('html')[0].classList.value.includes('dark')
                if (isDark) { e.style.color = `var(--white85)` }
                if (!isDark) { e.style.color = `var(--black85)` }
            }
        }
    })


   


})




watch(route, () => {
    NavActived.value = route.meta.position
    const navList = document.querySelectorAll('.link-item')
    navList.forEach((e) => {
        if (e.dataset.path != route.meta.position) {
            const isDark = document.getElementsByTagName('html')[0].classList.value.includes('dark')
            if (!isDark) { e.style.color = `var(--black85)` }
            if (isDark) { e.style.color = `var(--white85)` }
        }
        if (e.dataset.path == route.meta.position) {
            const isDark = document.getElementsByTagName('html')[0].classList.value.includes('dark')
            if (!isDark) { e.style.color = `var(--black85)` }
            if (isDark) { e.style.color = `var(--white85)` }
        }

    })
})













</script>


<template >
    <div class="container   ">
        <div class="header  ">
            <div class="web-titile cursor-pointer   font-bold  text-black dark:text-white " @click="router.push('/')">
                <span>DSt.</span>
            </div>

            <div class="tabs  text-black85 dark:text-white85">
                <RouterLink class="link-item link-item-scale" data-path="work"
                    :class="NavActived == 'work' ? 'nav-active' : ''" name="home" to="/"> works </RouterLink>
                <RouterLink class="link-item link-item-scale" data-path="contect"
                    :class="NavActived == 'contact' ? 'nav-active' : ''" to="/contact"> contact </RouterLink>
            </div>
        </div>





    </div>
</template>

<style lang="scss">
.header {

    @apply py-8 md:py-16 md:pt-24 flex items-baseline justify-between;

    .web-titile {
        transition: var(--header-transition--color);
        user-select: none;

        @apply text-6xl font-bold flex items-center justify-center md:text-7xl 2xl:text-8xl;
    }

    .tabs {
        @apply text-2xl font-bold flex uppercase md:text-3xl 2xl:text-4xl;

        transition: var(--header-transition--color);

        &>a {
            @apply px-2 md:px-3 2xl:px-4 3xl:px-6
        }

        &>a:nth-last-child(1) {
            @apply pr-0;
        }

    }
}
</style>