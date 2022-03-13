<template>
<div class='icons'>
    <swiper :options="swiperOption">
        <swiper-slide v-for='item in page' :key='item.id'>
             <div class='incons-item'
                v-for='icon in item '
                :key='icon.id'
                >
                <img :src="icon.imgUrl">
                <p>{{icon.title}}</p>
            </div>
        </swiper-slide>
    </swiper> 
    <!-- <div class='incons-item'
                v-for='item in iconsList'
                :key='item.id'>
                <img :src="item.imgSrc">
                <p>{{item.info}}</p>
    </div> -->
</div>
 
</template>

<script type="text/javascript">
export default{
    props:['iconsList'],
    data(){
        return {
            swiperOption:{},         
        }
    },
    computed:{
        page(){
            let pages=[];
            this.iconsList.forEach((item,index) =>{
                let idx = Math.floor(index/8);
                if(!pages[idx]) pages[idx]=[];
                pages[idx].push(item)
            })
            return pages;
        }
    }
}
</script>
<style type="text/css" lang="stylus" scoped>
@import '~css/common.tyle';

.icons{
    background: white;
}

.incons-item{
    width:25%;
    padding-bottom: 25%;
    height: 0;
    background: white;
    float: left;

}
.incons-item img{
    width: 1.1rem;
    height: 1.1rem;
    display: block;
    margin: 0 auto;
    padding-top: .2rem;

}
.incons-item p{
   font-size: .28rem;
   text-align: center;
   color:#212121;
   margin-top: .1rem;
   text0overflow();

}

</style>