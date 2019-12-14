const bus = new Vue();
Vue.component('result-component', {
    template : `
<div>
    <h2>쌍용은행</h2>
    <h4>대기자 수 : {{count}} 명.</h4>
</div>
`,
    data(){
        return { 
            count : 0
        }
    },
    created() {
        //subscribing
        // function으로 쓰면  this.count가 뭔지 몰라서 화살표 연산자를 써줘야 함
        bus.$on('add', () => {
            this.count += 1
        });
        bus.$on('subtract', () => {
            if(this.count > 0 ) {
                this.count -=1
            }
        });
    }
});
Vue.component('cust-component', { //대기자 수 늘리기
    template : `
<div>
    <button @click="countup">번호표 뽑기</button>
</div>
`,
    methods : {
        countup() {
            bus.$emit('add');
        }
    }
});
Vue.component('teller-component', { //대기자 수 줄이기
    template : `
<div>
    <button @click="countdown">서비스처리하기</button>
</div>
`,
    methods : {
        countdown() {
            bus.$emit('subtract');
        }
    }
});

let vm = new Vue({
    el : '#app',
})