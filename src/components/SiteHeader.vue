<template>
  <header class="bg-black text-white px-4 py-3 d-flex justify-content-between align-items-center">
    <h1 class="text-info fs-4 fw-bold m-0">Pitechlab</h1>
    <nav class="d-flex align-items-center gap-3">
      <router-link v-for="(item, index) in menuItems" :key="index" :to="item.to" class="text-white text-decoration-none">
        {{ item.name }}
      </router-link>
      <div v-if="currentUser" class="dropdown position-relative">
        <img :src="currentUser.avatar || defaultAvatar" class="rounded-circle" style="width: 36px; height: 36px; object-fit: cover; cursor: pointer;" @click="toggleDropdown" />
        <div v-if="dropdownOpen" class="dropdown-menu show position-absolute mt-2" style="right: 0;">
          <router-link to="/user" class="dropdown-item">Trang cá nhân</router-link>
          <button class="dropdown-item text-danger" @click="logout">Đăng xuất</button>
        </div>
      </div>
      <router-link v-else to="/dangnhap" class="text-info text-decoration-none fw-bold">Đăng nhập</router-link>
    </nav>
  </header>
</template>

<script>
import { ref, onMounted } from 'vue'

export default {
  name: 'SiteHeader',
  setup() {
    const currentUser = ref(null)
    const dropdownOpen = ref(false)
    const defaultAvatar = '/default-avatar.png'

    const menuItems = [
      { name: 'Trang chủ', to: '/' },
      { name: 'giới thiệu', to: '/gioi-thieu' },
      { name: 'Thực tập', to: '/thuc-tap' },
      { name: 'Bài giảng', to: '/bai-giang' },
      { name: 'Nghiên cứu', to: '/nghien-cuu' },
      { name: 'Sản phẩm', to: '/san-pham' },
      { name: 'Sự kiện', to: '/su-kien' }
    ]

    const loadUser = () => {
      const data = localStorage.getItem('currentUser')
      if (data) currentUser.value = JSON.parse(data)
    }

    const logout = () => {
      localStorage.removeItem('currentUser')
      currentUser.value = null
      location.href = '/dangnhap'
    }

    const toggleDropdown = () => {
      dropdownOpen.value = !dropdownOpen.value
    }

    onMounted(loadUser)

    return {
      menuItems,
      currentUser,
      defaultAvatar,
      dropdownOpen,
      toggleDropdown,
      logout
    }
  }
}
</script>

<style scoped>
.dropdown-menu {
  background: #222;
  border: 1px solid #444;
  border-radius: 6px;
  padding: 0.5rem;
  min-width: 160px;
  z-index: 999;
}
.dropdown-item {
  color: white;
  padding: 0.5rem 1rem;
  text-decoration: none;
}
.dropdown-item:hover {
  background-color: #333;
}
</style>