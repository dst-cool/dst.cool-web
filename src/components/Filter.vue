<script setup>
import { storeToRefs } from "pinia";
import { useRouter, useRoute } from "vue-router";
import { useCategoriesStore } from "../stores/Categories";

const router = useRouter();
const route = useRoute();

const { categories } = storeToRefs(useCategoriesStore());

const clickTag = (tagId) => {
  router.push({ path: `/filtertag`, query: { tagId: tagId } });
};
</script>

<template>
  <div class="Filter switchHidden color55">
    <div
      class="filter-category"
      v-for="(obj, index) in categories"
      :key="Date.now() + index"
    >
      <span class="filter-category-name">
        {{ obj.name }}
      </span>

      <div class="filter-tabs color85">
        <span
          @click="clickTag(tab._id)"
          class="filter-tabs-name text-3xl"
          v-for="(tab, index) in obj.tags"
          :key="tab.name"
        >
          {{ tab.name }}
          <span
            class="active-line"
            :style="{
              opacity: route.query.tagId == tab._id ? 'visibilit1y' : '0',
            }"
          >
            /</span
          >
        </span>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.Filter {
  @apply flex items-start justify-start flex-col flex-nowrap   ;
}

.filter-category {
  @apply pb-10;
  &-name {
    @apply text-lg  block mb-5 font-bold;
  }
}

.filter-tabs {
  @apply flex items-start justify-start flex-col ;
  &-name{
    @apply block
  }
}

.active-line {
  opacity: 1;
  line-height: 100%;
  vertical-align: -0.08em;
}
</style>
