<template>
  <div>
    <header class="bg-black text-white px-4 py-3 d-flex justify-content-between align-items-center">
      <h1 class="text-info fs-4 fw-bold m-0">Pitechlab</h1>
      <nav class="d-flex gap-3">
        <router-link to="/" class="text-white text-decoration-none hover-underline">Trang chủ</router-link>
        <router-link to="/gioi-thieu" class="text-white text-decoration-none hover-underline">Giới thiệu</router-link>
        <router-link to="/thuc-tap" class="text-white text-decoration-none hover-underline">Thực tập</router-link>
        <router-link to="/bai-giang" class="text-white text-decoration-none hover-underline">Bài giảng</router-link>
        <router-link to="/nghien-cuu" class="text-white text-decoration-none hover-underline">Nghiên cứu</router-link>
        <router-link to="/san-pham" class="text-white text-decoration-none hover-underline">Sản phẩm</router-link>
        <router-link to="/su-kien" class="text-white text-decoration-none hover-underline">Sự kiện</router-link>
        <router-link to="/dangnhap" class="text-info fw-semibold text-decoration-none">Đăng nhập</router-link>
      </nav>
    </header>
  </div>
</template>

<script>
export default {
  name: "SiteHeader"
}
</script>
