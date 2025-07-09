<template>
  <div class="container py-5 text-white">
    <h2 class="text-info text-center mb-4">Thông tin Thực Tập</h2>

    <!-- ✅ Giới thiệu chung -->
    <div class="mb-5">
      <h4 class="text-primary">📌 Giới thiệu</h4>
      <p>
        Chương trình thực tập tại Pitechlab nhằm tạo cơ hội 
        cho sinh viên tiếp cận với môi trường làm việc thực tế, nâng cao kỹ năng lập trình, làm dự án và phát triển tư duy công nghệ.
      </p>
    </div>

    <!-- ✅ Form đăng ký -->
    <div class="mb-5">
      <h4 class="text-primary">📝 Đăng ký thực tập</h4>
      <form @submit.prevent="handleRegister" class="row g-3">
        <div class="col-md-6">
          <label class="form-label">Họ và tên</label>
          <input v-model="student.name" type="text" class="form-control" required />
        </div>
        <div class="col-md-6">
          <label class="form-label">Email</label>
          <input v-model="student.email" type="email" class="form-control" required />
        </div>
        <div class="col-12">
          <label class="form-label">Đề tài quan tâm</label>
          <select v-model="student.topic" class="form-select" required>
            <option disabled value="">-- Chọn đề tài --</option>
            <option>Website phòng Lab</option>
            <option>AI nhận diện ảnh y tế</option>
            <option>IoT giám sát môi trường</option>
          </select>
        </div>
        <div class="col-12">
          <button type="submit" class="btn btn-success">Gửi đăng ký</button>
        </div>
      </form>
    </div>

    <!-- ✅ Tìm kiếm và lọc -->
    <div class="mb-3 row">
      <div class="col-md-6">
        <input v-model="searchQuery" type="text" class="form-control" placeholder="🔍 Tìm theo tên sinh viên..." />
      </div>
      <div class="col-md-6">
        <select v-model="filterTopic" class="form-select">
          <option value="">-- Tất cả đề tài --</option>
          <option>Website phòng Lab</option>
          <option>AI nhận diện ảnh y tế</option>
          <option>IoT giám sát môi trường</option>
        </select>
      </div>
    </div>

    <!-- ✅ Danh sách sinh viên -->
    <div v-if="filteredRegistrations.length">
      <h4 class="text-primary">📋 Danh sách sinh viên đã đăng ký</h4>
      <table class="table table-dark table-striped">
        <thead>
          <tr>
            <th>STT</th>
            <th>Họ và tên</th>
            <th>Email</th>
            <th>Đề tài</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in filteredRegistrations" :key="index">
            <td>{{ index + 1 }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.email }}</td>
            <td>{{ item.topic }}</td>
            <td>
              <button class="btn btn-sm btn-danger" @click="deleteRegistration(index)">Xóa</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- ✅ Nếu không có dữ liệu -->
    <div v-else class="text-muted text-center">
      Không có sinh viên nào phù hợp.
    </div>
  </div>
</template>

<script>
export default {
  name: 'ThucTap',
  data() {
    return {
      student: {
        name: '',
        email: '',
        topic: ''
      },
      registrations: [],
      searchQuery: '',
      filterTopic: ''
    }
  },
  computed: {
    filteredRegistrations() {
      return this.registrations.filter((item) => {
        const matchName = item.name.toLowerCase().includes(this.searchQuery.toLowerCase());
        const matchTopic = this.filterTopic ? item.topic === this.filterTopic : true;
        return matchName && matchTopic;
      });
    }
  },
  created() {
    const data = localStorage.getItem('internRegistrations');
    if (data) {
      this.registrations = JSON.parse(data);
    }
  },
  methods: {
    handleRegister() {
      const exists = this.registrations.some(
        (r) => r.email === this.student.email && r.topic === this.student.topic
      );
      if (exists) {
        alert('Bạn đã đăng ký đề tài này rồi!');
        return;
      }
      this.registrations.push({ ...this.student });
      localStorage.setItem('internRegistrations', JSON.stringify(this.registrations));
      alert('Đăng ký thành công!');
      this.student = { name: '', email: '', topic: '' };
    },
    deleteRegistration(index) {
      const fullIndex = this.registrations.findIndex(
        item => item.email === this.filteredRegistrations[index].email
      );
      if (fullIndex !== -1) {
        this.registrations.splice(fullIndex, 1);
        localStorage.setItem('internRegistrations', JSON.stringify(this.registrations));
      }
    }
  }
};
</script>

<style scoped>
.table th, .table td {
  vertical-align: middle;
}
</style>
