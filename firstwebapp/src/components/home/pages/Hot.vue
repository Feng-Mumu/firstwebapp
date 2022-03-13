<template>
    <div class="hot">
        <div class="hot-top">
            <img src="http://img1.qunarzz.com/piao/fusion/1711/16/bfbb9874e8f11402.png">
            <span>本周热门榜单</span>
            <span class="hot-title">全部榜单</span>
        </div>
        <ul class="hot-list" >
            <li class="hot-item" v-for='item in hotList' :key='item.id'>
                <div>
                    <img :src="item.imgUrl">
                    <p>{{item.title}}</p>
                    <p>
                     <span class="hot-mark">¥{{item.mark}}</span>起
                    </p>
                </div>
            </li>

        </ul>
    </div>
</template>

<script type="text/javascript">
export default {
    props:['hotList'],
    data(){
        return{
        
        }
    }

}
</script>


<style type="text/css" lang="stylus" scoped>
@import '~css/common.tyle';
.hot{
    margin-top:.2rem;
    background: #fff;
    font-size: .28rem;
}

.hot-top{
    padding-top:.2rem;
    position: relative;
}

.hot-top img{
    widows: .3rem;
    height: .3rem;
}

.hot-top span{
    color: #212121;
    font-size: .32rem;
    text-align: center;
}

.hot-top span.hot-title{
    position:absolute;
    right: .2rem;
    color: #616161;
    font-size: .26rem;
  

}

.hot-list{
    padding: .1rem 0;
    overflow-x: scroll;
	overflow-y: hidden;
	white-space: nowrap;
	height: 3rem;
}

.hot-item{
    display: inline-block;
    padding: 0 .2rem;
    width: 2rem;
    height: 2rem;
}

.hot-item img{
	width:100%;
	height:100%;
}

.hot-item p{
    text0overflow();
	text-align: center;
    
}

.hot-item p .hot-mark{
    color:#ff8300;
	font-size:.32rem;
}

</style>