import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../components/HomePage.vue'
import DangNhap from '../components/LoginForm.vue'

import GioiThieu from '../components/GioiThieu.vue'
import ThucTap from '../components/ThucTap.vue'
import BaiGiang from '../components/Baigiang.vue'
import NghienCuu from '../components/Nghiencuu.vue'
import SanPham from '../components/SanPham.vue'
import SuKien from '../components/Sukien.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/dangnhap', component: DangNhap },
  { path: '/gioi-thieu', component: GioiThieu },
  { path: '/thuc-tap', component: ThucTap },
  { path: '/bai-giang', component: BaiGiang },
  { path: '/nghien-cuu', component: NghienCuu },
  { path: '/san-pham', component: SanPham },
  { path: '/su-kien', component: SuKien }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
