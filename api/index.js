import req from "./request";


const getCategories = () => {

    return req.get('/web/categories')
}

const getProjects = () => {
    return req.get('/web/projects')
}







export { getCategories,getProjects }