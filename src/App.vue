<template>
   <div
    class="w-full"
    :style="`background: url(${require('@/assets/img/bg.png')}) top center`"
   >
    <LandingSection />
    <AboutSection />
    <MainEventSection />
    <VirtualExhibitionSection />
    <FooterSection />
  </div>
</template>

<script>
import gsap from 'gsap'

import AboutSection from './sections/About'
import FooterSection from './sections/Footer'
import LandingSection from './sections/Landing'
import MainEventSection from './sections/MainEvent'
import VirtualExhibitionSection from './sections/VirtualExhibition'

export default {
  name: 'App',

  components: {
    AboutSection,
    FooterSection,
    LandingSection,
    MainEventSection,
    VirtualExhibitionSection
  },

  mounted () {
    this.initAnimation()
  },

  methods: {
    initAnimation () {
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
}

</script>