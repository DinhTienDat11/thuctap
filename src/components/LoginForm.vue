<template>
  <div class="container py-5 text-dark">
    <h2 class="text-center">\u0110\u0103ng nh\u1eadp</h2>
    <form @submit.prevent="handleLogin" class="w-100 mx-auto" style="max-width: 400px">
      <div class="mb-3">
        <label class="form-label">T\u00ean \u0111\u0103ng nh\u1eadp</label>
        <input v-model="username" type="text" class="form-control" required />
      </div>
      <div class="mb-3">
        <label class="form-label">M\u1eadt kh\u1ea9u</label>
        <input v-model="password" type="password" class="form-control" required />
      </div>
      <button type="submit" class="btn btn-success w-100">\u0110\u0103ng nh\u1eadp</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const username = ref('')
const password = ref('')
const router = useRouter()

function handleLogin() {
  const users = JSON.parse(localStorage.getItem('users')) || []
  const found = users.find(u => u.username === username.value && u.password === password.value)

  if (found) {
    localStorage.setItem('currentUser', JSON.stringify(found))
    alert('Đăng nhập thành công!')
    router.push('/user')
  } else {
    alert('Sai tài khoản hoặc mật khẩu?')
  }
}
</script>