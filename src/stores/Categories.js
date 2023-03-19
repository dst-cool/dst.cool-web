import { computed, reactive ,ref} from 'vue'
import { defineStore } from 'pinia'


import { getCategories } from '../../api/index.js'


export const useCategoriesStore = defineStore('Filter', () => {

  const categories = ref(null)
  async function  categoriesInit () {
    const res = await getCategories()
    const list = res.data.data
    categories.value = list
  }
  return { categories, categoriesInit }
})


