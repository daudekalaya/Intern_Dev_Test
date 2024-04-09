<template>
  <div>
    <HeaderComponent />
    
    <!-- Banner Promosi -->
    <section class="bg-goldenyellow text-white py-8 flex items-center justify-center">
      <div class="container mx-auto flex flex-col lg:flex-row items-center justify-center">
        <!-- Konten teks -->
        <div class="text-center lg:text-left lg:mr-8">
          <h2 class="text-3xl lg:text-5xl font-bold text-deepBlack mb-4">Promo Spesial!</h2>
          <p class="text-lg lg:text-2xl text-darkKhaki mb-6">Dapatkan diskon 20% untuk pembelian di atas 50K!</p>
          <button class="bg-forestGreen text-white font-semibold px-6 py-3 rounded-lg hover:bg-freshGreen hover:text-deepBlack transition duration-300 ease-in-out">Pesan Sekarang</button>
        </div>
        <img src="/img/baso-banner.png" class="w-80 h-80 lg:w-96 lg:h-96 mb-8 lg:mb-0" alt="Promo Image">
      </div>
    </section>

    <!-- Produk Terbaik -->
    <section id="produk" class="py-8 bg-white mx-4 lg:mx-20 my-8">
      <div class="container mx-auto">
        <h2 class="text-3xl font-bold mb-8 text-center">Produk Terbaik</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <!-- Produk 1 -->
          <div class="bg-white p-4 transform transition duration-300 hover:scale-105 relative">
            <img src="/img/baso-spesial.png" alt="Produk 1" class="w-full h-auto">
            <span class="absolute top-2 right-2 bg-goldenyellow text-white py-1 px-2 rounded-lg text-xs font-semibold tracking-wider">Best Seller</span>
            <p class="font-semibold text-lg text-center mt-2">Baso Spesial</p>
          </div>
          <!-- Produk 2 -->
          <div class="bg-white p-4 transform transition duration-300 hover:scale-105 relative">
            <img src="/img/baso-mercon.png" alt="Produk 2" class="w-full h-auto">
            <span class="absolute top-2 right-2 bg-customBlue text-white py-1 px-2 rounded-lg text-xs font-semibold tracking-wider">Limited Edition</span>
            <p class="font-semibold text-lg text-center mt-2">Baso Mercon</p>
          </div>
          <!-- Produk 3 -->
          <div class="bg-white p-4 transform transition duration-300 hover:scale-105 relative">
            <img src="/img/baso-urat.png" alt="Produk 3" class="w-full h-auto">
            <span class="absolute top-2 right-2 bg-forestGreen text-white py-1 px-2 rounded-lg text-xs font-semibold tracking-wider">New Arrival</span>
            <p class="font-semibold text-lg text-center mt-2">Baso Urat</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimoni Pelanggan -->
    <section class="bg-white py-8 mx-4 lg:mx-20 my-8">
      <div class="container mx-auto">
        <h2 class="text-3xl font-bold mb-8 text-center">Testimoni Pelanggan</h2>
        <!-- Daftar testimoni -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transform transition duration-300 hover:scale-105">
            <div class="flex items-center mb-4">
              <img src="/img/customer-1.png" alt="Customer 1" class="w-12 h-12 rounded-full mr-4">
              <div>
                <p class="text-lg font-semibold">Lilis Geulis</p>
                <p class="text-darkKhaki">Influencer</p>
              </div>
            </div>
            <p class="text-lg leading-relaxed">"Pelayanan dari Hayang Baso ini sungguh luar biasa! Produk-produk mereka berkualitas tinggi dan harganya sangat terjangkau. Saya sangat puas dengan pembelian saya."</p>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transform transition duration-300 hover:scale-105">
            <div class="flex items-center mb-4">
              <img src="/img/customer-2.png" alt="Customer 2" class="w-12 h-12 rounded-full mr-4">
              <div>
                <p class="text-lg font-semibold">Asep Kasep</p>
                <p class="text-darkKhaki">Influencer</p>
              </div>
            </div>
            <p class="text-lg leading-relaxed">"Produk yang saya beli dari Hayang Baso ini sangat memuaskan! Kualitasnya tidak diragukan lagi dan layanannya sangat ramah. Sangat direkomendasikan!"</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Cabang -->
    <section class="py-8 bg-white mx-4 lg:mx-20 my-8">
      <div class="container mx-auto">
        <h2 class="text-3xl font-bold mb-8 text-center">Cabang</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <!-- Cabang 1 -->
          <div class="bg-forestGreen rounded-lg p-6 flex flex-col items-center justify-center text-center transform transition duration-300 hover:scale-105 hover:shadow-lg">
            <h3 class="text-xl font-semibold mb-2">Ciamis</h3>
            <p class="text-base mb-2"><span class="font-semibold">Alamat:</span> Jl. Contoh No. 123, Kab Ciamis</p>
            <p class="text-base mb-2"><span class="font-semibold">Telepon:</span> (123) 456-7890</p>
            <p class="text-base mb-2"><span class="font-semibold">Email:</span> <cite></cite>cabanga@example.com</p>
            <a href="link_peta_cabang_a" class="text-deepBlack font-semibold bg-goldenyellow rounded-lg px-4 py-2 mt-4 hover:bg-vanillaCream transition duration-300">Kunjungi Cabang</a>
          </div>
          <!-- Cabang 2 -->
          <div class="bg-forestGreen rounded-lg p-6 flex flex-col items-center justify-center text-center transform transition duration-300 hover:scale-105 hover:shadow-lg">
            <h3 class="text-xl font-semibold mb-2">Tasikmalaya</h3>
            <p class="text-base mb-2"><span class="font-semibold">Alamat:</span> Jl. Contoh No. 456, Kota Tasikmalaya</p>
            <p class="text-base mb-2"><span class="font-semibold">Telepon:</span> (123) 456-7890</p>
            <p class="text-base mb-2"><span class="font-semibold">Email:</span> <cite></cite>cabangb@example.com</p>
            <a href="link_peta_cabang_b" class="text-deepBlack font-semibold bg-goldenyellow rounded-lg px-4 py-2 mt-4 hover:bg-vanillaCream transition duration-300">Kunjungi Cabang</a>
          </div>
          <!-- Cabang 3 -->
          <div class="bg-forestGreen rounded-lg p-6 flex flex-col items-center justify-center text-center transform transition duration-300 hover:scale-105 hover:shadow-lg">
            <h3 class="text-xl font-semibold mb-2">Bandung</h3>
            <p class="text-base mb-2"><span class="font-semibold">Alamat:</span> Jl. Contoh No. 789, Kota Bandung</p>
            <p class="text-base mb-2"><span class="font-semibold">Telepon:</span> (123) 456-7890</p>
            <p class="text-base mb-2"><span class="font-semibold">Email:</span> cabangc@example.com</p>
            <a href="link_peta_cabang_c" class="text-deepBlack font-semibold bg-goldenyellow rounded-lg px-4 py-2 mt-4 hover:bg-vanillaCream transition duration-300">Kunjungi Cabang</a>
          </div>
        </div>
      </div>
    </section>

    <!-- Formulir Kontak -->
    <section id="kontak" class="bg-white py-8 mx-4 lg:mx-20 my-8">
      <div class="container mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div class="border border-gray-300 rounded-md p-6">
          <h2 class="text-3xl font-bold mb-4">Hubungi Kami</h2>
          <form>
            <div class="grid grid-cols-2 gap-6">
              <input type="text" class="border-gray-400 border p-2 rounded-md focus:outline-none focus:border-forestGreen" placeholder="Nama Anda">
              <input type="email" class="border-gray-400 border p-2 rounded-md focus:outline-none focus:border-forestGreen" placeholder="Email Anda">
            </div>
            <textarea class="border-gray-400 border p-2 rounded-md mt-4 w-full focus:outline-none focus:border-forestGreen" rows="4" placeholder="Pesan Anda"></textarea>
            <button type="submit" class="bg-forestGreen text-white font-semibold px-6 py-3 mt-4 rounded-lg hover:bg-freshGreen hover:text-deepBlack transition duration-300 ease-in-out">Kirim Pesan</button>
          </form>
        </div>
        <!-- Informasi kontak -->
        <div class="">
          <div class=" mb-4 p-3 rounded-md">
            <h2 class="text-3xl font-bold mb-2">Informasi Kontak</h2>
          </div>
          <div class="border border-gray-300 mb-4 p-3 rounded-md">
            <img src="/img/logo.png" alt="Logo Hayang Baso" class="w-32">
          </div>
          <div class="border border-gray-300 mb-4 p-3 rounded-md">
            <p class="text-base">Alamat: Jl. Contoh No. 123, Kota Pusat</p>
          </div>
          <div class="border border-gray-300 mb-4 p-3 rounded-md">
            <p class="text-base">Telepon: (123) 456-7890</p>
          </div>
          <div class="border border-gray-300 p-3 rounded-md">
            <p clas3="text-base">Email: pusat@example.com</p>
          </div>
        </div>
      </div>
    </section>

    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from './Header.vue';
import FooterComponent from './Footer.vue';

export default {
  name: 'HomePage',
  components: {
    HeaderComponent,
    FooterComponent
  },
  mounted() {
    this.addScrollEvent();
  },
  methods: {
    addScrollEvent() {
      const scrollLinks = document.querySelectorAll('.scroll-link');
      
      scrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
          e.preventDefault();
          const targetId = this.getAttribute('data-target');
          const targetElement = document.getElementById(targetId);
          targetElement.scrollIntoView({ behavior: 'smooth' });
        });
      });
    }
  }
}
</script>
