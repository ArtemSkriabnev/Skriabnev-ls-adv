<template lang="pug">
  header.head
    .container.head__container
      .head__user-avatar
        img(src="~images/content/user.jpg" alt="avatar" class="head__user-pic" )
      .head__content
        .head__user-name Артем Скрябнев
        .head__title Панель администрирования
        .head__exit
          a.head__exit-link(href="#") Выйти


</template>

<script>
export default {
  name: "head1"
}
</script>

<style lang="postcss" scoped>
@import url("../../styles/mixins.pcss");

.head {
  min-height: 80px;
  background: linear-gradient(to top, #3e3e59, #454573);
  display: flex;
  align-items: center;
  color: #fff;
}

.head__container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.head__user-avatar {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 20px;  
}

.head__user-pic {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.head__content {
  display: flex;
  align-items: center;
  flex: 1;

  @include phones {
    flex-direction: column;
    align-items: flex-start;
  }
}
.head__user-name {
  font-size: 18px;
  font-weight: 600;
  line-height: 1.89;
  margin-right: 28px;

  @include phones {
    font-size: 16px;
  }
}

.head__title {
  font-size: 14px;
  font-weight: normal;
  opacity: 0.5;
  line-height: 2.43;

  @include phones {
    display: none;
  }
}

.head__exit {
  margin-left: auto;
  @include phones {
    margin-left: 0;
  }
}

.head__exit--link {
  font-size: 16px;
  font-weight: normal;
  opacity: 0.7;
  line-height: 1.5;
  text-decoration: underline;

  @include phones {
    font-size: 14px;
  }
}

</style>