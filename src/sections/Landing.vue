<template>
  <!-- Landing Section -->
  <div class="flex flex-col gap-4 md:gap-8 items-center justify-center font-sitka text-center h-screen w-full">
    <div class="w-64 md:w-96 logo">
      <img src="../assets/logo.png" alt="">
    </div>

    <div class="coming-soon-text">
      <h1 class="text-4xl md:text-6.5 mb-4">Acala Rancang</h1>
      <h2 class="text-2xl md:text-5xl">‘Asa Ananta’</h2>
    </div>

    <div class="bounce">
      <i class='bx bx-chevrons-down text-4xl'></i>
    </div>
  </div>
  <!-- /Landing Section -->
</template>

<script>
export default {
  name: 'LandingSection'
}
</script>
<style>
.bounce {
	-webkit-border-radius:50%;
	-moz-border-radius:50%;
	-ms-border-radius:50%;
	border-radius:50%;
	animation: bounce 1s infinite;
	-webkit-animation: bounce 1s infinite;
	-moz-animation: bounce 1s infinite;
	-o-animation: bounce 1s infinite;
}
 
@-webkit-keyframes bounce {
	0%, 20%, 50%, 80%, 100% {-webkit-transform: translateY(0);}	
	40% {-webkit-transform: translateY(-30px);}
	60% {-webkit-transform: translateY(-15px);}
}
 
@-moz-keyframes bounce {
	0%, 20%, 50%, 80%, 100% {-moz-transform: translateY(0);}
	40% {-moz-transform: translateY(-30px);}
	60% {-moz-transform: translateY(-15px);}
}
 
@-o-keyframes bounce {
	0%, 20%, 50%, 80%, 100% {-o-transform: translateY(0);}
	40% {-o-transform: translateY(-30px);}
	60% {-o-transform: translateY(-15px);}
}
@keyframes bounce {
	0%, 20%, 50%, 80%, 100% {transform: translateY(0);}
	40% {transform: translateY(-30px);}
	60% {transform: translateY(-15px);}
}
</style>