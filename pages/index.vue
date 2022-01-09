<template>
  <div class="container">
    <NavBar />
    <div v-if="!loading">
      <c-simple-grid
        class="teste"
        min-child-width="300px"
        spacing="20px"
      >
        <div
          v-for="(country_size, i) in country_size"
          :key="country_size"
        >
          <c-box
            v-if="covid_data[i].cases"
            border-width="1px"
            rounded="lg"
            overflow="hidden"
          >
            <c-image
              :src="getCountryISOCodeFlag(covid_data[i].country_name)"
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
                  {{ covid_data[i].cases || 'Olá' }}
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
                  {{ covid_data[i].country_name }}
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
                    {{ covid_data[i].deaths }}
                  </c-badge>
                </div>

                <div>
                  <c-badge rounded="full" px="2">
                    Total de pessoas recuperadas:
                  </c-badge>
                </div>
                <div>
                  <c-badge rounded="full" px="2" variant-color="green">
                    {{ covid_data[i].total_recovered }}
                  </c-badge>
                </div>
                <div>
                  <c-badge rounded="full" px="2">
                    Novos casos:
                  </c-badge>
                </div>
                <div>
                  <c-badge rounded="full" px="2" variant-color="red">
                    {{ covid_data[i].new_cases }} / Dia
                  </c-badge>
                </div>
                <div>
                  <c-badge rounded="full" px="2">
                    Total de casos a cada 1m de habitantes
                  </c-badge>
                </div>

                <div>
                  <c-badge rounded="full" px="2" variant-color="red">
                    {{ covid_data[i].total_cases_per_1m_population }}
                  </c-badge>
                </div>
                <div>
                  <c-badge rounded="full" px="2">
                    Quantidade de testes realizados
                  </c-badge>
                </div>
                <div>
                  <c-badge rounded="full" px="2" variant-color="green">
                    {{ covid_data[i].total_tests }}
                  </c-badge>
                </div>
                <div>
                  <c-badge rounded="full" px="2">
                    Testes realiz. a cada 1M de habitantes
                  </c-badge>
                </div>
                <div>
                  <c-badge rounded="full" px="2" variant-color="green">
                    {{ covid_data[i].tests_per_1m_population }}
                  </c-badge>
                </div>
              </c-box>
            </c-box>
          </c-box>
        </div>
      </c-simple-grid>
    </div>
    <div v-else>
      <div class="loader">
        <c-spinner
          thickness="4px"
          speed="0.65s"
          empty-color="green.200"
          color="vue.500"
          size="xl"
        />
      </div>
    </div>
  </div>
</template>

<script lang="js">
import {
  CBox,
  CSpinner
} from '@chakra-ui/vue'

import { mapState, mapActions } from 'vuex'
import countryEnum from '../src/countryEnum'
import NavBar from '../components/NavBar'

export default {
  name: 'App',
  components: {
    CBox,
    CSpinner,
    NavBar
  },
  inject: ['$chakraColorMode', '$toggleColorMode'],
  data () {
    return {
      showModal: false,
      mainStyles: {
        dark: {
          bg: 'gray.700',
          color: 'whiteAlpha.900'
        },
        light: {
          bg: 'white',
          color: 'gray.900'
        }
      }
    }
  },
  computed: {
    ...mapState([
      'casa',
      'covid_data',
      'country_size',
      'property',
      'loading'
    ]),
    colorMode () {
      return this.$chakraColorMode()
    },
    theme () {
      return this.$chakraTheme()
    },
    toggleColorMode () {
      return this.$toggleColorMode
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
        return require('../static/flags/br.png')
      }
    }
  }
}
</script>
<style>
.teste {
  margin: 5rem;
}
.loader {
  background: #ffffff;
  color: #666666;
  position: fixed;
  height: 100%;
  width: 100%;
  z-index: 5000;
  top: 0;
  left: 0;
  float: left;
  text-align: center;
  padding-top: 25%;
  opacity: .80;
}

</style>
