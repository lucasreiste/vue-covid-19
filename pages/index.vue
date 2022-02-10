<template>
  <div class="container">
    <NavBar />
    <c-flex width="full" text-align="center" justify-content="center">
      <c-box
        p="10"
        m="4"
        align-items="center"
        justify-content="space-between"
        max-w="sm"
        overflow="hidden"
        max-width="50rem"
      >
        <c-box m="2">
          <c-image
            h="180px"
            w="600px"
            :src="require('@/images/covid_img.png')"
          />
        </c-box>
        <c-heading mb="4">
          COVID-19 Data Tracker
        </c-heading>
        <c-text font-size="lg">
          Informações sobre a situação da COVID-19 em todo o mundo!
        </c-text>
        <c-box
          m="3"
        >
          <c-input v-model="searchCountry" placeholder="Digite o nome do pais" size="lg" @change="filterCountry" />
        </c-box>
      </c-box>
    </c-flex>
    <div class="container">
      <body v-show="!loading">
        <CountryBoxes />
      </body>

      <c-flex v-if="loading" width="full" text-align="center" justify-content="center" class="loader">
        <c-spinner
          thickness="4px"
          speed="0.65s"
          empty-color="green.200"
          color="vue.500"
          size="xl"
        />.
      </c-flex>
    </div>
  </div>
</template>

<script lang="js">
import { mapState, mapActions } from 'vuex'

export default {
  name: 'App',
  data () {
    return {
      searchCountry: ''
    }
  },
  computed: {
    ...mapState([
      'covid_data',
      'filtered_countries',
      'loading'
    ])
  },
  methods: {
    ...mapActions(['getCovidData']),
    filterCountry () {
      const userSearch = this.covid_data.filter((country) => {
        return country.country_name.toLowerCase().includes(this.searchCountry.toLowerCase())
      })
      this.$store.commit('SET_FILTERED_SEARCH', userSearch)
    }
  }
}
</script>
<style>
.loader {
  background: #ffffff;
  color: #666666;
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  padding-top: 25%;
  opacity: .80;
}

</style>
