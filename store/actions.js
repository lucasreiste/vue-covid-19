const actions = {
  async getCovidData ({ commit }) {
    this.$axios.setHeader('x-rapidapi-host', 'corona-virus-world-and-india-data.p.rapidapi.com')
    this.$axios.setHeader('x-rapidapi-key', '37d24df367msh5417f397e90ad84p171f31jsn761294a9732a')
    commit('SET_LOADING', true)
    const data = await this.$axios.$get('https://corona-virus-world-and-india-data.p.rapidapi.com/api')
    commit('SET_COVID_DATA', data.countries_stat)
    commit('SET_COVID_DATA_SIZE', data.countries_stat)
    commit('SET_LOADING', false)
  }
}
export default actions
