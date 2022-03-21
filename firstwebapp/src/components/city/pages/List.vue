<template>
    <div ref="container" class="container">
        <div class="content">
            <!--hot-->
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

            <!--sort-->
            <div class="sort">
                <div class="sort-title">
                    字母排序
                </div>
                <ul class="sort-list">
                    <li class="sort-item"
                    v-for="(val,key) in cities"
                    >
                    {{key}}
                    </li>
                </ul>
            </div>

            <!--list-->
            <div class="list">
                <div
                v-for ='(val,key) in cities'
                >
                    <div class="list-title">
                    {{key}}
                    </div>
                    <ul class="list-msg">
                        <li class="list-item"
                        v-for="item in val"
                        :key = "item.id"
                        >
                            {{item.name}}
                        </li>
                        
                    </ul> 
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
	props:['hotCities','cities'],
	data () {
		return {
			scroll:''
		}
	},
	mounted(){
		
		let container = this.$refs['container'];
		this.scroll = new BScroll(container)
	},
}

</script>

<style lang="stylus" scoped>
@import '~css/common.tyle';

.container{
    position: absolute;
	overflow:hidden;
	left:0;
	right:0;
	bottom:0;
	top:.88rem;
	background: #f5f5f5;
}
.content{
      height 12594px
}

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

.sort-title{
    font-size: .22rem;
    padding: .2rem .3rem;
    color:#212121;
}
.sort-list{
    position: relative;
    overflow: hidden;
    background: #fff;
    font-size: .28rem;
    color: #212121;
}


.sort-item{
    height: .9rem;
    text-align: center;
    line-height: .9rem;
    float: left;
    width:16.666666%;
}


.list-title{
    font-size: .22rem;
    padding: .2rem .3rem;
    color:#212121;
}
.list-msg{
    background: #fff;
    position: relative;
    overflow: hidden;
}

.list-msg:before{
	content: " ";
	position: absolute;
    height: 100%;
	left:25%;
	width:25%;
	border-left:.02rem solid #ddd;
	border-right:.02rem solid #ddd;
}

.list-msg:after{
	content: " ";
	position: absolute;
	left:75%;
	width:0%;
	height: 100%;
	border-left:.02rem solid #ddd;
}

.list-item{
    width:25%;
    font-size: .28rem;
    text-align: center;
    line-height: .9rem;
    float: left;
    border-bottom: .02rem solid #ddd;
    text0overflow();
}
</style>