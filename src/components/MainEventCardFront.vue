<template>
  <div
    class="overflow-hidden absolute py-1.5 px-2 w-full h-full bg-transparent text-black flex flex-col items-center justify-center gap-4"
    style="backface-visibility: hidden;"
  >
    <div>
      <svg width="59" height="99" viewBox="0 0 59 99" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M29.5 1.50009C32.2817 1.50009 34.5 3.71749 34.5 6.40776C34.5 9.09803 32.2817 11.3154 29.5 11.3154C26.7183 11.3154 24.5 9.09803 24.5 6.40776C24.5 3.71749 26.7183 1.50009 29.5 1.50009Z" :stroke="color" stroke-width="3"/>
        <path d="M29 99L29 12" :stroke="color" stroke-width="3"/>
        <path d="M52.5 48.5001C55.2817 48.5001 57.5 50.7175 57.5 53.4078C57.5 56.098 55.2817 58.3154 52.5 58.3154C49.7183 58.3154 47.5 56.098 47.5 53.4078C47.5 50.7175 49.7183 48.5001 52.5 48.5001Z" :stroke="color" stroke-width="3"/>
        <path d="M52 99V59" :stroke="color" stroke-width="3"/>
        <path d="M6.5 48.5001C9.28173 48.5001 11.5 50.7175 11.5 53.4078C11.5 56.098 9.28173 58.3154 6.5 58.3154C3.71827 58.3154 1.5 56.098 1.5 53.4078C1.5 50.7175 3.71827 48.5001 6.5 48.5001Z" :stroke="color" stroke-width="3"/>
        <path d="M6 99L6 59" :stroke="color" stroke-width="3"/>
      </svg>

    </div>

    <h2>{{ title }}</h2>

    <div>
      <svg width="59" height="99" viewBox="0 0 59 99" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M30.5 97.4999C27.7183 97.4999 25.5 95.2825 25.5 92.5922C25.5 89.902 27.7183 87.6846 30.5 87.6846C33.2817 87.6846 35.5 89.902 35.5 92.5922C35.5 95.2825 33.2817 97.4999 30.5 97.4999Z" :stroke="color" stroke-width="3"/>
        <path d="M31 0L31 87" :stroke="color" stroke-width="3"/>
        <path d="M52.5 50.4999C49.7183 50.4999 47.5 48.2825 47.5 45.5922C47.5 42.902 49.7183 40.6846 52.5 40.6846C55.2817 40.6846 57.5 42.902 57.5 45.5922C57.5 48.2825 55.2817 50.4999 52.5 50.4999Z" :stroke="color" stroke-width="3"/>
        <path d="M53 0V40" :stroke="color" stroke-width="3"/>
        <path d="M6.5 50.4999C3.71827 50.4999 1.5 48.2825 1.5 45.5922C1.5 42.902 3.71827 40.6846 6.5 40.6846C9.28173 40.6846 11.5 42.902 11.5 45.5922C11.5 48.2825 9.28173 50.4999 6.5 50.4999Z" :stroke="color" stroke-width="3"/>
        <path d="M7 0L7 40" :stroke="color" stroke-width="3"/>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainEventCardFront',

  props: {
    title: {
      type: String,
      required: true
    },
    color: {
      type: String,
      required: true
    }
  }
}
</script>
