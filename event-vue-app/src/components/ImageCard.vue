<!-- <template>
    <div id="carouselExampleIndicators" class="carousel slide image-class h-100 dark">
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" :data-bs-slide-to="imageKey" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button v-for="(image, index) in images" :key="imageKey + index" type="button" data-bs-target="#carouselExampleIndicators" :data-bs-slide-to="imageKey +'.'+ index " aria-label="Slide"></button>
        </div>
    <div class="carousel-inner h-100">
        <div class="carousel-item active h-100">
            <img :src="require('../assets/eventImages/' +year+ '/' +images[0])" class="d-block w-100 h-100 " alt="...">
        </div>
        <div class="carousel-item h-100" v-for="(image, index) in images" :key="index">
            <img :src="require('../assets/eventImages/' +year+ '/' +image)" class="d-block w-100 h-100 " alt="...">
        </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
    </button>
    </div>
</template>

<script>

export default{
    name:'ImageCard',
    props:{
        images: {
            type: Array
        },
        year:{
            type: Number
        },
        imageKey:{
            type: Number
        }
    }
}
</script>

<style scoped>

.image-class{
}


</style> -->