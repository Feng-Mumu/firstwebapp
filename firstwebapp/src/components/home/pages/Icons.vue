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
    data(){
        return {
            swiperOption:{},
            iconsList: [
                {
					id:"01",
					imgUrl:"http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
					title:"景点门票"
				},
				{
					id:"02",
					imgUrl:"http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png",
					title:"必游榜单"
				},
				{
					id:"03",
					imgUrl:"http://img1.qunarzz.com/piao/fusion/1803/6a/45f595250c73d102.png",
					title:"夏日玩水"
				},
				{
					id:"04",
					imgUrl:"http://img1.qunarzz.com/piao/fusion/1803/47/c2b659e048b11602.png",
					title:"主题乐园"
				},
				{
					id:"05",
					imgUrl:"http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png",
					title:"动植物园"
				},
				{
					id:"06",
					imgUrl:"http://img1.qunarzz.com/piao/fusion/1805/57/1e29afd06f881102.png",
					title:"普陀山"
				},
				{
					id:"07",
					imgUrl:"http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png",
					title:"一日游"
				},
				{
					id:"08",
					imgUrl:"http://img1.qunarzz.com/piao/fusion/1803/54/35899492b1302802.png",
					title:"公园"
				},
				{
					id:"09",
					imgUrl:"http://img1.qunarzz.com/piao/fusion/1803/95/8246f27355943202.png",
					title:"游乐场"
				},
				{
					id:"10",
					imgUrl:"http://img1.qunarzz.com/piao/fusion/1803/80/416c6ab3368d1f02.png",
					title:"全部玩乐"
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