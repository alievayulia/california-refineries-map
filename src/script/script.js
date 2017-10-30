import Vue from 'vue';
import Vuex from 'vuex';
import App from './view/app';
import VueRouter from 'vue-router';
import example from './view/example';
import pollutionmap from './view/pollutionmap';
import model from './model';

Vue.use(Vuex);
Vue.use(VueRouter);

App.store = new Vuex.Store({
    modules: model
});

const router = new VueRouter({
    routes: [{
        path: '/',
        component: pollutionmap
    }
/*    ,{
        path: '/pollutionmap',
        component: pollutionmap
    }*/
    ]
});

App.router = router;

export default new Vue(App);
