<template>
    <div class="header">
        <div class="heade-left">
            <div class="iconfont back-icon">&#xe624;</div>
        </div>
        <div class="heade-input">
            <span class="iconfont">&#xe632;</span>
            输入城市/景点主题
        </div>
        <router-link to="/city">
            <div class="heade-right">
                {{this.city}}
                <span class="iconfont">&#xe62d;</span>
            </div>

        </router-link>
    </div>
</template>
   
<script>
import { mapState } from 'vuex';
export default {
     name: 'Header',
     computed:{
        ...mapState(['city'])
     }

}
   </script>
   
   <!-- Add "scoped" attribute to limit CSS to this component only -->
   <style scoped lang="stylus">
   @import '../assets/varibles.styl'
    
   .header {
    display:flex
    line-height 43px
    background: $bgColor
    color: #fff
   }

   .heade-left{
    width 42px
    float:left
    .back-icon{
        text-align: center
        font-size: 20px
    }
    }

    .heade-input{
        flex: 1
        height 32px
        line-height 32px
        margin-left 1px
        margin-top: 6px
        background: #fff
        border-radius: 5px
        color:#ccc

    }

    .heade-right{
        padding 5px
        float:right
        min-width 62px
        text-align: center
        color #fff
    }


   </style>