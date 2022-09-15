<template>
  <div class="icons">
    <swiper >
        <swiper-slide v-for="(page,index) of pages" :key="index">
            <div class="icon" v-for="item of page"
            :key="item.id"
            >
                <div class='icon-img'>
                    <img class="icon-img-conet" :src='item.imgUrl'>
                </div>
                <p class="icon-desc">{{item.desc}}</p>
            </div>
        </swiper-slide>

   </swiper>



  </div>
</template>

<script>
export default {
    name:'HomeIcon',
    props:{
        list:Array
    },
    
    computed:{
        pages(){
            const pages = []
            this.list.forEach((item,index)=>{
                const page =Math.floor(index / 8)
                if(!pages[page]){
                    pages[page]=[]
                }
                pages[page].push(item)
            })
            return pages
        }
    }

}
</script>

<style lang="stylus" scoped>
@import '../assets/varibles.styl'
    .icons >>> .swiper-container{
        height 0
        padding-bottom: 50%
    }
    .icons{
        margin-top: 5px
    }
    .icon{
        position: relative
        overflow hidden
        float left
        width 25%
        height 0
        padding-bottom: 25%
 
        .icon-img{
            position absolute
            top:0
            left: 0
            right 0
            bottom: 22px
            box-sizing: border-box
            padding: 5px
            .icon-img-conet{
                display block
                margin : 0 auto
                height 100%
            }
        }
        .icon-desc{
            position absolute

            left: 0
            right 0
            bottom: 0
            height 22px
            line-height: 22px
            color $darkTextColor
            text-align: center
        }
    }

</style>