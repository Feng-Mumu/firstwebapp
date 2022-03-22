<template>
    <div class="home">
        <HomeHeader></HomeHeader>
        <HomeSwiper :swiperList='swiperList'></HomeSwiper>
        <HomeIcons :iconsList='iconsList'></HomeIcons>
        <HomeLocation></HomeLocation>
        <HomeActivity></HomeActivity>
        <HomeHot :hotList='hotList'></HomeHot>
        <HomeLike :likeList='likeList'></HomeLike>
        <HomeVacation :vacationList='vacationList'></HomeVacation>
    </div>
</template>
<script>
import {mapState} from 'vuex'
import HomeHeader from './pages/Header'
import HomeSwiper from './pages/Swiper'
import HomeIcons from './pages/Icons'
import HomeLocation from './pages/Location'
import HomeActivity from './pages/Activity'
import HomeHot from './pages/Hot'
import HomeLike from './pages/Like'
import HomeVacation from './pages/Vacation'

export default {
    components:{
        HomeHeader,
        HomeSwiper,
        HomeIcons,
        HomeLocation,
        HomeActivity,
        HomeHot,
        HomeLike,
        HomeVacation
    },
    data(){
        return {
            swiperList:[],
            iconsList:[],
            hotList:[],
            likeList:[],
            vacationList:[],
        }
    },
    computed:{
		...mapState(['city'])
	},
    methods:{
        getHttp(){
            this.$http.get("/api/dataHome.json")
            .then((res)=>{
                const data = res.data.data;
                data.forEach((item,index)=>{
                    if (item.city == this.city){
                        console.log(item.city,this.city);
                        this.swiperList = item.swiperList;
                        this.iconsList = item.iconsList;
                        this.hotList = item.hotList;
                        this.likeList = item.likeList;
                        this.vacationList = item.vacationList;
                    }
                })
            })
        }
    },
    mounted(){
        this.changeCity=this.city
		this.getHttp()        
    },
    activated(){
		if(this.changeCity != this.city){
			this.getHttp();
			this.changeCity=this.city;
		}
	}
}
</script>
<style type="text/css" scoped>
.home{
    background: #f5f5f5;
}
</style>