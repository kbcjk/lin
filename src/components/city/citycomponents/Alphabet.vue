<template>
  <ul class="list">
    <li class="item" v-for="(item,key) of cities" :key="key"
     @click="handleLetterClick"
    >{{key}}</li>


  </ul>
</template>

<script>
export default {
  name:'CityAlphabet',
  props:{
    cities:Object
  },
  methods:{
    handleLetterClick(e){
        this.$emit('change',e.target.innerText)

    }
  }
}
</script>

<style lang="stylus" scoped>
    @import '../../../assets/varibles.styl'
    .list{
        display: flex
        flex-direction: column
        justify-content: center
        position: absolute
        top 80px
        right 0
        bottom 0
        width 20px
        .item{
            line-height: 20px
            text-align: center
            color: $bgColor

        }
    }


</style>