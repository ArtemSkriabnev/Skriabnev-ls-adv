<template lang="pug">
  
  .wrapper.admin__wrapper
    //- .h1 dks
    head1
    navigation

    .page__wrapper(:class="{ 'page__wrapper--dark': $route.path === '/login' }")

      //- .maincontent
      router-view
</template>

<script>
import About from "./pages/about";
import Works from "./pages/works";
import Reviews from "./pages/reviews";

export default {
  components: {
    About,
    Works,
    Reviews,

    head1: () => import("./components/head1"),
    navigation: () => import("./components/navigation")
  }
}
</script>

<style lang="postcss">
@import url("https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800");
@import "normalize.css";
@import url("../styles/mixins.pcss");
@import url("./styles/base.pcss");
@import "./styles/blocks/*.pcss";

.container {
  margin: 0 auto;
  max-width: 1080px;
  width: 95%;

  @include phones {
    width: 85%;
  }
}

button {
  padding: 0;
  background: transparent;
}
</style>