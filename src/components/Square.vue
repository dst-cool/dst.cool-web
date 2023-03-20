<template>
    <div class="rect " v-if="data.value == 'big-rect'">
        <div class="innerBox" :class="index >= 1 ? 'none' : ''" v-for="(obj, index) in  data.pic" :key="index">
            <img :src="obj.ossUrl" alt="">
        </div>

    </div>
    <div class="square" v-if="data.value == 'big-square'">
        <div class="innerBox" :class="index >= 1 ? 'none' : ''" v-for="(obj, index) in  data.pic" :key="index">
            <img :src="obj.ossUrl" alt="">
        </div>


    </div>

    <div class="big-col " v-if="data.value == 'big-col'">
        <div class="innerBox"  :class="index >= 1 ? 'none' : ''" v-for="(obj, index) in  data.pic" :key="index">
            <img  :src="obj.ossUrl" alt="">
        </div>


    </div>
    <div class="rect-col" v-if="data.value == 'col-2rect'">
        <div class="innerBox" v-for="(obj, index) in  data.pic" :key="index">
            <img v-if="index < 2" :src="obj.ossUrl" alt="">
        </div>

    </div>

    <div class="rect-col" v-if="data.value == 'col-2rect'">
        <div class="innerBox" v-for="(obj, index) in  data.pic" :key="index">
            <img v-if="index < 2" :src="obj.ossUrl" alt="">
        </div>

    </div>
    <div class="rect2 " v-if="data.value == 'rect2'">
        <div class="innerBox" v-for="(obj, index) in  data.pic" :key="index">
            <img v-if="index < 2" :src="obj.ossUrl" alt="">
        </div>


    </div>


</template>

<script setup>

import { defineProps } from "vue";


const props = defineProps(['data'])
const { data } = props

</script>

<style lang="scss">
.square2 {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    overflow: hidden;

    .innerBox {
        width: 100%;
        padding-bottom: 100%;

        overflow: hidden;
        position: relative;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
        }
    }
}

.rect2 {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    overflow: hidden;

    .innerBox {
        width: 100%;
        padding-bottom: 56.25%;

        overflow: hidden;
        position: relative;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
        }
    }
}


.rect {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    overflow: hidden;


    .innerBox {
        width: 100%;
        padding-bottom: 56.25%;
        overflow: hidden;
        position: relative;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
        }
    }
}

.none {
    display: none;
}

.square {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    overflow: hidden;

    .innerBox {
        width: 100%;
        padding-bottom: 100%;
        overflow: hidden;
        position: relative;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
        }
    }
}

.big-col {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    overflow: hidden;

    .innerBox {
        width: 100%;
        padding-bottom: 177.78%;
        overflow: hidden;
        position: relative;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
        }
    }
}



.rect-col {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    overflow: hidden;

    .innerBox {
        width: 100%;
        padding-bottom: 177.8%;
        overflow: hidden;
        position: relative;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
        }
    }
}
</style>