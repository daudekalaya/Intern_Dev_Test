<template>
  <header class="bg-forestGreen text-white py-4 px-4 lg:px-20">
    <div class="container mx-auto flex justify-between items-center">
      <img src="/img/logo.png" alt="Logo UMKM" class="w-24 lg:w-40">
      <!-- Navigasi untuk tampilan desktop -->
      <nav class="hidden lg:flex">
        <ul class="flex">
          <li class="mr-4 list-none">
            <router-link to="/" class="hover:text-gray-300 text-sm font-semibold transition-colors duration-300 ease-in-out">Home</router-link>
          </li>
          <li class="mr-4 list-none">
            <a v-if="!isAboutPage()" href="#" class="scroll-link hover:text-gray-300 text-sm font-semibold transition-colors duration-300 ease-in-out" data-target="produk">Produk</a>
          </li>
          <li class="mr-4 list-none">
            <router-link v-if="!isAboutPage()" to="/about" class="hover:text-gray-300 text-sm font-semibold transition-colors duration-300 ease-in-out">Tentang Kami</router-link>
          </li>
          <li class="list-none">
            <a v-if="!isAboutPage()" href="#" class="scroll-link hover:text-gray-300 text-sm font-semibold transition-colors duration-300 ease-in-out" data-target="kontak">Kontak</a>
          </li>
        </ul>
      </nav>
      <!-- Navigasi untuk tampilan mobile -->
      <button @click="toggleMenu" class="block lg:hidden focus:outline-none">
        <svg v-if="!isMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
        <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
    </div>
    <!-- Navigasi untuk tampilan mobile -->
    <nav :class="{ 'hidden': !isMenuOpen }" class="lg:hidden absolute inset-x-0 top-0 bg-forestGreen z-20 p-4">
      <button @click="toggleMenu" class="focus:outline-none mb-4">
        <svg class="w-6 h-6 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
      <ul class="flex flex-col">
        <li class="mb-4">
          <router-link to="/" class="hover:text-gray-300 text-sm font-semibold transition-colors duration-300 ease-in-out">Home</router-link>
        </li>
        <li class="mb-4 list-none">
            <a v-if="!isAboutPage()" href="#" class="hover:text-gray-300 text-sm font-semibold transition-colors duration-300 ease-in-out">Produk</a>
        </li>
        <li class="mb-4">
          <router-link v-if="!isAboutPage()" to="/about" class="hover:text-gray-300 text-sm font-semibold transition-colors duration-300 ease-in-out">Tentang Kami</router-link>
        </li>
        <li>
          <a v-if="!isAboutPage()" href="#" class="hover:text-gray-300 text-sm font-semibold transition-colors duration-300 ease-in-out">Kontak</a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'HeaderComponent',
  data() {
    return {
      isMenuOpen: false
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
      if (this.isMenuOpen) {
        document.body.style.overflowY = 'hidden';
      } else {
        document.body.style.overflowY = 'auto';
      }
    },
    isAboutPage() {
      return this.$route.path === '/about';
    }
  }
}
</script>
