<template>
  <div
    class="overflow-hidden absolute py-6 px-8 w-full h-full bg-transparent text-black flex flex-col gap-6"
    style="backface-visibility: hidden; transform: rotateY(180deg);"
  >
    <i
      v-if="card.hasNext"
      class="bx bx-chevron-right-circle text-2xl absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
      @click="speakerIndex = speakerIndex === 0 ? 1 : 0"
    />
    
    <div class="flex-1 flex flex-col justify-between">
      <div class="flex flex-col">
        <h3 class="text-2xl">{{ card.title }}</h3>

        <p class="text-xs">
          {{ card.subtitle }}
        </p>
      </div>

      <div>
        <p class="flex flex-col text-xs">
          <span v-if="card.hasNext">
            {{ currentSpeaker.label }}
          </span>
          <span>with</span>
        </p>

        <template v-if="!card.hasNext">
          <div
            v-for="speaker in card.speaker"
            :key="speaker.name"
          >
            <p class="text-sm">{{ speaker.name }}</p>
            <p class="text-xs">{{ speaker.role }}</p>
            <p v-if="card.speaker.length > 1">&</p>
          </div>
        </template>

        <template v-else>
          <div>
            <p class="text-sm">{{ currentSpeaker.name }}</p>
            <p class="text-xs">{{ currentSpeaker.role }}</p>
          </div>
        </template>
      </div>

      <div class="flex flex-col justify-start text-left">
        <div class="flex items-center gap-2">
          <i class="bx bxs-calendar text-lg"></i>
          <span class="text-xs">
            {{ card.date }}
          </span>
        </div>

        <div class="flex items-center gap-2">
          <i class="bx bx-time-five text-lg"></i>
          <span class="text-xs">
            {{ card.time }}
          </span>
        </div>

        <div class="flex items-center gap-2">
          <i class="bx bx-slideshow text-lg"></i>
          <span class="text-xs">Online, Via Zoom/Google Meet</span>
        </div>
      </div>
    </div>

    <div class="h-32 flex-shrink-0 flex flex-col justify-between text-xs">
      <div class="flex justify-between items-center border border-black py-1.5 px-2">
        <p>Registration</p>
        <i class="bx bx-link-external"></i>
      </div>

      <p class="uppercase text-sm">
        {{ card.fee }}
      </p>

      <p>Contact person</p>
      <p>{{ card.contact_person }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainEventCardBack',

  props: {
    card: {
      type: Object,
      required: true
    }
  },

  data () {
    return {
      speakerIndex: 0
    }
  },

  computed: {
    currentSpeaker () {
      return this.card.speaker[this.speakerIndex]
    }
  }
}
</script>
