<template>
<div class='icons'>
    <swiper :options="swiperOption">
        <swiper-slide v-for='item in page' :key='item.id'>
             <div class='incons-item'
                v-for='icon in item '
                :key='icon.id'
                >
                <img :src="icon.imgSrc">
                <p>{{icon.info}}</p>
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
    data(){
        return {
            swiperOption:{},
            iconsList: [
                {
                id: "01",
                imgSrc: "https://picbed.qunarzz.com/01d2f57f920666364197a850dab859a8.png",
                info: "民宿客栈"
                },
                {
                id: "02",
                imgSrc: "https://picbed.qunarzz.com/83af731055e121a3251690b225327b56.png",
                info: "专车自驾"
                },         
                {
                id: "03",
                imgSrc: "https://picbed.qunarzz.com/5b6737be49ca243072ca614f07803b83.png",
                info: "赚钱-信用卡"
                },
                {
                id: "04",
                imgSrc: "https://picbed.qunarzz.com/1e107321f5396ea4994cd832232ecf8a.png",
                info: "旅游团购"
                },
                {
                id: "05",
                imgSrc: "https://picbed.qunarzz.com/c65b3bb7571a6bd62df669213e44b84d.png",
                info: "一日游"
                },
                {
                id: "06",
                imgSrc: "https://picbed.qunarzz.com/f6bb08a239ce1b038204120a8d1e4669.png",
                info: " 特惠酒店"
                },
                {
                id: "07",
                imgSrc: "https://picbed.qunarzz.com/3a08f360e958ccb2b947049387873ace.png",
                info: "借钱"
                },
                {
                id: "08",
                imgSrc: "https://picbed.qunarzz.com/19b4f6d2fabd617789fa5aad65b249da.png",
                info: "白金卡"
                },
                {
                id: "09",
                imgSrc: "https://img1.qunarzz.com/order/comp/2007/23/734c3c62d2adce02.png",
                info: "行程设计"
                },
                {
                id: "10",
                imgSrc: "https://picbed.qunarzz.com/25e3b9f17a21a6e0113c57a23ffccde4.png",
                info: "周边短途"
                }
            ],
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
<style type="text/css" scoped>
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

}

</style>