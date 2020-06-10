import Vue from 'vue'
import VueRouter from 'vue-router'
import PhotoListing from '../views/PhotoListing'
import PhotoDetails from "../components/PhotoDetails";

Vue.use(VueRouter)

  const routes = [
  {
    path: '/photos',
    name: 'PhotoListing',
    component: PhotoListing,
    children: [
      {
        path: ':id',
        name: 'photoDetails',
        component: PhotoDetails
      }
    ]
  },
  {
    path: '/liked',
    name: 'PhotoLiked',
    component: () => import(/* webpackChunkName: "PhotoLiked" */ '../views/PhotoLiked.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
