import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './routes';
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)
Vue.use(VueRouter)

Vue.config.productionTip = false

const router = new VueRouter({routes});

router.beforeEach((to, from, next) => { 
  if (to.matched.some(record => record.meta.logout)) { 
      if (localStorage.getItem('loginStatus')) { 
          localStorage.clear();
          next();
      } else { 
          next({ path: '/'}) 
      } 
  }
  else { 
      next()
  } 
}) 

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

