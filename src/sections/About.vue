<template>
  <!-- About Section -->
    <div class="flex flex-col gap-4 relative pt-12 md:pt-36 px-12 lg:px-16 xl:px-24">
      <div class="absolute bottom-1/2 left-1/2 transform -translate-x-1/2 translate-y-1/2">
        <img src="../assets/img/assets1.png" alt="" class="about-img">
      </div>

      <div class="flex font-sitka">
        <div class="flex flex-col gap-1 flex-2 lg:flex-1 text-left pr-0 md:pr-24 lg:pr-0 acala-rancang">
          <h2 class="text-2xl md:text-4xl lg:text-5xl tracking-widest text-after">Acala<br>Rancang</h2>
          <p class="text-xs md:text-base">“Acala Rancang” merupakan sebuah kegiatan tahunan dari Himpunan Mahasiswa Desain Universitas Brawijaya tepatnya jurusan Desain Interior. Pameran ini berisikan karya-karya tidak hanya dari mahasiswa Desain Interior Universitas Brawijaya, namun juga karya dari semua individu dan kalangan (Nasional)</p>
        </div>

        <div class="flex-1"></div>
      </div>

      <div class="flex font-sitka">
        <div class="flex-1"></div>

        <div class="flex flex-col gap-1 flex-2 lg:flex-1  text-right pl-0 md:pl-24 lg:pl-0 asa-ananta">
          <h2 class="text-2xl md:text-4xl lg:text-5xl tracking-widest text-before">Asa <br> Ananta</h2>
          <p class="text-xs md:text-base">Acala Rancang 2021 mengambil sebuah tema "ASA ANANTA". Tema ini memiliki makna yaitu harapan untuk mewujudkan hadirnya desain interior yang mendukung penggunanya untuk melakukan beragam aktivitas apapun hingga muncul sebuah istilah tak terbatas.</p>
        </div>
      </div>

      <div class="flex font-sitka">
        <div class="flex-2 lg:flex-1 text-left asa-x-ananta">
          <h2 class="text-2xl md:text-4xl lg:text-5xl tracking-widest uppercase">Asa</h2>
          <p class="text-xs md:text-base">Kepercayaan/harapan akan sesuatu yang diinginkan.</p>
          <h2 class="text-2xl md:text-4xl lg:text-5xl uppercase mt-2">Ananta</h2>
          <p class="text-xs md:text-base">Diambil dari bahasa sansekerta yang bermakna tak terbatas.</p>
        </div>

        <div class="flex-1"></div>
      </div>
    </div>
  <!-- /About Section -->
</template>

<script>
export default {
  name: 'AboutSection'
}
</script>
<style>
.text-after {
  position: relative;
}
.text-after::after {
  content: '';
  position: absolute;
  width: 30%;
  background-color: #000;
  height: 3px;
  top: 40%;
  left: 50%;
  transform: translate(-50%);
}
.text-before {
  position: relative;
}
.text-before::after {
  content: '';
  position: absolute;
  width: 30%;
  background-color: #000;
  height: 3px;
  top: 40%;
  right: 20%;
  transform: translate(-50%);
}
@media screen and (max-width: 768px) {
    .text-before::after {
      right: 10%;
      top: 50%;
    }
    .text-after::after {
      left: 40%;
      top: 50%;
    }
}
@media screen and (max-width: 425px) {
  .text-before::after {
      right: 20%;
      top: 40%;
    }
    .text-after::after {
      left: 50%;
      top: 40%;
    }
} 
</style>
