<template>
    <div class="list" ref="wrapper">
        <div>
            <div class="area">
                <div class="title border-topbottom">当前城市 </div>
                <div class="buttom-list">
                    <div class="buttom-wrapper">
                        <div class="buttom">{{this.currentCity}}</div>
                    </div>
    
                </div>
            </div>
            <div class="area">
                <div class="title border-topbottom">热门城市 </div>
                <div class="buttom-list">
                    <div class="buttom-wrapper" 
                    v-for="item of hot" 
                    :key="item.id"
                    @click="handleCityClick(item.name)"
                    >
                        <div class="buttom">{{item.name}}</div>
                    </div>
   
                </div>
            </div>
            <div class="area" 
            v-for="(item,key) of cities" 
            :key="key"
            :ref="key"
            >
                <div class="title border-topbottom">{{key}} </div>
                <div class="item-list">
                    <div class="item border-bottom"
                    v-for="innerItem of item"
                    :key="innerItem.id"
                    @click="handleCityClick(innerItem.name)"
                    >
                {{innerItem.name}}</div>

                </div>
            </div>
        </div>
    </div>
  
</template>

<script>
import Bscroll from 'better-scroll'
import { mapState ,mapMutations} from 'vuex'
export default {
    name:"CityList",
    computed:{
        ...mapState({
            currentCity:'city'
        })

    },
    props:{
        hot:Array,
        cities:Object,
        letter:String
    },
    mounted(){
        this.scroll = new Bscroll(this.$refs.wrapper,{
            click:true
        })
    },
    watch:{
        letter(){
            if(this.letter){
                const element = this.$refs[this.letter][0]
                this.scroll.scrollToElement(element)

            }
        }
    },
    methods:{
        handleCityClick(city){
          
          this.changCity(city)
          this.$router.push('/')
        },
        ...mapMutations(['changCity'])
    }

}
</script>

<style lang="stylus" scoped>
    @import '../../../assets/varibles.styl'
    .border-topbottom{
        &:before{
            border-color: #ccc
        }
        &:after{
            border-color: #ccc
        }
    }
    .border-bottom{
        &:before{
            border-color: #ccc
        }
    }
    .list{
        overflow hidden
        position: absolute
        top 80px
        left 0
        right 0
        bottom 0
        .title{
            line-height: 22px
            background: #eee
            padding-left: 10px
            color: #666
            font-size: 13px
        }
        .buttom-list{
            overflow hidden
            padding 5px 30px 5px 5px
            .buttom-wrapper{
                float left
                width 33.3%
                .buttom{
                    margin 5px
                    padding 5px 0
                    text-align: center
                    border: 1px solid #ccc
                    border-radius: 3px
    
                }
    
            } 
        }
        .item-list{
            .item{
                line-height: 38px
                padding-left: 10px
            }
        }

    }
    




</style>