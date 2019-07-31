import Home from './components/Home.vue';
import Register from './components/Register.vue';
import Login from './components/Login.vue';
import About from './components/About.vue';
import ProductsList from './components/ProductsList.vue';
import Logout from './components/Logout.vue';
const routes = [
    { path: '/', component: Home },
    { path: '/register', component: Register, meta:{guest:true} },
    { path: '/login', component: Login, meta:{guest:true}},
    { path: '/about', component: About, meta:{guest:true} },
    { path: '/products', component: ProductsList, meta:{authenticated:true} },
    { path: '/logout', component: Logout, meta:{logout:true} },
];

export default routes;