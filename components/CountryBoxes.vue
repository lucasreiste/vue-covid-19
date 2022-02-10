<template>
  <div class="container">
    <c-box ml="10" p="4">
      <c-heading font-size="2xl">
        Lista de Paises
      </c-heading>
    </c-box>
    <c-grid
      template-columns="repeat(auto-fit, 20rem)"
      gap="6"
      justify-content="center"
    >
      <div
        v-for="(sizeCountries, i) in sizeCountries"
        :key="sizeCountries"
      >
        <c-box
          v-show="filteredCountries[i].cases"
          border-width="1px"
          rounded="lg"
          overflow="hidden"
        >
          <c-image
            :src="getCountryISOCodeFlag(filteredCountries[i].country_name)"
          />
          <c-box p="5">
            <c-box
              d="flex"
              align-items="baseline"
            >
              <c-badge rounded="full" px="2">
                Casos de COVID-19:
              </c-badge>
              <c-badge rounded="full" px="2" variant-color="red">
                {{ filteredCountries[i].cases || 'Não Disponível' }}
              </c-badge>
            </c-box>
            <c-box
              mt="3"
              font-weight="bold"
              as="h6"
              align="center"
              line-height="tight"
              is-truncated
            >
              <c-text font-size="xl">
                {{ filteredCountries[i].country_name }}
              </c-text>
            </c-box>
            <c-divider />
            <c-box
              align="center"
            >
              <c-badge
                mx="2"
                variant="outline"
              >
                Informações Gerais
              </c-badge><br>
              <div>
                <c-badge rounded="full" px="2">
                  <span>Mortes</span>
                </c-badge>
              </div>

              <div>
                <c-badge rounded="full" px="2" variant-color="red">
                  {{ filteredCountries[i].deaths }}
                </c-badge>
              </div>

              <div>
                <c-badge rounded="full" px="2">
                  Total de pessoas recuperadas:
                </c-badge>
              </div>
              <div>
                <c-badge rounded="full" px="2" variant-color="green">
                  {{ filteredCountries[i].total_recovered }}
                </c-badge>
              </div>
              <div>
                <c-badge rounded="full" px="2">
                  Novos casos:
                </c-badge>
              </div>
              <div>
                <c-badge rounded="full" px="2" variant-color="red">
                  {{ filteredCountries[i].new_cases }} / Dia
                </c-badge>
              </div>
              <div>
                <c-badge rounded="full" px="2">
                  Total de casos a cada 1m de habitantes
                </c-badge>
              </div>

              <div>
                <c-badge rounded="full" px="2" variant-color="red">
                  {{ filteredCountries[i].total_cases_per_1m_population }}
                </c-badge>
              </div>
              <div>
                <c-badge rounded="full" px="2">
                  Quantidade de testes realizados
                </c-badge>
              </div>
              <div>
                <c-badge rounded="full" px="2" variant-color="green">
                  {{ filteredCountries[i].total_tests }}
                </c-badge>
              </div>
              <div>
                <c-badge rounded="full" px="2">
                  Testes realiz. a cada 1M de habitantes
                </c-badge>
              </div>
              <div>
                <c-badge rounded="full" px="2" variant-color="green">
                  {{ filteredCountries[i].tests_per_1m_population }}
                </c-badge>
              </div>
            </c-box>
          </c-box>
        </c-box>
      </div>
    </c-grid>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import countryEnum from '../src/countryEnum'

export default {
  name: 'CountryBoxes',
  computed: {
    ...mapState(['covid_data', 'property', 'filtered_countries']),

    filteredCountries () {
      if (this.filtered_countries.length > 0) {
        return this.filtered_countries
      }
      return this.covid_data
    },
    sizeCountries () {
      return this.filteredCountries.length
    }
  },
  beforeMount () {
    this.getCovidData()
  },
  methods: {
    ...mapActions(['getCovidData']),

    getCountryISOCodeFlag (countryName) {
      let isoCode = Object.keys(countryEnum).find(key => countryEnum[key] === countryName)
      if (isoCode) {
        isoCode = isoCode.toLowerCase()
        return require('../static/flags/' + isoCode + '.png')
      } else {
        return require('../static/flags/indisponivel.png')
      }
    }

  }
}
</script>
