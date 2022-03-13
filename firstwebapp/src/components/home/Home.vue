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
    mounted(){
        this.$http.get("/api/dataHome.jason")
        .then((res)=>{
            const data = res.data.data[0];
            this.swiperList = data.swiperList;
            this.iconsList = data.iconsList;
            this.hotList = data.hotList;
            this.likeList = data.likeList;
            this.vacationList = data.vacationList;
        }
        )
    }
}
</script>
<style type="text/css" scoped>
.home{
    background: #f5f5f5;
}
</style>