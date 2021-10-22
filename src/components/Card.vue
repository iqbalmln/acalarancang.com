<template>
    <div class="flip-card font-sitka my-6 lg:my-0"> 
        <div class="flip-card-inner">
            <div class="flip-card-front">
                <h2>Webinar</h2>
            </div>
            <div class="flip-card-back">
                <div>
                    <h3 class="text-2xl">Webinar</h3>
                    <p class="text-xs">“Meningkatkan Kreatifitas dan Efektifitas dalam Perancangan Furniture”</p>
                    <p class="text-xs mt-8">with</p>
                    <p class="text-sm">Zulyo Kumoro</p>
                    <p class="text-xs">Interior Designer & Product Designer</p>
                </div>
            <div class="flex flex-col justify-start text-left my-12">
                <div class="flex items-center">
                    <i class='bx bxs-calendar mr-2' ></i>
                    <span class="text-xs">Sabtu, 30 Oktober 2021</span>
                </div>
                <div class="flex items-center">
                    <i class='bx bx-time-five mr-2 my-2' ></i>
                    <span class="text-xs">09.30 - selesai</span>
                </div>
                <div class="flex items-center">
                    <i class='bx bx-slideshow mr-2' ></i>
                    <span class="text-xs">Online, Via Zoom/Google Meet</span>
                </div>
            </div>
            <div class="flex justify-between items-center border border-1 py-1 px-2">
                <p class="text-xs">Registration</p>
                <i class='bx bx-link-external'></i>
            </div>
            <p class="uppercase my-4 text-sm">free entry</p>
            <p class="text-xs">Contact person<br>Eka: +62 82136478867</p>
        </div>
    </div>
</div>

</template>

<script>
export default {
    name: 'Card'
}
</script>
<style>
.flip-card {
  background-color: transparent;
  width: 300px;
  height: 500px;
  perspective: 1000px;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  border: 2px solid red;
    border-radius: 20px;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  color: #000;
}

.flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
}

.flip-card-front, .flip-card-back {
    overflow: hidden;
  position: absolute;
  padding: 25px 35px;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.flip-card-front {
  background-color: transparent;
  color: black;
}

.flip-card-back {
  background-color: transparent;
  color: #000;
  transform: rotateY(180deg);
}
</style>
