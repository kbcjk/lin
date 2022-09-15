<template>
  <div>
    <div class="search">
      <input v-model="keyword" class="search-input" type="text" placeholder="输入城市名或拼音">
      <div class="search-content" 
           ref="search"
          v-show="keyword"
      >
        <ul>
          <li class="search-item border-bottom" 
          v-for="item of list"
          :key="item.id"
          @click="handleCityClick(item.name)"
          >
            {{item.name}}
          </li>
        </ul>
      </div>
    </div>
  </div>

</template>

<script>
import BScroll from 'better-scroll'
import { mapState,mapMutations } from 'vuex'
export default {
    name:'CitySearch',
    props:{
      cities:Object
    },
    data(){
      return{
        keyword:'',
        list:[],
        timer:null
      }
    },
    watch:{
      keyword(){
        if(this.timer){
          clearTimeout(this.timer)
        }
        if(!this.keyword){
          this.list=[]
          return
        }
        this.timer = setTimeout(()=>{
          const result = []
          for(let i in this.cities){
            this.cities[i].forEach((value)=>{
              if(value.spell.indexOf(this.keyword) > -1 ||
                 value.name.indexOf(this.keyword) > -1){
                result.push(value)
              }
            })
          }
          this.list = result
        },100)

      }
    },methods:{
      handleCityClick(city){
          
          this.changCity(city)
          this.$router.push('/')
        },
        ...mapMutations(['changCity'])
    },
    
    mounted(){
      this.scroll = BScroll(this.$refs.search)
    }

}
</script>

<style lang="stylus" scoped>
@import '../../../assets/varibles.styl'
.search{
    height 36px
    padding 0 5px

    background: $bgColor
    .search-input{
        width 98%
        height 31px
        line-height: 31px
        text-align: center
        border-radius: 5px
        color: #666
    }   
}
.search-content{
  z-index 1
  overflow hidden
  position: absolute
  top 80px
  left 0
  right 0
  bottom 0
  background: #eee
  .search-item{
    line-height 31px
    padding-left: 1px
    background: #fff
    color #666
  }
}
</style>