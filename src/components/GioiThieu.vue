<template>
  <div class="min-vh-100 d-flex flex-column justify-content-between bg-dark text-white">
    <!-- Giới thiệu -->
    <main class="flex-grow-1 container py-5">
      <h2 class="text-center text-info fw-bold mb-4">Giới thiệu về Pitechlab</h2>
      <p><strong>Pitechlab</strong> là phòng nghiên cứu và phát triển trong lĩnh vực Công nghệ Thông tin, trực thuộc Khoa CNTT. Lab được thành lập nhằm tạo môi trường kết nối giữa lý thuyết và thực hành, giữa nghiên cứu và ứng dụng thực tiễn.</p>
      <p>Tại đây, sinh viên có cơ hội làm việc trực tiếp với các giảng viên và chuyên gia trong các lĩnh vực như: trí tuệ nhân tạo, phát triển phần mềm, web, khoa học dữ liệu và chuyển đổi số.</p>
      <p>Với định hướng phát triển bền vững, sáng tạo và chia sẻ tri thức, Pitechlab hướng đến việc xây dựng các sản phẩm có giá trị thực tiễn cao, đồng thời đóng góp tích cực vào công tác đào tạo và nghiên cứu.</p>
      <p>Lab luôn mở cửa chào đón những bạn trẻ có đam mê công nghệ, yêu thích sáng tạo và mong muốn phát triển bản thân.</p>

      <!-- Thành viên -->
      <h3 class="text-center text-info fw-bold mt-5 mb-4">Thành viên của Pitechlab</h3>
      <div class="row g-3">
        <div class="col-md-3 col-sm-6" v-for="(member, index) in members" :key="index">
          <div class="bg-light text-dark rounded p-3 text-center fw-bold">
            {{ member }}
          </div>
        </div>
      </div>
    </main>
    <footer class="bg-black text-center py-3">
      <p class="mb-0">© 2025 Pitechlab. All rights reserved.</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: "GioiThieu",
  data() {
    return {
      members: [
        "Đinh Tiến Đạt (Đạt 1 phít)",
        "Ma Thành Đồng",
        "Phạm Quang Hiếu(L.anh or Minh Ngọc)",
        "Hoàng Đình Lộc",
        "Nguyễn Đức Minh Chiến(Trang)"
      ]
    };
  }
};
</script>

<style scoped>
main p {
  font-size: 1rem;
  line-height: 1.8;
  color: #ddd;
}
</style>
