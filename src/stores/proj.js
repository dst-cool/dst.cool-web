import { ref, reactive, computed } from 'vue'
import { defineStore } from 'pinia'
import { getProjects } from '../../api/index.js'
import { useCategoriesStore } from './Categories'

export const useProjStore = defineStore('projStore', () => {


  const List = ref(null)
  const ListClone = ref(null)
  const ProjData = ref(null)

  const SearchKeyWord = ref(null)

  const resetList = () => {
    ListClone.value = List.value
  }

  async function projectsInit() {
    const res = await getProjects()
    const data = res.data.data
    List.value = data
    ListClone.value = data

  }

  async function isFirstLoading() {
    if (ListClone.value == null) {
      const { categoriesInit } = useCategoriesStore()
      await projectsInit()
      await categoriesInit()
    } else {
      return false
    }
  }



  function searchBycategory(id) {
    const filted = List.value.filter((e) => {
      if (e.category == null) {
        return false
      }
      if (e.category._id == id) {
        return true

      }
      return false
    })

    ListClone.value = filted


  }


  function searchByTag(id) {
    console.log(`run serachByTag`)
    const filted = List.value.filter((e) => {
      const clientsType = e.clientsType
      const service = e.service

      const all = [...clientsType, ...service]


      let isIN = all.find(e => {
        if( e._id == id){  
          SearchKeyWord.value = e.name
        }
        return e._id == id
      })
   
      return isIN
    })

    ListClone.value = filted
  }


  function searchByClient(id) {
    console.log(`run searchByClient`)
    const filted = List.value.filter((e) => {
      const clients = e.clients


      let isIN = clients.find(e => {
        if( e._id == id){  
          SearchKeyWord.value = e.name
        }
        return e._id == id
      })
  
      return isIN
    })

    ListClone.value = filted
  }

  function searchByDesigners(id) {
    console.log(`run searchByDesigners`)
    const filted = List.value.filter((e) => {
      const dsters = e.dsters
      let isIN = dsters.find(e => {
  
        if( e._id == id){  
          SearchKeyWord.value = e.name
        }

        return e._id == id
      })
     
      return isIN
    })

    ListClone.value = filted
  }



  function getProjDataById(id) {
    ProjData.value = ListClone.value.filter((e) => {
      if (e._id == id) {
        return true
      }
      return false
    })[0]
  }









  return {
    List,
    ListClone,
    projectsInit,
    searchBycategory,
    isFirstLoading,
    resetList,
    searchByTag,
    getProjDataById,
    searchByClient,
    searchByDesigners,
    SearchKeyWord,
    ProjData
  }
})
