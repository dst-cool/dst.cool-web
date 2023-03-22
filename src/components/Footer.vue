<script setup>
import Icon_Sina from "./icons/Icon_Sina.vue";
import Icon_Ins from "./icons/Icon_Ins.vue";
import Icon_Group from "./icons/Icon_Group.vue";
import Icon_Email from "./icons/Icon_Email.vue";

</script>

<template>
  <footer class="footer container ">
    <div class="footer-top color85">
      <div class="footer-top-title">DSt.</div>
      <div class="footer-top-link">
        <Icon_Sina />
        <Icon_Ins />
        <Icon_Group />
        <Icon_Email />
      </div>
    </div>
    <div class="footer-bottom">
      <div class="mt-8 color55">
        © 2022 DST. All rights reserved
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  @apply py-2 mt-20;
  &-top {
    @apply 
    border-b-2  
    dark:border-white55 border-black55 
    text-3xl 
    md:text-4xl 
    lg:text-5xl
  
    flex items-center justify-between ;
    &-title {
    }
    &-link {
      @apply flex items-center  justify-center;
      svg {
        @apply mx-2 w-8 md:w-10 h-10 cursor-pointer;
        fill: var(--footer-icon-color);
        stroke: var(--footer-icon-color);
      }
      svg:nth-last-child(1) {
        @apply mr-0;
      }
    }
  }
}
</style>
