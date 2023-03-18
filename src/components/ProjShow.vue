<template>
    <div v-if="curData" class="proj-show col-span-4 lg:col-span-3 flex flex-col item-start justify-center">

    

        <div v-for="(item,index) in PicList " :key="index">
            <Square :data="item" />

        </div>
        


<!-- {{ PicList }} -->
    </div>
</template>

<script  setup>
import { storeToRefs } from "pinia";
import { ref ,computed} from "vue";
import { useRouter, useRoute } from "vue-router";
import Square from "./Square.vue";
import { useProjStore } from "../stores/proj";

// const {ProjData} = storeToRefs(useProjStore());
const { ListClone } = storeToRefs(useProjStore())

const route = useRoute()
const title = ref(route.params.projName)
const id = ref(route.params.projId)


const curData = computed(() => {
    if (ListClone.value) {
        const index = ListClone.value.findIndex(e =>e._id == id.value)
        return ListClone.value[index]
    }
})


const PicList = computed(() => {
    if (ListClone.value) {
        const index = ListClone.value.findIndex(e =>e._id == id.value)
        return ListClone.value[index].pics
    }
})





</script>


<style lang="scss">
.proj-show {}



.aspect-video {
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}
</style>