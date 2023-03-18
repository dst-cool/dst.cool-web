<script setup>

import icon1 from "../components/icons/icon1.vue";
import icon2 from "../components/icons/icon2.vue";

import icon3 from "../components/icons/icon3.vue";

import icon4 from "../components/icons/icon4.vue";

</script>


<template>
    <footer class="footer container  mt-20">
        <div class="footer-top text-black85 dark:text-white85 ">
            <div class="footer-title">DSt.</div>
            <div class="footer-link ">
                <icon1 />
                <icon2 />
                <icon3 />
                <icon4 />

            </div>
        </div>
        <div class="footer-bottom">
  


            <div class=" mt-8 text-black55 dark:text-white55">© 2022 DST. All rights reserved </div>

        </div>

    </footer>
</template>

<style>

.footer{

    @apply py-2
} 
.footer-link{
    @apply  flex items-center  justify-center
}
.footer svg {
    @apply mx-2 w-8 md:w-10 h-10 cursor-pointer;
    fill: var(--footer-icon-color);
    stroke: var(--footer-icon-color);

}
.footer svg:nth-last-child(1){
    @apply mr-0
}

.footer-top {
    @apply  border-b-2  border-0  dark:border-white55 border-black55 text-3xl md:text-5xl flex items-center justify-between;
}
</style>