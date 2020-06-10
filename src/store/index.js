import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

  },

  mutations: {

  },

  actions: {
    getPhotos() {
      return fetch("https://api.unsplash.com/photos/?client_id=BI0D1wTnJGkLNMD9TS2TL6uvH1VIz5r05OEEJ1de-As&page=1&per_page=40").then(res => {
        console.log(res);
      });
    }
  },

  modules: {

  }
})
