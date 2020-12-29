import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    components: {

      default:Home,
      'carousel':() => import(/* webpackChunkName: "about" */ '../components/carousel.vue')
    },
    meta:{
      title:"软易IT-首页",
    }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route

    components: {
      default: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
      'carousel':() => import(/* webpackChunkName: "about" */ '../components/carousel.vue')
    },
    meta:{
      title:"软易IT-关于",
    }
  },
  {
    path: '/graduate',
    name: 'graduate',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    components: {
      default: () => import(/* webpackChunkName: "about" */ '../views/graduate.vue'),
      'carousel':() => import(/* webpackChunkName: "about" */ '../components/carousel.vue')
    },
    meta:{
      title:"",
    }
  },
  {
    path: '/schoolBriefIntroduction',
    name: 'schoolBriefIntroduction',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    components: {
      default: () => import(/* webpackChunkName: "about" */ '../views/schoolBriefIntroduction.vue'),
      'carousel':() => import(/* webpackChunkName: "about" */ '../components/carousel.vue')
    },
    meta:{
      title:"软易IT-学校介绍",
    }

  },
  {
    path: '/curriculum',
    name: 'curriculum',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    components: {
      default: () => import(/* webpackChunkName: "about" */ '../views/curriculum.vue'),
      'carousel':() => import(/* webpackChunkName: "about" */ '../components/carousel.vue')
    },
    meta:{
      title:"软易IT-教学课程",
    }
  },
  {
    path: '/features',
    name: 'features',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    components: {
      default: () => import(/* webpackChunkName: "about" */ '../views/features.vue'),
      'carousel':() => import(/* webpackChunkName: "about" */ '../components/carousel.vue')
    },
    meta:{
      title:"软易IT",
    }
  },
  {
    path: '/teacherResourcePower',
    name: 'teacherResourcePower',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    components: {
      default: () => import(/* webpackChunkName: "about" */ '../views/teacherResourcePower.vue'),
      'carousel':() => import(/* webpackChunkName: "about" */ '../components/carousel.vue')
    },
    meta:{
      title:"软易IT",
    }
  },
  {
    path: '/contact',
    name: 'contact',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    components: {
      default: () => import(/* webpackChunkName: "about" */ '../views/contact.vue'),
      'carousel':() => import(/* webpackChunkName: "about" */ '../components/carousel.vue')
    },
    meta:{
      title:"软易IT",
    }
  },
  {
    path: '/recruit',
    name: 'recruit',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    components: {
      default: () => import(/* webpackChunkName: "about" */ '../views/recruit.vue'),
      'carousel':() => import(/* webpackChunkName: "about" */ '../components/carousel.vue')
    },
    meta:{
      title:"软易IT-招生对象",
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

/*router.beforeEach((to, from, next) => {
  console.log(to)


  next();
});*/

export default router
