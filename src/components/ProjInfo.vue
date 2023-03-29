<script setup>
import { storeToRefs } from "pinia";
import { computed, ref, reactive, onBeforeMount } from "vue";
import { useRoute, useRouter } from "vue-router";

import { useProjStore } from "../stores/proj";
const router = useRouter();

const infoList = ref(["clients", "clientsType", "service"]);
const { ProjData } = storeToRefs(useProjStore());

const route = useRoute();

const push = (key, Id) => {
  console.log(Id);
  if (key == "clients") {
    router.push({ path: `/clients`, query: { clientId: Id } });
  }
  if (key == "clientsType" || key == "service") {
    router.push({ path: `/tag`, query: { tagId: Id } });
  }
  if (key == "designers") {
    router.push({ path: `/designers`, query: { designerId: Id } });
  }
};
</script>

<template>
  <div
    v-if="ProjData"
    class="lg:col-span-1 proj-info flex flex-col justify-center items-start lg:flex"
  >
    <div
      class="flex justify-start text-black55 proj-info-title dark:text-white55 lg:text-3xl text-3xl lg:mb-10 mb-4"
    >
      {{ ProjData.title }}
    </div>

    <div
      class="font2 info text-black55 dark:text-white55 lg:mb-5 mb-0 text-sm lg:text-base"
    >
      {{ ProjData.text }}
    </div>

    <!-- <div
      class="lg:flex hidden text-black55 dark:text-white55 proj-info-other justify-center items-start lg:items-start lg:justify-start text-base lg:text-lg overflow-hidden"
    >
      <div
        class="proj-info-other-title text-balck55 dark:text-white55 flex flex-col items-start"
      >
        <div class="table-item">time</div>

        <div class="table-item" v-for="(item, index) in infoList" :key="index">
          {{ item }}
        </div>

        <div
          class="table-item dsters"
          :data-index="index"
          v-for="(item, index) in ProjData.dsters"
          :key="index"
        >
          {{ item.duty }}
        </div>
      </div>

      <div
        class="proj-info-other-title text-black55 px-3 dark:text-white55 flex flex-col items-center justify-center"
      >
        <div class="table-item">|</div>
        <div class="table-item" v-for="(item, index) in infoList" :key="index">
          |
        </div>
        <div
          class="table-item dsters"
          :data-index="index"
          v-for="(item, index) in ProjData.dsters"
          :key="index"
        >
          |
        </div>
      </div>

      <div class="proj-info-other-items flex flex-col items-start">
        <div class="table-item">
          {{ ProjData.time }}
        </div>

        <div
          class="proj-info-other-item ellipsis"
          v-for="(key, index) in infoList"
          :key="index"
        >
          <span
            class="cursor-pointer"
            :class="index2 > 0 ? 'pl-2' : ''"
            v-for="(item, index2) in ProjData[key]"
            @click="push(key, item._id)"
          >
            {{ item.name }}
          </span>
        </div>
        <div></div>

        <div
          class="table-item dsters cursor-pointer"
          :data-index="index"
          v-for="(item, index) in ProjData.dsters"
          :key="index"
          @click="push('designers', item._id)"
        >
          {{ item.name }}
        </div>

        <span>123</span>
        <span>123</span>

        <span>123</span>
        <span>123</span>
      </div>
    </div> -->


    <div
      class="lg:flex hidden text-black55 dark:text-white55 proj-info-other justify-center items-start lg:items-start lg:justify-start text-base lg:text-lg overflow-hidden"
    >
      <div class="table">
        <table>
          <!-- 时间 -->
          <tr>
            <td class="table-item">time</td>
            <td class="table-item-symbol">|</td>
            <td class="table-item">{{ ProjData.time }}</td>
          </tr>

          <!-- 客户 -->
          <tr>
            <td class="table-item">clients</td>
            <td class="table-item-symbol">|</td>
            <td class="table-item">
              <span
                class="cursor-pointer"
                v-for="(item, index2) in ProjData.clients"
                @click="push('clients', item._id)"
              >
                {{ item.name }}
              </span>

            </td>
          </tr>

          <!-- //类型 -->
          <tr>
            <td class="table-item">clientsType</td>
            <td class="table-item-symbol">|</td>
            <td class="table-item">
              <span
                class="cursor-pointer"
                v-for="(item, index2) in ProjData.clientsType"
                @click="push('clientsType', item._id)"
              >
                {{ item.name }}
              </span>
            </td>
          </tr>

          <!-- //服务 -->
          <tr>
            <td class="table-item">service</td>
            <td class="table-item-symbol">|</td>
            <td class="table-item">
              <span
                class="cursor-pointer"
                v-for="(item, index2) in ProjData.service"
                @click="push('service', item._id)"
              >
                {{ item.name }}
              </span>
            </td>
          </tr>
<tr class="divider">  ---</tr>
          <tr class="dsters" v-for="(item, index2) in ProjData.dsters">
            <td class="table-item">{{ item.duty }}</td>
            <td class="table-item-symbol">|</td>
            <td class="table-item" @click="push('designers',item._id)">
              {{ item.name }}
            </td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.proj-info {
  min-width: 0;
  align-self: start;
  @apply lg:sticky lg:top-10 w-full;
  top: 20vh;
}

.proj-info .info {
  line-height: 180%;
}

.table {
  tr {

 
    td{
      vertical-align: top;
      text-indent: 0px;
      text-align: left;
    }
    td:nth-last-child(1) {
      white-space: pre-wrap;
      word-break: break-word;
      span{
        @apply pr-2
      }
    }
    

  }

  .dsters {
    padding-top: 20px;
  }
  &-item {
    &-symbol {
      vertical-align: center;
      width: 10px;
      @apply px-2 ;
    }
  }
}

.divider{
  color: transparent;
  visibility: hidden;
}
</style>
