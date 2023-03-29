<script setup>
import { storeToRefs } from 'pinia';
import { computed, ref, reactive, onBeforeMount } from 'vue';
import { useRoute, useRouter } from "vue-router";

import { useProjStore } from "../stores/proj";
const router = useRouter()

const infoList = ref(["clients", "clientsType", "service"])
const { ProjData } = storeToRefs(useProjStore())

const { searchByTag } = useProjStore()


const route = useRoute()



const push = (key, Id) => {
    console.log(Id)
    if (key == "clients") { router.push({ path: `/clients`, query: { "clientId": Id } }) }
    if (key == "clientsType" || key == "service") { router.push({ path: `/tag`, query: { "tagId": Id } }) }
    if (key == "designers") { router.push({ path: `/designers`, query: { "designerId": Id } }) }
}




</script>

<template>
    <div v-if="ProjData" class="lg:col-span-1  proj-info flex flex-col justify-center items-start     lg:hidden   ">







        <div
            class=" text-black55 dark:text-white55 proj-info-other flex justify-center items-start lg:items-start lg:justify-start text-base lg:text-lg">
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
          <tr class="divider"></tr>
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