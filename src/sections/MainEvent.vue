<template>
  <!-- Main Event -->
    <div class="font-sitka py-24 px-12 lg:px-24 ">
      <h2 class="text-6.5 text-center">Main Event</h2>

      <div class="flex flex-col lg:flex-row justify-between items-center">
        <MainEventCard
          v-for="card in cards"
          :key="card.title"
          :card="card"
        />
      </div>
    </div>
  <!-- /Main Event -->
</template>

<script>
import MainEventCard from '../components/MainEventCard.vue'

export default {
  name: 'MainEventSection',

  components: {
    MainEventCard
  },

  data () {
    return {
      cards: [
        {
          title: 'Webinar',
          subtitle: '"Meningkatkan Kreatifitas dan Efektifitas dalam Perancangan Furniture"',
          speaker: [
            {
              label: null,
              name: 'Zulyo Kumoro',
              role: 'Interior Designer & Product Designer'
            }
          ],
          date: 'Sabtu, 30 Oktober 2021',
          time: '09.30 - selesai',
          fee: 'FREE ENTRY',
          contact_person: 'Eka: +62 821 364 788 67',
          hasNext: false,
          color: '#B9AED5'
        },
        {
          title: 'Workshop',
          subtitle: '“Improve Your Skill With Creating The New Things”',
          speaker: [
            {
              label: '“3d sketchup & rendering digital”',
              name: 'Ariq Naufal',
              role: 'Architectural Designer, Content Creator,  Rendering digital'
            },
            {
              label: '“Marker Render”',
              name: 'Nashir Setiawan',
              role: 'Architectural Designer, Content Creator,  Rendering digital'
            }
          ],
          date: 'Minggu, 24 Oktober 2021',
          time: '08.45 - 11.45',
          fee: 'BERBAYAR',
          contact_person: 'Salsa Bareta: +62 813 302 024 40',
          hasNext: true,
          color: '#D8A4C9'
        },
        {
          title: 'Talkshow',
          subtitle: '“Membangun Studio Desain Generasi Muda”',
          speaker: [
            {
              label: null,
              name: 'Aghnia Fuad',
              role: 'Interior Designer'
            },
            {
              label: null,
              name: 'Helen Agustine',
              role: 'Architect & Interior Designer, Founder Seniman Ruang'
            }
          ],
          date: 'Minggu, 31 Oktober 2021',
          time: '13.00 - Selesai',
          fee: 'FREE ENTRY',
          contact_person: 'Nadhiva: +62 895 340 365 450',
          hasNext: false,
          color: '#EBCCAD'
        }
      ]
    }
  }
}
</script>
