<template>
    <div>
        <div class="recommend-title">周末去哪儿</div>
        <ul>
            <li class="item" v-for="item of list" :key="item.id">
                    <div class="item-img-wrapper">
                        <img class="item-img" :src="item.imgUrl">
                    </div>
    
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                </div>
            </li>
        </ul>
    </div>

</template>

<script>
export default {
    name:'HomeWeekend',
    props:{
        list:Array
    },
    data(){
        return{
            recommendList:[{
            id:'0001',
            imgUrl:'http://img1.qunarzz.com/sight/source/1511/8f/bf3a40e4afcf29.jpg_r_640x214_90225212.jpg',
            title:'鼓浪屿',
            desc:'厦门思明区'
            },{
            id:'0002',
            imgUrl:'http://img1.qunarzz.com/sight/source/1511/8f/bf3a40e4afcf29.jpg_r_640x214_90225212.jpg',
            title:'鼓浪屿',
            desc:'厦门思明区'
            },{
            id:'0003',
            imgUrl:'http://img1.qunarzz.com/sight/source/1511/8f/bf3a40e4afcf29.jpg_r_640x214_90225212.jpg',
            title:'鼓浪屿',
            desc:'厦门思明区'
            }]

        }
    }

}
</script>

<style lang="stylus" scoped>
.recommend-title{

    line-height: 40px
    background: #eee
    text-indent: 10px
}
.item{
    .item-img-wrapper{
        overflow hidden
        height 0
        padding-bottom: 37.09%

    }
    
    .item-img{
        width 100%
    }
    .item-info{
        padding 5px
        .item-title{
            line-height: 27px
            font-size 16px
        }
        .item-desc{
            line-height: 20px
            color: #ccc
        }

    }
}
</style>