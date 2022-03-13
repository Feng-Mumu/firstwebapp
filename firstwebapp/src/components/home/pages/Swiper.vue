<template>
    <div class="header-swiper">
        <swiper :options="swiperOptions">
            <swiper-slide v-for='item in swiperList' :key='item.id'>
                <img :src="item.imgUrl">
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>

<script type="text/javascript">
export default{
    props:['swiperList'],
    data() {
      return {
        swiperOptions: {
          pagination: {
            el: '.swiper-pagination'
          },
          loop:true,
        },
      }
    }
}
</script>

<style type="text/css" scoped>
.header-swiper{
    /* width:100%;
    height: 2.8rem; */
    background: #ccc;
    height: 0;
    padding-bottom: 26.66%;
}
.header-swiper img{
    width:100%;
    height: 100%;
}

/* .header-swiper >>> */
.header-swiper >>> .swiper-pagination-bullet-active{ 
    background: white;
}

</style>>
