<template>
    <div id="my-travle">
        <p>유럽여행</p>
        <ul>
            <li v-for="item in items" :key="item.attraction"
            @click="gocountry(item.country)">
            <span>국가 : {{item.country}}</span>
            <span>도시 : {{item.city}}</span>
            <span>명소 : {{item.attraction}} </span>
            <span>입장료 : {{item.entrance_fee}}</span>
            </li>
        </ul>
        <travel-detail></travel-detail>
        <!-- vuex의 store때문에 travel-detail을 여기서 쓸 수 있음 -->
    </div>
</template>
<script>
import TravelDetail from './TravelDetail'

export default {
    components: {
        'travel-detail' : TravelDetail
    },
    methods : {
        //store로 상태정보를 공유하기 때문에 가능
        gocountry(incountry) {
            this.$store.state.selectedCountry = incountry;
        }
    },
    computed : {
        items() {
            return this.$store.state.items;
        }
    }
}
</script>