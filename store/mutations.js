const mutations = {
  SET_COVID_DATA (state, data) {
    state.covid_data = data
  },
  SET_LOADING (state, data) {
    state.loading = data
  },
  SET_FILTERED_SEARCH (state, data) {
    state.filtered_countries = data
  }
}
export default mutations
