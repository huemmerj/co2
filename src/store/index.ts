import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    Products: [

    ],
    Productlists: [
      {
        id:'1',
        name:'Computer',
        description:'Voll der Coole PC',
        categoryId:'1',
        productListEntries: [
          {
            count: 20,
            productList: [
              {
                id:20,
                name:'schraube 1',
                categoryId:'10'
              }
            ]
          }
        ]
      }
    ],
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
});
