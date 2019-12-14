<template>
    <ul>
        <li v-for="product in products"
        :key="product.pcode"
        @click="showDetail(product.pcode, $event)">{{product.pname}}</li>
    </ul>
</template>

<script>
import EventBus from '../eventbus.js'
export default {
    data() {
        return {
            products : [
                {pcode: 'p01', pname:'Notebook'},
                {pcode: 'p02', pname:'Computer'},
                {pcode: 'p03', pname:'Mouse'}
            ],
        }
    },
     
    methods : {
        showDetail(incode, $event) {
            const payload = [incode, $event.target.innerHTML];
            // 괄호로 묶어도 되고 배열로 보내도 됨
            //$emit은 보통 첫번째 argu만 보내고 2번째는 보통 메세지를 보냄(payload)
            // alert(payload);
            EventBus.$emit('sendEvent', payload);
        }
    }
}
</script>
<style scoped>
ul {
    list-style-type: none;
    background-color: bisque;
    padding: 10px;
}
ul li {
    background-color: teal;
    margin: 5px;
    border : 1px solid black;
    color : white;
}
</style>