<template>
  <!-- Main Event -->
    <div class="font-sitka py-24 px-12 lg:px-24 ">
      <h2 class="text-6.5 text-center">Main Event</h2>

      <div class="flex flex-col lg:flex-row justify-between items-center">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  <!-- /Main Event -->
</template>

<script>
import Card from './components/Card.vue'

export default {
  name: 'MainEventSection',

  components: {
    Card
  }
}
</script>
