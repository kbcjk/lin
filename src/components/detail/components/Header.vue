<template>
<div>
    <router-link tag="div" to="/" class="header-abs" v-show="showAbs">
        <div class="iconfont back-icon">&#xe624;</div>
    </router-link>
    <div class="header-fixed" v-show="!showAbs">
        景点详情
        <router-link to="/">
            <div class="iconfont header-back" >&#xe624;</div>
        </router-link> 
    </div>
</div>



  
</template>

<script>
export default {
    name:'DetailHeader',
    data(){
        return{
            showAbs:true
        }
    },
    methods:{
        handleScroll(){
            const top = document.documentElement.scrollTop ||document.body.scrollTop || window.pageYOffset
  
            if(top>50){
                this.showAbs=false
            }else{
                this.showAbs=true
            }
        }

    },
    activated(){
        window.addEventListener('scroll',this.handleScroll)
    },
    deactivated(){
       window.removeEventListener('scroll',this.handleScroll)
    }

}
</script>

<style lang="stylus" scoped>
    @import '../../../assets/varibles.styl'
    .header-abs{
        position: absolute
        left: 10px
        top: 10px
        width 40px
        height: 20px
        line-height: 20px
        border-radius: 20px
        text-align: center
        background: rgba(0,0,0,8)
        .back-icon{
            color #fff
            font-size: 16px
        }
      }
    .header-fixed{
        z-index 2
        position: fixed
        top 0
        left 0
        right 0
        height 26px
        line-height: 26px
        text-align: center
        color: #fff
        background: $bgColor
        font-size 16px
        .header-back{
            position: absolute

            top 0
            left: 0
            width 32px
            text-align: center
            font-size 20px
            color: #fff
        }
        }
</style>