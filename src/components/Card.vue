<script setup>
import { onBeforeMount ,onMounted} from 'vue';
import { useRouter, useRoute } from 'vue-router';

import { useProjStore } from "../stores/proj";

const router = useRouter()
const route = useRoute()

const { projObj } = defineProps(['projObj'])

const { FilterByTag, storeGetFiltedTag } = useProjStore()

const push = () => {
    router.push({ path: `/work/${projObj.title}/${projObj._id}` })
}




const handleClick = (tagId) => {


    router.push({ path: `/tag`, query: { "tagId": tagId } })

  

}





</script> 

<template>
    <div class="card">

        <div class="card-pic  " @click="push()">
            <div class="card-pic-box  cursor-pointer">
                <img :src="projObj.cover" alt="">
            </div>



        </div>


        <div class="card-des ">
            <div class=" mt-3 md:mt-6 text-base md:text-3xl text-black85 dark:text-white85 cursor-pointer" @click="push()">
                {{ projObj.title }}
            </div>

            <div
                class="card-tags mt-0 md:mt-0 text-sm md:text-lg text-black55 dark:text-white55 flex justify-start items-center flex-wrap">
                <p v-for=" (tag, index) in   projObj.clientsType" :key="index"
                    class=" overflow-hidden  flex justify-start items-center flex-nowrap flex-shrink-0">


                <div class="flex cursor-pointer tag" :data-value="tag._id" @click="handleClick(tag._id)"> {{ tag.name }}

                </div>

                <span class="mx-2 " v-if="(projObj.service.length != 0 || index != projObj.clientsType.length - 1)">|</span>



                </p>

                <p v-for=" (tag, index) in   projObj.service" :key="index"
                    class=" overflow-hidden  flex justify-start items-center flex-nowrap flex-shrink-0">


                <div class="flex cursor-pointer tag" :data-value="tag._id" @click="handleClick(tag._id)"> {{ tag.name }}

                </div>

                <span class="mx-2 " v-if="index != projObj.service.length - 1">|</span>



                </p>




            </div>


        </div>




    </div>
</template>

<style lang="scss">
.card {
    user-select: none;
    overflow: hidden;


}

.card-pic {
    position: relative;
    clip-path: polygon(0% 0%, 85% 0%, 100% 15%, 100% 100%, 0% 100%);

}

.card-pic-box {
    overflow: hidden;
    padding-bottom: 100%;


    img {
        position: absolute;
        top:0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
        transition: transform 0.25s ease-out;
        transform-origin: center;
        will-change: transform;
    }

}



.card:hover .card-pic-box img {
    transform: scale(1.1);


}
</style>