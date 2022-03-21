<template>
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
</template>

<script>
export default {
    props:['cities']
}
</script>

<style lang="stylus" scoped>
@import '~css/common.tyle';

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