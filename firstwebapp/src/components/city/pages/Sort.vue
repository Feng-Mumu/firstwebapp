<template>
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
</template>

<script>
export default {
    props:['cities']
}
</script>


<style lang="css" scoped>
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
</style>
 