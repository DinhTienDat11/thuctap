<template>
  <div class="container py-5 text-white">
    <h2 class="text-info text-center mb-4">Thông tin Thực Tập</h2>

    <!-- Giới thiệu chung -->
    <div class="mb-5">
      <h4 class="text-primary">📌 Giới thiệu</h4>
      <p>
        Chương trình thực tập tại Pitechlab nhằm tạo cơ hội 
        cho sinh viên tiếp cận với môi trường làm việc thực tế, nâng cao kỹ năng lập trình, làm dự án và phát triển tư duy công nghệ.
      </p>
      <h4 class="text-primary">🎯 Đối tượng và yêu cầu</h4>
      <ul>
        <li>Sinh viên năm 3 ,4 ngành CNTT ,ngành khoa học máy tính hoặc các ngành liên quan</li>
        <li>Biết cơ bản(java,js,python,) là một lợi thế </li>
        <li>Có tinh thần học hỏi và làm việc nhóm</li>
      </ul>
      <h4 class="text-primary">🛠️ Nội dung thực tập</h4>
      <ul>
        <li>Tham gia dự án thực tế tại lab</li>
        <li>Được hướng dẫn bởi mentor</li>
        <li>Thực hành: Web, AI, App, Data, v.v.</li>
        <li>Báo cáo định kỳ và trình bày sản phẩm cuối kỳ</li>
      </ul>
      <h4 class="text-primary">🎁 Quyền lợi</h4>
      <ul>
        <li>Giấy chứng nhận thực tập</li>
        <li>Học hỏi từ mentor giàu kinh nghiệm</li>
        <li>Sử dụng sản phẩm làm đồ án</li>
        <li>Cơ hội cộng tác dài hạn với Pitechlab</li>
      </ul>
      <h4 class="text-primary">🕒 Thời gian và hình thức</h4>
      <p>
        Thời gian linh hoạt: 8–12 tuần, có thể online kết hợp offline. Lịch trình được sắp xếp phù hợp với từng nhóm.
      </p>
      <h4>📝 Đăng ký tham gia</h4>
      <div>Điền vào Form đăng kí</div>
      <button @click="Internship" class="btn btn-success mt-2">Đăng ký ngay</button>
      <div>Hoặc liên hệ: <a href="">thuctap@pitechlab.vn</a></div>
    </div>

    <!-- Danh sách đề tài -->
    <div class="mb-5">
      <h4 class="text-primary">Danh sách đề tài</h4>
      <ul class="list-group">
        <li class="list-group-item d-flex justify-content-between align-items-center">
          Xây dựng website giới thiệu phòng Lab (VueJS + Spring Boot)
          <span class="badge bg-success">Đang tuyển</span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center">
          Ứng dụng AI trong nhận diện ảnh y tế
          <span class="badge bg-secondary">Đã đủ</span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center">
          Nghiên cứu triển khai hệ thống IoT theo dõi môi trường
          <span class="badge bg-success">Đang tuyển</span>
        </li>
      </ul>
    </div>

    <!-- Hướng dẫn đăng ký -->
    <div class="mb-5">
      <h4 class="text-primary">Hướng dẫn đăng ký</h4>
      <ol>
        <li>Chọn đề tài bạn quan tâm.</li>
        <li>Liên hệ để được tư vấn cụ thể <strong>pitechlab@gmail.com</strong> hoặc <strong>0123 456 789</strong></li>
        <li>Hoàn thành form đăng ký  (được cung cấp ở bên trên).</li>
      </ol>
    </div>

    <!-- Liên hệ -->
    <div class="text-center">
      <p>📧 Email: pitechlab@gmail.com</p>
      <p>📞 Hotline: 0123 456 789</p>
    </div>
  </div>
</template>

<script>


export default {
  name: 'ThucTap',
  methods: {
    Internship() {
      this.$router.push('/inter')  // Chuyển sang trang đăng ký
    }
  }
}
</script>

<style scoped>
.list-group-item {
  background-color: #1e1e1e;
  color: #fff;
  border-color: #444;
}
</style>
