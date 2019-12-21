<template>
    <div>
        <table>
            <thead>
                <tr>
                    <th> 제품코드</th>
                    <th> 제품명</th>
                    <th> 가격</th>
                    <th> 설명</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="product in products" :key="product.pcode"
                @click="sendCode(product.pcode)">
                    <td>{{product.pcode}}</td>
                    <td>{{product.pname}}</td>
                    <td>{{product.price}}</td>
                    <td>{{product.description}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
export default {
    // 컴포넌트에서 data는 함수
    data() {
        return{
            products : [
                {pcode: 'p01', pname:'LG Gram Notebook', price: 1500000, description: 'OS: Windows10, CPU: Intel I9'},
                {pcode: 'p02', pname:'Logitech Mouse', price: 60000, description: 'Gamer들에게 환상적인 마우스입니다.'},
                {pcode: 'p03', pname:'Sejin Keyboard', price: 30000, description: '아직도 사라지지 않는 전설의 키보드'}
            ]
        }
    },
    methods: {
        sendCode(incode){
            //path, params는 안먹음. name, params를 써야 함
            const id = incode;
            // link를 클릭하는 것과 push(html5 history API)랑 같음
            this.$router.push({name: 'edit', params:{id:id}})
        }
    }
}
</script>