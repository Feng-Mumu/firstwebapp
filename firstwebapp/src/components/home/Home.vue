<template>
    <div class="home">
        <HomeHeader/>
        <HomeSwiper/>
        <HomeIcons/>
        <HomeLocation/>
        <HomeActivity/>
    </div>
</template>
<script>
import HomeHeader from './pages/Header'
import HomeSwiper from './pages/Swiper'
import HomeIcons from './pages/Icons'
import HomeLocation from './pages/Location'
import HomeActivity from './pages/Activity'



export default {
    components:{
        HomeHeader,
        HomeSwiper,
        HomeIcons,
        HomeLocation,
        HomeActivity
    }
}
</script>
<style type="text/css" scoped>
.home{
    background: #f5f5f5;
}
</style>