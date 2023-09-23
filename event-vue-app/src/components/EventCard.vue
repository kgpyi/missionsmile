<template>
    <div class="card my-5 p-2 event-card">
        <div class="row g-0">
            <div class="col-md-6">
                <CCarousel controls dark indicators="crossfade">
                    <CCarouselItem v-for="(image, index) in images" :key="index" style="height: 400px;">
                        <img class="d-block w-100 h-100" :src="require('../assets/eventImages/' +year+ '/' +image)" alt="slide 1"/>
                    </CCarouselItem>
                </CCarousel>
            </div>
            <div class="col-md-6 text-start">
                <div class="card-body">
                    <ins><h4 class="card-title text-start card-title ">{{ title }}</h4></ins>
                    <p class="card-text text-justify m-1">{{ description }}</p>
                    <div class="row">                        
                        <p class="card-text m-0 date-duration">Date: {{ date }}</p>
                        <p class="card-text m-0 date-duration">Duration: {{ duration }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="rule"></div>
</template>

<script>
import { CCarousel } from '@coreui/vue';
import { CCarouselItem } from '@coreui/vue';

export default{
    name:'EventCard',
    components: {
        CCarousel,
        CCarouselItem
    },
    props:{
        title:{
            type: String,
            default: ''
        },
        description:{
            type: String,
            default: ''
        },
        date:{
            type: String,
            default: ''
        },
        duration:{
            type: Number,
            default: 0
        },
        year:{
            type: Number
        },
        images:{
            type: Array
        },
        imageKey:{
            type: Number
        }
    }
}
</script>

<style scoped>

.event-card{
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
}

.card-title{
    font-weight: 700;
}

.date-duration{
    text-align: right;
    font-weight: 700;
    color: rgba(15, 41, 80, 0.701);
    font-size: 15px;
}

.text-justify{
    text-align: justify;
}

.rule{
    height: 1px;
    margin-bottom: 4px;
    background-color: rgba(0, 0, 0, 0.402);
}

img{
    object-fit: cover;
}
</style>