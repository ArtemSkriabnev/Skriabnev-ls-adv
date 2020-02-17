<template lang="pug">
  nav.nav
    .container.nav__container
      ul.nav__list
        li.nav__item(v-for="tab in tabs")
          router-link(
            :data-text="tab.title" 
            :to="tab.href"
            exact-active-class="active"
          ).nav__link        

</template>


<script>
export default {
  data () {
    return {
      tabs: [
        { title: "Обо мне", href: "/"},
        { title: "Работы", href: "/works"},
        { title: "Отзывы", href: "/reviews"}
      ]
    };
  },

  // name: 'Navigation'
  

};
</script>


<style lang="postcss" scoped>
@import url("../../styles/mixins.pcss");


 .nav {
  /* min-height: 77px;   */
  width: 100%;
}



.nav__list {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  max-width: 300px;

   @include phones {
    justify-content: center;
  }
}

.nav__item {
  width: 33.3%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 16px;
  font-weight: normal;
  color: #2d3c4e;

  @include phones {
    font-size: 14px;
  }
}


.nav__link {
  white-space: nowrap;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  border-bottom: 3px solid transparent;
  text-decoration: none;
  &:before {
    content: attr(data-text);
  }

}


.nav__link:hover, 
.nav__link.active {
  color: #3f35cb;
  font-weight: 600;
  border-bottom: 3px solid #3f35cb;
}



</style>