<template>
  <div
    class="flex flex-col gap-8 items-center justify-center h-screen font-sitka text-center"
    :style="`background: url(${require('@/assets/img/bg.png')}) top center`"
  >
    <div class="w-64 md:w-96 logo">
      <img src="./assets/logo.png" alt="">
    </div>
    <div class="coming-soon-text">
      <h1 class="text-4xl md:text-6.5">Acala Rancang</h1>
      <h2 class="text-2xl md:text-5xl">‘Asa Ananta’</h2>
      <p class="md:text-2xl mt-5">
        Segera datang.
      </p>
    </div>
    <div class="text-base md:text-xl">
      <a href="https://www.instagram.com/acalarancang/" target="_blank"><i class='bx bxl-instagram cursor-pointer'></i></a>
      <a href=""><i class='bx bxl-linkedin mx-4 cursor-pointer'></i></a>
      <a href="https://vt.tiktok.com/ZSeFm4cWm/" target="_blank"><i class='bx bxl-tiktok cursor-pointer'></i></a>
    </div>
  </div>
</template>

<script>
// import Logo from './components/Logo'
import gsap from 'gsap'

export default {
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
