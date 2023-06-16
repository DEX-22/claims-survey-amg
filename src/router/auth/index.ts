import Auth from "@/views/auth/Auth.vue"

export default {
    path: '/auth/:id',
    name: 'auth',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Auth
  }