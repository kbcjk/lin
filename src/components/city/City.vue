<template>
    <div> 
        <city-header></city-header>
        <city-search :cities="cities"></city-search>
        <city-list :cities="cities" :hot="hotCities" :letter="letter"></city-list>
        <city-alphabet :cities="cities"
        @change="handleLetterChange"
        ></city-alphabet>

    </div>
  
</template>

<script>
import axios from 'axios'
import CityHeader from './citycomponents/Header.vue'
import CitySearch from './citycomponents/Search.vue'
import CityList from './citycomponents/List.vue'
import CityAlphabet from './citycomponents/Alphabet.vue'
export default {
    name:'City',
    components:{
        CityHeader,
        CitySearch,
        CityList,
        CityAlphabet
    },
    data(){
        return{
            cities:{},
            hotCities:[],
            letter:''
        }
    },
    methods:{
        getCityInfo(){
            axios.get('/js/city.json')
               .then(this.handleGetCityInfoSucc)
        },
        handleGetCityInfoSucc(res){
            res=res.data
            if(res.ret&&res.data){
                const data = res.data
                this.cities = data.cities
                this.hotCities = data.hotCities
            }
        },
        handleLetterChange(letter){
            this.letter=letter
        }

    },
    mounted(){
        this.getCityInfo()
    }

}
</script>

<style>

</style>