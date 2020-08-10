import {BASE_URL} from "./constants.js"



export const routes = {
    getBookData(name){
        return `${BASE_URL}${name}`
    },

    changePage(name,page){
        return `${BASE_URL}${name}&page=${page}`

    },
};


  