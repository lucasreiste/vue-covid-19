<template>
  <c-box
    as="nav"
    h="60px"
    px="4"
    d="flex"
    align-items="center"
    shadow="sm"
  >
    <c-link
      as="nuxt-link"
      to="/"
      color="brand.700"
      font-weight="bold"
      :_hover="{ color: 'brand.900' }"
    >
      COVID-19 Data Tracker
      <c-image
        rounded="full"
        style="float: right;"
        h="30px"
        w="30px"
        src="https://marianazorron.com.br/site/wp-content/uploads/2020/04/corona-4931132_1280.png"
      />
    </c-link>

    <c-box
      as="ul"
      color="gray.500"
      d="flex"
      align-items="center"
      list-style-type="none"
      ml="auto"
    >
      <c-box as="li" mr="8">
        <c-link
          color="gray.500"
          :_hover="{ color: 'brand.400' }"
          is-external
          href="https://github.com/lucasreiste"
        >
          Made with <svg viewBox="0 0 1792 1792" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" style="height: 0.8rem;"><path d="M896 1664q-26 0-44-18l-624-602q-10-8-27.5-26T145 952.5 77 855 23.5 734 0 596q0-220 127-344t351-124q62 0 126.5 21.5t120 58T820 276t76 68q36-36 76-68t95.5-68.5 120-58T1314 128q224 0 351 124t127 344q0 221-229 450l-623 600q-18 18-44 18z" fill="#e25555" /></svg> by Lucas
        </c-link>
      </c-box>
    </c-box>
  </c-box>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>
