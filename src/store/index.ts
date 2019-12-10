import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [

    ],
    categories: [
      {
        id:1,
        name:'PC-Componenten',
        count:10,
      },
      {
        id:2,
        name:'Küchengeräte',
        count:11,
      },
    ],
    productlists: [
      {
        id: '1',
        name: 'Computer',
        description: 'Voll der Coole PC',
        category: {
          id: 1,
          name: 'PC-Componenten',
        },
        productListEntries: [
          {
            count: 20,
            productList: {
              id: 20,
              name:'schraube 1',
              category: {
                name: 'PC-Componenten',
              },
            },
          },
          {
            count: 4,
            productList: {
              id: 30,
              name:'Kingston 16GB DDR6',
              category: {
                name: 'PC-Componenten',
              },
            },
          },
        ]
      },
      {
        id: 30,
        name:'Kingston 16GB DDR6',
        category: {
          name: 'PC-Componenten',
        },
      },
      {
        id: 20,
        name:'schraube 1',
        category: {
          name: 'PC-Componenten',
        },
      },
    ],
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
  getters: {
    productlists: state =>{
      return state.productlists
    },
    categories: state => {
      return state.categories
    },
    products: state => {
      return state.products
    }
  },
});
