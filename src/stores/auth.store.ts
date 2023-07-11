import { defineStore } from 'pinia'

//types
import type { AuthI } from '@/types'



const state = () => {
    return {
        idClaim: "",

    }

}
const actions: AuthI = {
    setIdClaim(idClaim: string){
        this.idClaim = idClaim
    }

}

const getters = {
    getIdClaim: ({idClaim}:{idClaim:string}) => idClaim,
    
}


export const authStore = defineStore('auth', {
    state,actions,getters
})
