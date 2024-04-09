<template>
  <div>
    <HeaderComponent />
    
    <div class="bg-white">
      <div class="container mx-auto py-20 px-4 lg:px-20">
        <h1 class="text-4xl font-bold text-center text-deepBlack mb-6">Tentang Kami</h1>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center justify-center">
          <div>
            <img src="/img/about.png" alt="Tentang Kami" class="w-full h-auto rounded-lg shadow-lg">
          </div>
          <div class="text-darkKhaki">
            <p class="text-lg mb-4">Hayang Baso adalah restoran baso yang telah berdiri sejak tahun 2000. Kami terkenal dengan baso-baso berkualitas tinggi yang disajikan dengan berbagai pilihan kuah dan topping.</p>
            <p class="text-lg mb-4">Kami selalu berusaha untuk menyajikan produk berkualitas terbaik kepada pelanggan kami. Semua baso kami dibuat menggunakan bahan-bahan segar dan berkualitas, serta proses pembuatan yang higienis dan terjamin kebersihannya.</p>
            <p class="text-lg">Kami berkomitmen untuk memberikan pengalaman kuliner yang memuaskan bagi setiap pelanggan kami. Terima kasih atas dukungan dan kepercayaan Anda kepada Hayang Baso!</p>
          </div>
        </div>
      </div>
    </div>

    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from './Header.vue';
import FooterComponent from './Footer.vue';

export default {
  name: 'AboutUs',
  components: {
    HeaderComponent,
    FooterComponent
  }
}
</script>
