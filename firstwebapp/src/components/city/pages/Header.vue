<template>
    <div class="header">
        <div class="header-left">
            <span class="iconfont" @click="toHome">
                &#xe624;
            </span> 
        </div>
        <div class="header-title" >
            城市选择
        </div>
    </div>
</template>
<script>
export default{
    methods:{
        toHome(){
            this.$router.push('/')
        }
    }
}
</script>

<style scoped lang="stylus">
@import '~css/var.tyle'

.header{
    width: 100%;
    line-height: .88rem;
    background: $bgColor;
    color:$textColor;
    font-size: .36rem;
    display:relative;
}
.header-left{
    width: .4rem;
    padding: 0 .2rem;
    text-align: center;
    font:bold;
    position:absolute;

}
.header-title{
    text-align: center
}

</style>