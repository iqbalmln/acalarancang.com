<template>
  <div
    class="flip-card bg-transparent font-sitka my-6 lg:my-0 w-75 h-125"
    style="perspective: 1000px;"
  >
    <div
      class="flip-card-inner relative w-full h-full border-2 rounded-1.25 text-center text-black transform transition-all duration-500"
      :style="`border-color: ${card.color}; transform-style: preserve-3d; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);`"
    >
      <MainEventCardFront :title="card.title" :color="card.color" />
      <MainEventCardBack :card="card" />
    </div>
  </div>
</template>

<script>
import MainEventCardBack from './MainEventCardBack'
import MainEventCardFront from './MainEventCardFront'

export default {
  name: "Card",

  components: {
    MainEventCardBack,
    MainEventCardFront
  },

  props: {
    card: {
      type: Object,
      required: true
    }
  }
};
</script>

<style>
.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}
</style>
