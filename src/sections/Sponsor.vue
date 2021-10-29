<template>
  <div class="font-sitka flex flex-col pt-12 md:pt-24 px-12 lg:px-16 xl:px-24">
    <SectionTitle title="Sponsorship"/>
    <div class="flex flex-col md:flex-row justify-end md:justify-between items-center gap-6 md:gap-0">
      <div class="w-24 h-24 md:h-auto md:w-32 lg:w-40 xl:w-64">
          <img src="../assets/img/logo-02.png" alt="">
      </div>
      <div class="w-24 md:w-32 lg:w-40 xl:w-64">
          <img src="../assets/img/canson_logo_new.png" alt="">
      </div>
      <div class="w-24 md:w-32 lg:w-40 xl:w-64">
          <img src="../assets/img/Copic_Too_logo_1.png" alt="">
      </div>
      <div class="w-24 md:w-32 lg:w-40 xl:w-64">
          <img src="../assets/img/dasternya.jpg" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import SectionTitle from '../components/SectionTitle'
export default {
    name: 'SponsorSection',

    components: {
        SectionTitle
    }
}
</script>