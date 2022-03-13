<template>
    <div class="vacation">
        <div class="vacation-title">周末去哪</div>
        <ul class="vacation-list">
            <li class="vacation-item" v-for="item in vacationList" :key="item.id">
                <div class="vacation-img">
                    <img :src=item.imgUrl>
                </div>
                <div class="vacation-msg">
                    <p>{{item.title}} </p>
                    <p>{{item.msg}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default{
	props:['vacationList'],
    data(){
        return{
            
		}
        
    }
}
</script>

<style lang="css" scoped>
.vacation-title{
    font-size: .32rem;
	padding:.24rem;
}

.vacation-item{
    margin-bottom: .1rem;
    background: #fff;
	font-size:.28rem;
}

.vacation-img{
	width:100%;
	height: 0;
    padding-bottom:37.4375%;

}

.vacation-img img{
	width:100%;
}

.vacation-msg{
	padding:.2rem 0 .2rem .2rem;
}

.vacation-msg p{
	margin-top:.2rem;
}
.vacation-msg p+p{
	color: #616161;
    font-size: .24rem;
}
</style>

