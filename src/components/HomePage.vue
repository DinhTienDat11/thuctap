<template>
  <div class="bg-dark text-white min-vh-100 d-flex flex-column">
    <!-- Header -->

    <!-- Nội dung chính -->
    <main class="flex-grow-1 container py-5">
      <div class="text-center mb-5">
        <h1 class="text-info">Chào mừng đến với Pitechlab</h1>
        <p class="lead">
          Chúng tôi là phòng nghiên cứu và phát triển công nghệ thông tin, nơi kết nối tri thức và sáng tạo.
        </p>
      </div>

      <div class="row text-center">
        <div class="col-md-4 mb-4">
          <div class="card h-100 shadow">
            <div class="card-body">
              <h5 class="card-title">Thực tập</h5>
              <p class="card-text">Cơ hội thực tập với các dự án thực tế dành cho sinh viên.</p>
            </div>
          </div>
        </div>
        <div class="col-md-4 mb-4">
          <div class="card h-100 shadow">
            <div class="card-body">
              <h5 class="card-title">Nghiên cứu</h5>
              <p class="card-text">Tham gia vào các dự án nghiên cứu khoa học và công nghệ mới nhất.</p>
            </div>
          </div>
        </div>
        <div class="col-md-4 mb-4">
          <div class="card h-100 shadow">
            <div class="card-body">
              <h5 class="card-title">Sự kiện</h5>
              <p class="card-text">Tham dự các hội thảo, cuộc thi, và sự kiện chuyên ngành.</p>
            </div>
          </div>
        </div>
      </div>
    </main>

    <!-- Footer -->
  </div>
</template>

<script>

export default {
  name: 'HomePage',

}
</script>

<style scoped>
.card {
  background-color: #f8f9fa;
  color: #212529;
}
</style>
