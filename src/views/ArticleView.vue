<script setup>




import { onBeforeRouteLeave } from 'vue-router'

import ProjInfo from "../components/ProjInfo.vue";
import ProjShow from "../components/ProjShow.vue";
import ProjInfo2 from "../components/ProjInfo2.vue";


import { useTheme } from "../utils/theme";








onBeforeRouteLeave((to, from) => {
    const {restorBG} = useTheme()
    restorBG()
    return true
})




</script>

<template>
    <transition name="fade" mode="out-in" appear>

        <!-- <div class="container  flex  flex-col lg:flex-row  lg:justify-between lg:items-start">
                    <ProjInfo />
                    <ProjShow />
                </div> -->

        <div class="container flex flex-col lg:grid grid-cols-4 gap-4  ">
            <ProjInfo />
            <ProjShow />
       

            <ProjInfo2 />



        </div>


    </transition>
</template>


