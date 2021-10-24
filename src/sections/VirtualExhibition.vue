<template>
  <!-- Virtual Exhobition -->
  <div class="flex flex-col gap-8 font-sitka relative select-none">
    <div>
      <SectionTitle title="Virtual Exhibition" />
    </div>

    <transition name="fade-in">
      <div
        v-if="imageText.green"
        class="mid-left-view-text text-10 md:text-xs text-black border border-green-700 absolute rounded left-4 top-64 md:left-12 md:top-12 lg:left-12 lg:top-1/3 xl:left-64 xl:top-1/2 px-2 py-1 md:px-4 md:py-2"
      >
        <p>Desain Furniture & Elemen Dekorasi Interior</p>
      </div>
    </transition>

    <transition name="fade-in">
      <div
        v-if="imageText.yellow"
        class="bottom-left-view-text text-10 md:text-xs text-black border border-yellow-200 absolute rounded bottom-20 left-2 md:bottom-48 md:left-16 lg:bottom-72 lg:left-16 xl:bottom-40 xl:left-48 px-2 py-1 md:px-4 md:py-2"
      >
        <p>Gambar Bentuk, Nirmana 2D, & Nirmana 3D</p>
      </div>
    </transition>

    <transition name="fade-in">
      <div
        v-if="imageText.blue"
        class="top-view-text text-10 md:text-xs text-black border border-blue-700 absolute left-1/2 top-32 md:left-1/2 md:top-40 lg:left-1/2 lg:top-48 xl:left-1/2 xl:top-32 rounded transform -translate-x-1/2 px-2 py-1 md:px-4 md:py-2"
      >
        <p>Furniture & Elemen Interior Siap Jual</p>
      </div>
    </transition>

    <transition name="fade-in">
      <div
        v-if="imageText.red"
        class="mid-right-view-text text-10 md:text-xs text-black border border-red-500 absolute rounded right-8 top-24 md:right-8 md:top-2/3 lg:right-8 lg:top-1/3 xl:right-56 xl:top-1/2 px-2 py-1 md:px-4 md:py-2"
      >
        <p>Desain Ruang Private atau Public Space</p>
      </div>
    </transition>

    <div class="flex flex-col gap-8 justify-center items-center">
      <VirtualExhibitionImage @click="color => toggle(color)" />
    </div>

    <div class="flex justify-center">
      <a href="https://intip.in/AcalaRancangVirtualExhibition" target="_blank">
        <div class="flex items-center border border-black py-2 px-8 cursor-pointer">
        <p class="mr-8 hover:underline">Virtual Exhibition</p>
        <i class='bx bx-link-external'></i>
      </div>
      </a>
    </div>
  </div>
  <!-- /Virtual Exhobition -->
</template>

<script>
import VirtualExhibitionImage from '../components/VirtualExhibitionImage'
import SectionTitle from '../components/SectionTitle.vue'

export default {
  name: 'VirtualExhibition',

  components: {
    VirtualExhibitionImage,
    SectionTitle
  },

  data () {
    return {
      imageText: {
        blue: false,
        green: false,
        red: false,
        yellow: false
      }
    }
  },

  methods: {
    toggle (color) {
      this.imageText[color] = !this.imageText[color]
    }
  }
}
</script>

<style>
.fade-in-enter-active,
.fade-in-leave-active {
  transition: .4s ease-out;
}

.fade-in-enter,
.fade-in-leave-to {
  opacity: 0;
}
</style>
