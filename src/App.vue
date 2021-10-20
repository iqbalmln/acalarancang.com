<template>
  <div
    class="flex flex-col gap-8 items-center justify-center h-screen font-sitka text-center"
    :style="`background: url(${require('@/assets/img/bg.png')}) top center`"
  >
    <div class="w-64 md:w-96">
      <img src="./assets/logo.png" alt="">
    </div>
    <div>
      <h1 class="text-4xl md:text-6.5">Acala Rancang</h1>
      <h2 class="text-2xl md:text-5xl">‘Asa Ananta’</h2>
      <p class="md:text-2xl mt-5">
        Segera datang.
      </p>
    </div>
    <div>
      <i class='bx bxl-instagram cursor-pointer'></i>
      <i class='bx bxl-linkedin mx-4 cursor-pointer'></i>
      <i class='bx bxl-tiktok cursor-pointer'></i>
    </div>
  </div>
</template>

<script>
// import Logo from './components/Logo'

export default {
  name: 'App',

  // components: {
  //   Logo
  // }
}
</script>
