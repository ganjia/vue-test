import Vue from 'vue'
import VueRouter from 'vue-router'
//注册
Vue.use(VueRouter)
    // 引入对应的路由组件
import Home from "./components/tabbar/HomeContainer";
import Member from "./components/tabbar/MemberContainer";
import Search from "./components/tabbar/SearchContainer";
import Shopcart from "./components/tabbar/ShopcartContainer";
import NewsList from "./components/news/NewsList";
import NewsInfo from "./components/news/NewsInfo";
const router = new VueRouter({
    routes: [
        { path: '/', redirect: '/home' },
        { path: '/home', component: Home },
        { path: '/member', component: Member },
        { path: '/search', component: Search },
        { path: '/shopcart', component: Shopcart },
        { path: '/home/newslist', component: NewsList },
        { path: '/home/newsinfo/:id', component: NewsInfo },
    ],
    linkActiveClass: "mui-active" //覆盖默认的样式，router-link-active
})


export default router