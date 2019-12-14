<template>
    <div>
        <h4>{{products[1]}}</h4>
        <ul v-for="pd in product_details" :key="pd.pcode">
            <li v-if="pd.pcode == products[0]">
                제품코드 : {{pd.pcode}}, 상세정보 : {{pd.text}}
            </li>
        </ul>
    </div>
</template>
<script>
import EventBus from '../eventbus.js'

export default {
    data() {
        return {
            product_details : [
                {pcode: 'p01', text : 'Apple MacBook Pro 갖고 싶어'},
                {pcode: 'p02', text : '삼성전자 Sens Desktop'},
                {pcode: 'p03', text : 'LogiTech Mouse'}
            ],
            products : [],
        }
    },
    created() {
        EventBus.$on('sendEvent', (payload) => {
            this.products = payload; //proucts[0] : code, products[1] = pname
        })
    }
}
</script>
<style scoped>
 h4 {
     font-size: 2em;
     background-color: wheat;
 }
 ul {
     background-color: teal;
     margin: 5px;
     border: 1px solid black;
 }
 ul li {
     list-style-type: none;
     background-color: wheat;
     padding: 10px;
 }
</style>