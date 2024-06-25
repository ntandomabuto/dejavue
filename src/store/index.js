import { createStore } from 'vuex'

export default createStore({
  state: {
    gaming_consoles:null,
    cars:null,
    friends:null
  },
  getters: {
  },
  mutations: {
    setCars(state, info){
      state.cars = info
    },
    setGamingConsoles(state,info){
      state.gaming_consoles = info
    },
    setFriends(state,info){
      state.friends = info
    }
  },
  actions: {
    async getCars(context){
      let fetchData = await fetch('https://ntandomabuto.github.io/deja/index.json');
      let motor = await fetchData.json();
      let {cars} = motor
      // console.log('scc');
      context.commit('setCars', cars)
    },
    async getGamingConsoles(context){
      let fetchData = await fetch('https://ntandomabuto.github.io/deja/index.json');
      let game = await fetchData.json()
      let {gaming_consoles} = game
      // console.log('scc');
      context.commit('setGamingConsoles', gaming_consoles)
    },
    async getFriends(context){
      let fetchData = await fetch('https://ntandomabuto.github.io/deja/index.json');
      let {friends} = await fetchData.json()
      console.log('scc');
      context.commit('setFriends', friends)
    }
    // async getCars({commit}){
    // let fetchData = await fetch('https://ntandomabuto.github.io/deja/');
    // let data = await fetchData.json();
    // let {cars, gaming_consoles,friends} = data
    // console.log(data);
    // commit('setCars',cars)
    // commit('setGamingConsoles',gaming_consoles)
    // commit('setFriends',friends)
    // },
  },
  modules: {
  }
})
