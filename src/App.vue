<template>
   <div
    class="w-full overflow-hidden"
    :style="`background: url(${require('@/assets/img/bg.png')}) top center/cover`"
   >
    <LandingSection />
    <AboutSection />
    <MainEventSection />
    <VirtualExhibitionSection />
    <FooterSection />
  </div>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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

      gsap.from('.acala-rancang', {
        x: -50,
        opacity: 0,
        duration: 1,
        scrollTrigger: '.acala-rancang',
      })

      gsap.from('.asa-ananta', {
        x: 180,
        opacity: 0,
        duration: 1,
        scrollTrigger: '.asa-ananta',
      })

      gsap.from('.asa-x-ananta', {
        x: -50,
        opacity: 0,
        duration: 1,
        scrollTrigger: '.asa-x-ananta' 
      })

      gsap.from('.about-img', {
        y: 100,
        opacity: 0,
        duration: 1.5,
        scrollTrigger: '.about-img' 
      })
    }
  }
}

</script>