<template>
    <div>
        <div class="item" v-for="(item,index) of list" :key="index">
            <div class="item-title border-botom">
             <div class="item-title-icon"></div>
             {{item.title}}
            </div>
            <div v-if="item.children" class="item-chilren">
                <detail-list :list="item.children"></detail-list>
            </div>
        </div>

    </div>
  
</template>

<script>
export default {
  name:"DetailList",
  props:{
    list:Array
  }
}
</script>

<style lang="stylus" scoped>
.item{
    .item-title{
        line-height: 22px
        font-size: 16px
        padding 10px
        margin-left: 10px
        .item-title-icon{
            display inline-block
            background:blue
            border-radius: 3px
            height: 12px
            width: 4px
            margin-right: 3px
        }
    }
    .item-chilren{
       padding: 10px
    }
}
</style>