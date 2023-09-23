<template>
<div>
  <div id="carouselExampleDark" class="container my-3 carousel carousel-dark slide" style="height: 500px;">
    <!-- not responsive due to fix height -->
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner h-100" style="opacity: 0.9;height:50%;">
      <div class="carousel-item h-100 active" data-bs-interval="10000">
        <div class="carousel-caption d-none d-block">
          <p class="title">MISSION SMILE</p>
          <p class="subtitle ">Representative placeholder, first slide.</p>
        </div>
        <img src="../assets/carousel/carousel1.jpeg" class="d-block w-100 h-100" alt="...">
        
      </div>
      <div class="carousel-item h-100" data-bs-interval="2000">
        <img src="../assets/carousel/carousel2.jpeg" class="d-block w-100 h-100" alt="...">
        <div class="carousel-caption d-none d-block" style="height: 10%;">
          <h5>Second slide label</h5>
          <p>Some representative placeholder content for the second slide.</p>
        </div>
      </div>
      <div class="carousel-item h-100">
        <img src="../assets/carousel/carousel3.jpeg" class="d-block w-100 h-100" alt="...">
        <div class="carousel-caption d-none d-block" style="height: 10%;top: 50%;">
          <h5>Third slide label</h5>
          <p>Some representative placeholder content for the third slide.</p>
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  <div class="card mt-2 b-0 text-left p-4">
                <div class="card-header card-header-color"><h4>Where we Are ??</h4></div>
                <div class="card-body">
                <h5 class="card-title">Special title</h5>
                <p class="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero soluta quasi enim voluptatem excepturi quam, earum recusandae quos cupiditate provident? At, cum culpa officia accusantium sit quisquam repudiandae quas exercitationem ut tempore nulla tenetur, incidunt odit! Soluta aspernatur saepe accusamus quibusdam ullam, cumque numquam fuga nostrum dolore necessitatibus debitis repellat? Sunt quaerat sint deserunt tenetur quisquam, suscipit vitae harum recusandae quia quos id repudiandae eveniet modi laudantium neque corrupti, enim placeat ea magnam sapiente. Aliquid excepturi perspiciatis debitis saepe at distinctio blanditiis voluptates dolorem architecto, error, commodi adipisci voluptatibus enim amet facilis ad, labore reiciendis tempore repellendus eos culpa. Excepturi?</p>
                <p class="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero soluta quasi enim voluptatem excepturi quam, earum recusandae quos cupiditate provident? At, cum culpa officia accusantium sit quisquam repudiandae quas exercitationem ut tempore nulla tenetur, incidunt odit! Soluta aspernatur saepe accusamus quibusdam ullam, cumque numquam fuga nostrum dolore necessitatibus debitis repellat? Sunt quaerat sint deserunt tenetur quisquam, suscipit vitae harum recusandae quia quos id repudiandae eveniet modi laudantium neque corrupti, enim placeat ea magnam sapiente. Aliquid excepturi perspiciatis debitis saepe at distinctio blanditiis voluptates dolorem architecto, error, commodi adipisci voluptatibus enim amet facilis ad, labore reiciendis tempore repellendus eos culpa. Excepturi?</p>
                
            </div>
        </div>
        </div>
</template>

<style scoped>
.carousel-caption{
  top:10%;
  display: inline;
  height: 35%;
  width: 70%;
  background-color: rgba(153, 208, 255, 0.642);
}

.title{
  color: black;
  font-weight: 700;
  font-size: 5vw;
  letter-spacing: 1px;
  margin: 0;
}

.subtitle{
  font-size: 100%;
  font-weight: 600;
  color: rgb(1, 16, 17);
}

@media screen and (max-width: 650px) {
  .title{
  font-size: 7vw;
}

.subtitle{
  font-size: 100%;
}

.carousel-caption{
  height: 25%;
}
}
</style>