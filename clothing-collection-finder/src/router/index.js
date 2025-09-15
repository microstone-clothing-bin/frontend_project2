import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ShareView from '../views/ShareView.vue'
import FavoritesView from "@/views/FavoritesView.vue";
import GuideView from "@/views/GuideView.vue";
import LoginView from "@/views/LoginView.vue";
import MyPage from "@/views/MyPage.vue";
import WritingView from "@/views/WritingView.vue";
import PostView from "@/views/PostView.vue";

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/share',
        name: 'share',
        component: ShareView
    },
    {
        path: '/share-writing',
        name: 'share-writing',
        component: WritingView
    },
    {
        path: '/share-post',
        name: 'share-post',
        component: PostView
    },
    {
        path: '/favorites',
        name: 'favorites',
        component: FavoritesView
    },
    {
        path: '/guide',
        name: 'guide',
        component: GuideView
    },
    {
        path: '/login',
        name: 'login',
        component: LoginView
    },
    {
        path: '/mypage',
        name: 'mypage',
        component: MyPage
    },
    // 모든 다른 경로를 홈으로 리다이렉트
    {
        path: '/:pathMatch(.*)*',
        redirect: '/'
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router