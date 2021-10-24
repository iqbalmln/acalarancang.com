<template>
  <h2 class="text-4xl lg:text-6xl xl:text-6.5 text-center">{{ title }}</h2>  
</template>

<script>
export default {
  name: 'SectionTitle',

  props: {
    title: {
      type: String,
      required: true
    },
  }
}
</script>
