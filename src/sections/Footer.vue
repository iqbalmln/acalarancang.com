<template>
  <!-- Footer -->
  <footer
    class="flex flex-col lg:flex-row justify-between items-center py-12 lg:py-24 px-12 lg:px-24 "
    >
    <div class="flex items-center font-sitka">
      <div>
        <img src="../assets/img/logo-small.png" alt="">
      </div>

      <div class="flex-1">
        <h2 class="text-xl md:text-lg lg:text-5xl">Acala Rancang</h2>
        <h3 class="text-sm md:text-base lg:text-4xl">‘Asa Ananta’</h3>
      </div>
    </div>

    <div class="flex flex-col gap-2 md:gap-0 text-center md:text-right">
      <div class="text-lg md:text-4xl lg:text-5xl text-center lg:text-right">
        <i class='bx bxl-instagram' ></i>
        <i class='bx bxl-linkedin-square mx-4 md:mx-8'></i>
        <i class='bx bxl-tiktok' ></i>
      </div>

      <div class="flex items-center gap-2 md:gap-4 justify-between">
        <i class='bx bx-phone text-2xl lg:text-4xl' ></i>
        <span class="underline text-10">+62 896-0204-8140</span>
        <span class="underline text-10">+62 857-0757-8581</span>
      </div>

      <div class="flex justify-center md:justify-end items-center gap-4">
        <i class='bx bx-envelope md:text-4xl'></i>
        <span class="text-10 md:text-base">acalarancang.ub@gmail.com</span>
      </div>
    </div>
  </footer>
  <!-- /Footer -->
</template>

<script>
export default {
  name: 'FooterSection'
}
</script>
