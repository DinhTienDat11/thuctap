<template>
  <div class="min-vh-100 d-flex flex-column justify-content-between bg-dark text-white">

    <main class="flex-grow-1 d-flex justify-content-center align-items-center">
      <div class="bg-white rounded shadow p-4 w-100" style="max-width: 400px;">
        <h2 class="text-center text-dark mb-4">Đăng nhập</h2>
        <form @submit.prevent="handleLogin">
          <div class="mb-3">
            <label class="form-label">Tên đăng nhập</label>
            <input v-model="username" type="text" class="form-control" placeholder="Nhập tên đăng nhập" required />
          </div>
          <div class="mb-3">
            <label class="form-label">Mật khẩu</label>
            <input v-model="password" type="password" class="form-control" placeholder="Nhập mật khẩu" required />
          </div>
          <button type="submit" class="btn btn-primary w-100">Đăng nhập</button>
        </form>
        <div class="text-center text-muted small mt-3">
          Bạn chưa có tài khoản? <a href="" class="text-decoration-none">Đăng kí</a><br />
          <a href="#" class="text-decoration-none">Quên mật khẩu?</a>
        </div>
      </div>
    </main>

  </div>
</template>

<script setup>
import { ref } from 'vue'

const username = ref('')
const password = ref('')

const handleLogin = () => {
  const saved = JSON.parse(localStorage.getItem('user'))
  if (saved && saved.username === username.value && saved.password === password.value) {
    alert('Đăng nhập thành công!')
  } else {
    alert('Sai tên đăng nhập hoặc mật khẩu!')
  }
}
</script>
