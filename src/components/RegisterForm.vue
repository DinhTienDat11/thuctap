<template>
  <div class="min-vh-100 d-flex flex-column justify-content-between bg-gradient bg-dark text-white">
    <SiteHeader />

    <main class="flex-grow-1 d-flex justify-content-center align-items-center">
      <div class="bg-white rounded shadow p-4 w-100" style="max-width: 400px;">
        <h2 class="text-center text-dark mb-4">Đăng ký</h2>
        <form @submit.prevent="handleRegister">
          <div class="mb-3">
            <label class="form-label" >Tên đăng nhập</label>
            <input v-model="username" type="text" class="form-control" placeholder="Nhập tên đăng nhập" required />
          </div>
          <div class="mb-3">
            <label class="form-label">Mật khẩu</label>
            <input v-model="password" type="password" class="form-control" placeholder="Nhập mật khẩu" required />
          </div>

          <div v-if="errors.length" class="text-danger small mb-3">
            <ul class="mb-0 ps-3">
              <li v-for="(err, i) in errors" :key="i">{{ err }}</li>
            </ul>
          </div>

          <button type="submit" class="btn btn-primary w-100">Đăng ký</button>

                  <div class="text-center text-muted small mt-3">
          Bạn đã có tài khoản? <a href="#" class="text-decoration-none">Đăng nhập</a><br />
                  </div>
        </form>
      </div>
    </main>

    <SiteFooter />
  </div>
</template>

<script setup>
import SiteHeader from './SiteHeader.vue'
import SiteFooter from './SiteFooter.vue'
import { ref, computed } from 'vue'

const username = ref('')
const password = ref('')

const errors = computed(() => {
  const e = []
  if (password.value.length < 3) e.push('Tối thiểu 3 ký tự.')
  if (!/[a-z]/.test(password.value)) e.push('Phải có chữ cái thường.')
  if (!/[A-Z]/.test(password.value)) e.push('Phải có chữ cái viết hoa.')
  if (!/[0-9]/.test(password.value)) e.push('Phải có số.')
  return e
})

const handleRegister = () => {
  if (errors.value.length > 0) return
  const user = {
    username: username.value,
    password: password.value,
  }
  localStorage.setItem('user', JSON.stringify(user))
  alert('Đăng ký thành công! Hãy chuyển sang đăng nhập.')
  username.value = ''
  password.value = ''
}
</script>
