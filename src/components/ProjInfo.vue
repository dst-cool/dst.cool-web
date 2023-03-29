<script setup>
import { storeToRefs } from "pinia";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useProjStore } from "../stores/proj";

const router = useRouter();
const infoList = ref(["clients", "clientsType", "service"]);

const { ProjData } = storeToRefs(useProjStore());

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
  <div v-if="ProjData" class="projectsInfo">
    <div class="projectsInfo-title color85">
      {{ ProjData.title }}
    </div>

    <div class="projectsInfo-text font2 color55">
      {{ ProjData.text }}
    </div>

    <div class="projectsInfo-info color55">
      <div class="table">
        <table>
          <!-- 时间 -->
          <tr v-if="ProjData.time">
            <td class="table-item-title">time</td>
            <td class="table-item-symbol">|</td>
            <td class="table-item-value">
              <span>{{ ProjData.time }}</span>
            </td>
          </tr>

          <!-- 默认展示信息 -->
          <tr v-for="(tag, index) in infoList" :key="name + index">
            <td class="table-item-title">{{ tag }}</td>
            <td class="table-item-symbol">|</td>

            <td class="table-item-value">
              <span
                class="table-item-value-span"
                v-for="(obj, index) in ProjData[tag] || []"
                :key="obj.name + index"
                @click="push(tag, obj._id)"
              >
                {{ obj.name }}
              </span>
            </td>
          </tr>

          <tr class="divider">
            ---
          </tr>
          <!-- 设计师们 -->
          <tr class="dsters color55" v-for="(item, index2) in ProjData.dsters">
            <td class="table-item-title">{{ item.duty }}</td>
            <td class="table-item-symbol">|</td>
            <td class="table-item-value" @click="push('designers', item._id)">
              <span> {{ item.name }}</span>
            </td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.projectsInfo {
  align-self: start;
  top: 10vh;
  @apply w-full   flex flex-col justify-center items-start;
  @apply lg:sticky lg:col-span-1;

  &-title {
    @apply flex justify-start;
    @apply mb-4 lg:mb-10;
    @apply text-3xl lg:text-3xl;
  }

  &-text {
    @apply lg:mb-5 mb-0 text-sm lg:text-base;
    line-height: 180%;
  }

  &-info {
    @apply hidden  overflow-hidden;
    @apply text-base lg:text-lg;
    @apply justify-center items-start;
    @apply lg:flex lg:items-start lg:justify-start;
  }
}

.projectsInfo-info .table {
  table {
    border-collapse: collapse;
    outline: none;
    font-weight: 600;
  }
  tr {
    td {
      vertical-align: top;
      text-indent: 0px;
      text-align: left;
    }
    td:nth-last-child(1) {
      white-space: pre-wrap;
      word-break: break-word;

      span {
        @apply py-1  cursor-pointer mx-1;
      }
    }
  }

  &-item {
    &-symbol {
      vertical-align: center;
      width: 10px;
      @apply px-2;
    }
  }
}

.divider {
  color: transparent;
  visibility: hidden;
}
</style>
