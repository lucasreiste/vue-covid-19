/* eslint-disable space-before-function-paren */
const mutations = {
  SET_COVID_DATA(state, data) {
    state.covid_data = data
  },
  SET_COVID_DATA_SIZE(state, data) {
    state.country_size = data.length
  },
  SET_LOADING(state, data) {
    state.loading = data
  }
}
export default mutations
