<template>
<div>
  <home-header></home-header>
  <home-swiper :list="swiperList"></home-swiper>
  <home-icons :list="iconList"></home-icons>
  <home-recommend :list="recommendList"></home-recommend>
  <home-weekend :list="weekendList"></home-weekend>
</div>

</template>


<script>
import HomeHeader from './Header.vue'
import HomeSwiper from './Swiper.vue'
import HomeIcons from './Icon.vue'
import HomeRecommend from './Recommend.vue'
import HomeWeekend from './Weekend.vue'
import axios from 'axios'
import { mapState } from 'vuex'

export default {
  name: 'Home',
  components:{
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  computed:{
    ...mapState(['city'])
  },
  data(){
    return{
      lastCity:'',
      swiperList:[],
      iconList:[],
      recommendList:[],
      weekendList:[]
    }

  },
  methods:{
    getHomeInfo(){
      axios.get('/js/index.json?city=' + this.city)
          .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc(res){
      res = res.data
      if(res.data && res.ret){
        this.swiperList=res.data.swiperList
        this.iconList=res.data.iconList
        this.recommendList= res.data.recommendList
        this.weekendList=res.data.weekendList
      }

    }

  },
  mounted(){
    this.lastCity=this.city
    this.getHomeInfo()
  },
  activated(){
    if(this.lastCity != this.city){
      this.lastCity = this.city
       this.getHomeInfo()
    }
  }
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">

</style>
