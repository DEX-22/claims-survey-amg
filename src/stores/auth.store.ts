"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC92MVwvYXV0aFwvbG9naW4iLCJpYXQiOjE2ODY5NzYxMjAsImV4cCI6MTY4Njk3Nzk4MCwibmJmIjoxNjg2OTc2MTIwLCJqdGkiOiIxUHZocWxrc09raUZoTG1VIiwic3ViIjoxLCJwcnYiOiI4N2UwYWYxZWY5ZmQxNTgxMmZkZWM5NzE1M2ExNGUwYjA0NzU0NmFhIn0.dVXyp-eVVzWZnpPCnD3h_CsNe7P_Nb2QlRGZSbITH4Q"



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
    getToken: ({token}:{token:string}) => token,
    
}


export const authStore = defineStore('auth', {
    state,actions,getters
})
