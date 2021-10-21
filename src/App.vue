<template>
   <div
    class="px-24 w-full"
    :style="`background: url(${require('@/assets/img/bg.png')}) top center`"
   >
   <!-- Landing Section -->
    <div class="flex flex-col gap-8 items-center justify-center h-screen font-sitka text-center h-screen w-full">
      <div class="w-64 md:w-96 logo">
        <img src="./assets/logo.png" alt="">
      </div>
      <div class="coming-soon-text">
        <h1 class="text-4xl md:text-6.5 mb-4">Acala Rancang</h1>
        <h2 class="text-2xl md:text-5xl">‘Asa Ananta’</h2>
      </div>
      <div>
        <i class='bx bx-chevrons-down text-4xl'></i>
      </div>
    </div>
    <!-- /Landing Section -->
    <!-- About Section -->
      <div class="relative pt-36">
        <div class="absolute bottom-1/2 left-1/2 transform -translate-x-1/2 translate-y-1/2">
          <img src="./assets/img/assets1.png" alt="">
        </div>
        <div class="flex font-sitka">
          <div class="flex-1 text-left">
            <h2 class="text-5xl tracking-widest">Acala<br>Rancang</h2>
            <p class="text-base mt-2">“Acala Rancang” merupakan sebuah kegiatan tahunan dari Himpunan Mahasiswa Desain Universitas Brawijaya tepatnya jurusan Desain Interior. Pameran ini berisikan karya-karya tidak hanya dari mahasiswa Desain Interior Universitas Brawijaya, namun juga karya dari semua individu dan kalangan (Nasional)</p>
          </div>
          <div class="flex-1"></div>
        </div>
        <div class="flex font-sitka">
          <div class="flex-1"></div>
          <div class="flex-1 text-right">
            <h2 class="text-5xl tracking-widest">Asa<br>Ananta</h2>
            <p class="text-base mt-2">Acala Rancang 2021 mengambil sebuah tema "ASA ANANTA". Tema ini memiliki makna yaitu harapan untuk mewujudkan hadirnya desain interior yang mendukung penggunanya untuk melakukan beragam aktivitas apapun hingga muncul sebuah istilah tak terbatas.</p>
          </div>
        </div>
        <div class="flex font-sitka">
          <div class="flex-1 text-left">
            <h2 class="text-5xl tracking-widest upperacase">Asa</h2>
            <p class="text-base mt-2">Kepercayaan/harapan akan sesuatu yang diinginkan.</p>
            <h2 class="text-5xl uppercase mt-2">Ananta</h2>
            <p>Diambil dari bahasa sansekerta yang bermakna tak terbatas.</p>
          </div>
          <div class="flex-1"></div>
        </div>
      </div>
    <!-- /About Section -->
    <!-- Main Event -->
      <div class="font-sitka pt-36">
        <h2 class="text-6.5 text-center">Main Event</h2>
        <div class="flex justify-between">
          <div>
            <Card />
          </div>
          <div>
            <Card />
          </div>
          <div>
            <Card />
          </div>
        </div>
      </div>
    <!-- /Main Event -->
  </div>
</template>

<script>
import gsap from 'gsap'
import Card from './components/Card.vue'

export default {
  components: {
    Card
    },
  name: 'App',
  mounted: function() {
    gsap.from('.logo', {
      opacity: 0,
      duration: 1.5,
      y: -100,
      ease: 'Power2.easeInOut',
    })
    gsap.from('.coming-soon-text', {
      opacity: 0,
      duration: 1,
      y: -50,
      delay: 1,
      ease: 'Powe2.easeIn'
    }) 
  }
}

</script>
