<template>
  <div class="min-vh-100 d-flex flex-column justify-content-between bg-dark text-white">
    <main class="container py-5">
      <div v-if="user && !editing" class="text-center">
        <img :src="user.avatar" class="rounded-circle mb-4" style="width: 150px; height: 150px; object-fit: cover;" />
        <h2 class="text-info">{{ user.username }}</h2>
        <p>{{ user.email }}</p>

        <div class="mt-4 text-start mx-auto" style="max-width: 600px;">
          <h5 class="text-info">Kĩ năng</h5>
          <ul>
            <li v-for="(skill, index) in user.skills" :key="index">{{ skill }}</li>
            <li v-if="user.skills.length === 0" class="text-muted">vue</li>
          </ul>
        </div>

        <div class="mt-3 d-flex justify-content-center gap-3">
          <button class="btn btn-outline-info" @click="editing = true">Chỉnh sửa</button>
          <button class="btn btn-outline-danger" @click="logout">Đăng xuất</button>
        </div>
      </div>

      <div v-else-if="editing" class="mx-auto" style="max-width: 500px;">
        <h4 class="text-info mb-3">Chỉnh sửa thông tin cá nhân</h4>
        <form @submit.prevent="saveChanges">
          <div class="mb-3">
            <label class="form-label">Tên đăng nhập</label>
            <input v-model="editData.username" type="text" class="form-control" required />
          </div>
          <div class="mb-3">
            <label class="form-label">Email</label>
            <input v-model="editData.email" type="email" class="form-control" required />
          </div>
          <div class="mb-3">
            <label class="form-label">\u1ea2nh \u0111\u1ea1i di\u1ec7n (link)</label>
            <input v-model="editData.avatar" type="text" class="form-control" />
          </div>
          <div class="mb-3">
            <label class="form-label">Kĩ năng</label>
            <input v-model="skillsInput" type="text" class="form-control" />
          </div>
          <div class="d-flex justify-content-between">
            <button type="submit" class="btn btn-success">Lưu</button>
            <button @click="cancelEdit" class="btn btn-secondary">Đăng xuất</button>
          </div>
        </form>
      </div>

      <div v-else class="text-center">
        <h4 class="text-danger">B\u1ea1n ch\u01b0a \u0111\u0103ng nh\u1eadp!</h4>
        <router-link to="/dangnhap" class="btn btn-info mt-3">Đăng nhập ngay</router-link>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'UserProfile',
  data() {
    return {
      user: null,
      editing: false,
      editData: {},
      skillsInput: ''
    }
  },
  created() {
    const currentUser = localStorage.getItem('currentUser')
    if (currentUser) {
      this.user = JSON.parse(currentUser)
    }
  },
  methods: {
    logout() {
      localStorage.removeItem('currentUser')
      this.user = null
      this.editing = false
      this.$router.push('/dangnhap')
    },
    cancelEdit() {
      this.editing = false
    },
    saveChanges() {
      this.user = {
        ...this.editData,
        skills: this.skillsInput.split(',').map(s => s.trim()).filter(Boolean)
      }
      const users = JSON.parse(localStorage.getItem('users')) || []
      const updated = users.map(u =>
        u.username === this.user.username ? this.user : u
      )
      localStorage.setItem('users', JSON.stringify(updated))
      localStorage.setItem('currentUser', JSON.stringify(this.user))
      this.editing = false
      alert('C\u1eadp nh\u1eadt th\u00e0nh c\u00f4ng!')
    }
  },
  watch: {
    editing(val) {
      if (val && this.user) {
        this.editData = { ...this.user }
        this.skillsInput = this.user.skills.join(', ')
      }
    }
  }
}
</script>