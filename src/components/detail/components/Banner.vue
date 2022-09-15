<template>
<div>
    <div class="banner" @click="handleBannerClick">
        <img class="banner-img" src="http://img1.qunarzz.com/sight/p0/1506/f6/f6b727f036fe5d6d.water.jpg_600x330_ae0eb039.jpg">
        <div class="banner-info">
            <div class="banner-tittle">鼓浪屿（AAAA景区）</div>
            <div class="banner-number"><span class="iconfont">&#xe63e;</span>39</div>
        </div>
      </div>
    <common-gallary :imgs="imgs" 
    v-show="showGallary"
    @close="handleGallaryClose"
    ></common-gallary>
</div>
  
</template>

<script>
import CommonGallary from '../../common/gallary/Gallary.vue'

export default {
    name:'DetailBanner',
    data(){
        return {
            showGallary:false,
            imgs:['http://img1.qunarzz.com/sight/p0/1905/70/706135ad3f10c621a3.img.jpg_350x240_d37f1af3.jpg',
            'http://img1.qunarzz.com/sight/p0/1905/70/706135ad3f10c621a3.img.jpg_350x240_d37f1af3.jpg']
        }
    },
    methods:{
      handleBannerClick(){
        this.showGallary = true
      },
      handleGallaryClose(){
        this.showGallary = false
      }
    },
    components:{
        CommonGallary
    }

}
</script>

<style lang="stylus" scoped>
    .banner{
        position relative
        overflow hidden
        height 0
        padding-bottom: 55%
        .banner-img{
            width 100%
        }
        .banner-info{
            display: flex
            position: absolute
            left 0
            right 0
            bottom 0
            line-height: 30px
            color #fff
            
            .banner-tittle{
                font-size: 16px
                padding 0 10px
                flex: 1
            }
            .banner-number{
                margin-top: 8px
                padding 0 20px
                height 14px
                line-height: 14px
                border-radius: 10px
                background: rgba(0,0,0,0.8)
                font-size: 12px

            }
        }
    }

</style>