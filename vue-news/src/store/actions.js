import { fetchNewsList, fetchAskList, fetchJobsList, fetchUserInfo, fetchCommentItem, fetchList } from '../api/index.js';

export default {
  // // Promise
  // FETCH_NEWS(context) {
  //   return fetchNewsList()
  //     .then(response => {
  //       context.commit('SET_NEWS', response.data);
  //       return response;
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     })
  // },
  // async
  async FETCH_NEWS(context) {
    const response = await fetchNewsList();
    context.commit('SET_NEWS', response.data);
    return response;
  },
  async FETCH_JOBS({ commit }) {
    try {
      const response = await fetchJobsList()
      commit('SET_JOBS', response.data);
      return response; 
    } catch (error) {
      console.log(error);
    }
  },
  async FETCH_ASK({ commit }) {
    const response = await fetchAskList()
    commit('SET_ASK', response.data);
    return response;
  },
  async FETCH_USER({ commit }, name) {
    try {
      const response = await fetchUserInfo(name)
      commit('SET_USER', response.data);
      return response;  
    } catch (error) {
      console.log(error);      
    }
  },
  async FETCH_ITEM({ commit }, id) {
      try {
        const response = await fetchCommentItem(id)
        commit('SET_ITEM', response.data);
        return response;
      } catch (error) {
        console.log(error);        
      }
  },
  async FETCH_LIST( { commit }, pageName) {
      try {
        const response = await fetchList(pageName)
        commit('SET_LIST', response.data);
        return response;
      } catch (error) {
        console.log(error);
      }
  },
}