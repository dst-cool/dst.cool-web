<script setup>




import { onBeforeRouteLeave } from 'vue-router'

import ProjInfo from "../components/ProjInfo.vue";
import ProjShow from "../components/ProjShow.vue";
import ProjInfoBottom from "../components/ProjInfoBottom.vue";


import { useTheme } from "../utils/theme";






onBeforeRouteLeave((to, from) => {
    const {restorBG} = useTheme()
    restorBG()
    return true
})




</script>

<template>
    <transition name="fade" mode="out-in" appear>

 

        <div class="container flex flex-col lg:grid grid-cols-4 gap-4  ">
            <ProjInfo />
            <ProjShow />
       

            <ProjInfoBottom />

            <table>
                <tr>
                    <td class="color55">12color 中文</td>
                    <td class="color55">12color 中文</td>
                    <td class="color55"> 颜色问题测试中</td>
                    <td class="color55">12color 中文</td>


                </tr>
            </table>

        </div>


    </transition>
</template>


