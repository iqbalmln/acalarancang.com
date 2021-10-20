<template>
  <div
    class="flex flex-col items-center justify-center h-screen font-sitka"
    :style="`background: url(${require('@/assets/img/bg.png')}) top center`"
  >
    <Logo />
    <div>
      <h1 class="text-6xl">Acala Rancang</h1>
      <h2 class="text-xl">‘Asa Ananta’</h2>
      <p>

      </p>
    </div>
  </div>
</template>

<script>
import Logo from './components/Logo'

export default {
  name: 'App',

  components: {
    Logo
  }
}
</script>
