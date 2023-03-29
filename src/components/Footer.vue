<script setup>
import Icon_Sina from "./icons/Icon_Sina.vue";
import Icon_Ins from "./icons/Icon_Ins.vue";
import Icon_Group from "./icons/Icon_Group.vue";
import Icon_Email from "./icons/Icon_Email.vue";
import Icon_Dark from "./icons/Icon_Dark.vue";
</script>

<template>
  <footer class="footer container">
    <div class="footer-top color85">
      <div class="footer-top-title">DSt.</div>
      <div class="footer-top-link">
        <Icon_Sina />
        <Icon_Ins />
        <Icon_Group />
        <Icon_Email />
        <Icon_Dark />
      </div>
    </div>
    <div class="footer-bottom color55">
      <div class=" ">© 2022 DST. All rights reserved</div>
      <div class="footer-bottom-beian">
        <a href="https://beian.miit.gov.cn/" target="_blank"> 粤ICP备2023022463号</a>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  padding-bottom: env(safe-area-inset-bottom);
  @apply pt-2 mt-20;
  &-top {
    @apply border-b-2  
    dark:border-white55 border-black55 
    text-3xl 
    md:text-4xl 
    lg:text-5xl
  
    flex items-center justify-between;
    &-title {
    }
    &-link {
      user-select: none;
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

  &-bottom{
    @apply flex items-center justify-between my-4;
    &-beian{
      @apply  text-xs lg:text-sm;
    }
  }
}
</style>
