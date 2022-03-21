<template>
    <div class="hot">
        <div class="hot-title">
            热门城市
        </div>
        <ul class="hot-list">
            <li class="hot-item"
            v-for ='item in hotCities' 
            :key = 'item.id'
            >
                {{item.name}}
            </li>
        </ul>
    </div>
</template>

<script>
export default {   
    props:['hotCities']
}
</script>

<style  scoped>
.hot-title{
    font-size: .22rem;
    padding: .2rem .3rem;
    color:#212121;
}
.hot-list{
    position: relative;
    overflow: hidden;
    background: #fff;
    font-size: .28rem;
    color: #212121;
}
.hot-list:before{
    content:" ";
    position: absolute;
    height: 100%;
    left: 33.33%;
    right: 33.33%;
    border-left:.02rem solid #ddd;
    border-right:.02rem solid #ddd  ;
}

.hot-item{
    height: .9rem;
    text-align: center;
    line-height: .9rem;
    float: left;
    width:33.333333%;
    border-bottom:.02rem solid #ddd ;
}

</style>


