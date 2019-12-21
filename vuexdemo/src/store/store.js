import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//중앙 상태를 저장하기 위한 Store
export default new Vuex.Store({
    //mutation 외 다른 값은 변경하면 에러나게 처리하는 것 : strict
    strict: true, 
    state : {
        items : [
            {country: 'France', city: 'paris', attraction: '에펠탑', entrance_fee: 10},
            {country: 'USA', city: 'newyork', attraction: '자유의여신상', entrance_fee: 5}
        ],
        // 선택한 국가를 받아서 store(selectedCountry)에서 저장하고 travel-detail로 보냄 
        selectedCountry : ''
    },
})