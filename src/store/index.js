import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);




export default new Vuex.Store({
    state:{
        goodsArr:[],
        foodDetail:[],
        goods:[],
        ratings:[],
        storeInfo:{},
        storeAd:{},
        totalPrice:0,
        isActive:false,
        enough:'￥20元起送'
    },
    mutations:{
        displayFoods(state, data) {
            let goods = [];
            let detail = [];
            let info = data.goods;
            for(let i = 0, len = info.length; i < len; i ++) {
                goods.push(info[i].name);
                detail.push(info[i]);
            }
            state.goods = goods;
            state.foodDetail = detail;
        },
        showRate(state, data) {
            state.ratings = data.ratings;
            state.storeInfo = data.seller;
        },
        showStore(state, data) {
            state.storeAd = data.seller;
        },
        addPrice(state,data) {
            state.totalPrice += data.nowPrice; 
            state.isActive = true;
            if(state.totalPrice >= 20) {
                state.enough = '去结算';
            }
        },
        reducePrice(state, data) {
            state.totalPrice -= data.nowPrice;
            if(state.totalPrice < 20) {
                state.enough = '￥20起送';
            }
            if(state.totalPrice === 0) {
                state.isActive = false;
            }             
        }
    },
    actions:{
        addInfo({commit}, data) {
            commit('showStore', data);
            commit('displayFoods', data);
            commit('showRate', data);
        }
    }
})