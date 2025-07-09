<template>
  <div class="container py-5 text-dark">
    <h2 class="text-center">\u0110\u0103ng k\u00fd</h2>
    <form @submit.prevent="handleRegister" class="w-100 mx-auto" style="max-width: 400px">
      <div class="mb-3">
        <label class="form-label">T\u00ean \u0111\u0103ng nh\u1eadp</label>
        <input v-model="username" type="text" class="form-control" required />
      </div>
      <div class="mb-3">
        <label class="form-label">M\u1eadt kh\u1ea9u</label>
        <input v-model="password" type="password" class="form-control" required />
      </div>
      <button type="submit" class="btn btn-primary w-100">\u0110\u0103ng k\u00fd</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const username = ref('')
const password = ref('' )
const router = useRouter()

function handleRegister() {
  const user = {
    username: username.value,
    password: password.value,
    email: username.value + '@example.com',
    avatar: 'https://i.pravatar.cc/150?u=' + username.value,
    skills: []
  }
  const users = JSON.parse(localStorage.getItem('users')) || []
  users.push(user)
  localStorage.setItem('users', JSON.stringify(users))
  localStorage.setItem('currentUser', JSON.stringify(user))
  alert('Đăng kí thành công!')
  router.push('/user')
}
</script>