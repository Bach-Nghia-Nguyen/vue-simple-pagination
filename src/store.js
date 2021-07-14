import { createStore } from "vuex";
import axios from "axios";

const store = createStore({
  state() {
    return {
      transactions: [],
    };
  },
  mutations: {
    loadTransactions(state, payload) {
      state.transactions = payload;
    },
  },
  actions: {
    loadTrans(context) {
      axios
        .get("https://my-json-server.typicode.com/Sunpacker/vue-pagination/db")
        .then((response) => {
          let reversed = response.data.transactions.reverse();
          context.commit("loadTransactions", reversed);
        });
    },
  },
  getters: {
    trans: (state) => state.transactions,
  },
});

export default store;
