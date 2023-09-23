<template>
    <div>
        <h5 class="m-4 text-center event-page-title">EVENTS FOR THE YEAR {{year}}</h5>
        <div class="container">
            <div class="justify-content-center" v-if="GetDataByYear.length != 0">
                <event-card v-for="item in GetDataByYear" :key="item.key"
                    :title="item.title"
                    :description="item.description"
                    :date="item.date"
                    :duration="item.duration"
                    :year="item.year"
                    :images="item.images">
                </event-card>
            </div>
            <div v-if="GetDataByYear.length == 0">
                <div class="card mb-3">
                    <div class="card-body">
                        <p class="card-text">No Events to display :(</p>
                        <p class="card-text">Go back to -> <router-link to="/home">Home Page</router-link></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import EventCard from './EventCard.vue'
import dataJson from '../data/data.json'
import { RouterLink } from 'vue-router';

export default{
    name:'EventsPage',
    components:{
    EventCard,
    RouterLink
},
    data(){
        return{
            data: dataJson
        }
    },
    computed:{  
        year(){
            return this.$route.params.year;
        },
        GetDataByYear(){
            return this.data.filter(d => d.year == this.year)
        }
    },
    watch:{
        year(){
            console.log(this.year);
        },
    },
    methods: {
    },
    mounted(){
    }
}
</script>


<style scoped>

.event-page-title{
    font-weight:700;
    font-size: 2.5rem;
}

</style>