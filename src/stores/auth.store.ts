import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

//types
import type { AuthI } from '@/types'



const state = () => {
    return {
        token: "",

    }

}
const actions: AuthI = {
    setToken(token: string){
        this.token = token
    }

}

const getters = {
    isLogged: ({token}:{token:string}) => !!token,
    
}


export const authStore = defineStore('auth', {
    state,actions,getters
})
