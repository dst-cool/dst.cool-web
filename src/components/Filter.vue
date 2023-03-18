<script setup>
import { storeToRefs } from 'pinia';
import { onBeforeMount, watch, ref, reactive } from 'vue';
import { useRouter, useRoute } from 'vue-router';


import { useCategoriesStore } from "../stores/Categories"
import { useProjStore } from "../stores/proj"
const router = useRouter()
const route = useRoute()


const { categories } = storeToRefs(useCategoriesStore())
const { searchBycategory, searchByTag } = useProjStore()





const clickTag = (tagId) => {

    router.push({ path: `/tag`, query: { "tagId": tagId } })
}











</script>





<template>
    <div class="Filter hidden lg:block ">


        <div class="filter-category-content pb-10" v-for="(obj, index) in categories " :key="Date.now() + index">
            <span class="filter-category text-lg  block mb-5 font-bold">
                {{ obj.name}}
            </span>


            <div class="filter-tabs  ">
                <span @click="clickTag( tab._id)" class="filter-tab text-3xl" v-for="(tab, index) in obj.tags "
                    :key="tab.name"> {{ tab.name }}
                    <span class="self-line"
                        :style="{ opacity: (route.query.tagId == tab._id) ? 'visibilit1y' : '0' }">



                        /</span>

                </span>
            </div>

        </div>

    </div>
</template>

<style lang="scss">
.Filter {
    @apply flex items-start justify-start flex-col flex-nowrap flex-shrink-0 text-black55 mr-14 dark:text-white55
}

.filter-tabs {
    @apply flex items-start justify-start flex-col text-black85 dark:text-white85
}



.filter-tab {
    display: inline-block;
    white-space: normal;
    word-wrap: break-word;
    position: relative;

}

.self-line {

    opacity: 1;
    line-height: 100%;
    vertical-align: -0.08em;

}
</style>