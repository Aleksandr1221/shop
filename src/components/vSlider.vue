<template>
<div id="carouselExampleControls" class="carousel slide shadow" data-ride="carousel">
  <div class="carousel-inner img-contain">
    <div class="carousel-item active">
      <img src="../assets/slider1.jpeg" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="../assets/slider2.jpeg" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="../assets/slider3.jpeg" class="d-block w-100" alt="...">
    </div>
  </div>
	  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only"></span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only"></span>
  </a>
</div>
</template>

<script>
export default {
	name: "vSlider"
}
</script>

<style scoped>
  @media (max-width:767px) {
    .carousel {
      display: none;
    }
  }
</style>