<script setup>
import { storeToRefs } from 'pinia';
import { computed, ref, reactive, onBeforeMount } from 'vue';
import { useRoute, useRouter } from "vue-router";

import { useProjStore } from "../stores/proj";
const router = useRouter()

const infoList = ref(["clients", "clientsType", "service"])
const { ProjData } = storeToRefs(useProjStore())

const { searchByTag } = useProjStore()


const route = useRoute()


const pushTag = (tagId) => {
    router.push({ path: `/tag`, query: { "tagId": tagId } })
}


const pushClients = (Id) => {
    router.push({ path: `/clients`, query: { "clientId": Id } })

}

const push = (key, Id) => {
    console.log(Id)
    if (key == "clients") { router.push({ path: `/clients`, query: { "clientId": Id } }) }
    if (key == "clientsType" || key == "service") { router.push({ path: `/tag`, query: { "tagId": Id } }) }
    if (key == "designers") { router.push({ path: `/designers`, query: { "designerId": Id } }) }
}




</script>

<template>
    <div v-if="ProjData" class="lg:col-span-1  proj-info flex flex-col justify-center items-start     lg:hidden   ">







        <div
            class=" text-black55 dark:text-white55 proj-info-other flex justify-center items-center lg:items-start lg:justify-start text-base lg:text-lg">
            <div class="proj-info-other-title text-balck55  dark:text-white55 flex  flex-col items-start  ">
             
                <div class="proj-info-other-title-item " >
                    time
                </div>
                <div class="proj-info-other-title-item " v-for=" (item, index) in  infoList" :key="index">
                    {{ item }}
                </div>
                <div class="proj-info-other-title-item " v-for=" (item, index) in  ProjData.dsters" :key="index">
                    {{ item.duty }}
                </div>

            </div>

            <div class="proj-info-other-title text-black55  dark:text-white55 flex  flex-col items-start  ">
                <div class="proj-info-other-title-item "  >
                    &nbsp &nbsp| &nbsp &nbsp
                </div>
                <div class="proj-info-other-title-item " v-for=" (item, index) in  infoList" :key="index">
                    &nbsp &nbsp| &nbsp &nbsp
                </div>
                <div class="proj-info-other-title-item " v-for=" (item, index) in  ProjData.dsters" :key="index">
                    &nbsp &nbsp| &nbsp &nbsp
                </div>
            </div>

            <div class="proj-info-other-items   flex  flex-col items-start ">
                <div class="proj-info-other-title-item  "  >
                    {{ ProjData.time }}
                </div>
                <div class="proj-info-other-item " v-for=" (key, index) in infoList" :key="index">
                    <span class=" cursor-pointer" :class="index2 > 0 ? 'pl-2' : ''"
                        v-for=" (item, index2) in ProjData[key] " @click="push(key, item._id)">
                        {{ item.name }}
                    </span>
                </div>


                <div class="proj-info-other-title-item cursor-pointer " v-for=" (item, index) in  ProjData.dsters"
                    :key="index" @click="push('designers', item._id)">
                    {{ item.name }}
                </div>
            </div>


        </div>

    </div>
</template>


<style lang="scss">
.proj-info {
    min-width: 0;

}

.proj-info .info {
    line-height: 180%;
}

.proj-info-other-item {}

.over-inner {
    width: 100%;
    display: grid;
    grid-template-columns: 4fr 1fr 4fr;
    grid-template-rows: 1fr;
    justify-content: start;
    align-items: center;

    // width: 100%;
    // margin: 0 auto;
    // display: flex;
    // justify-content: start;
    // align-items: center;
    .info-title {
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }

    .sign {
        display: flex;
        justify-content: center;
        align-items: center;
    }
}
</style>