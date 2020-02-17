<template lang="pug">
  .login
    .login__form 
      //- .login-btn  
      //-   button.login__btn-delete  
      //-     .btn-edit--icon.remove
      form(@submit.prevent="login").form__tag

        h1.form__title Авторизация

        .form__row
          app-input(
            title="Логин"
            icon="user"
            v-model="user.name"
          )

          //- label.form__block
          //-   .form__label Логин

          //-   .input
          //-     .input__pic
          //-       .input__pic-icon.user
          //-     input.form__input(type="text" name="login" placeholder="" value="" required)
        .form__row
          app-input(
            title="Пароль"
            icon="key"
            type="password"
            v-model="user.password"
          )

          //- label.form__block
          //-   .form__label Пароль
          //-   .input
          //-     .input__pic
          //-         .input__pic-icon.link
          //-     input.form__input(type="password" name="password" placeholder="" value="" required)

        .form__row-btn  
          button.form__btn-submit(type="submit") Отправить


</template>


<script>
// import $axios from "../../requests";

export default {
  components: {
    appInput: () => import("../components/input")
  },

  data() {
    return {
      user: {
        name: "",
        password: ""
      }
    };
  },

  // methods: {
  //   async login() {
  //     try {
  //       const response = await $axios.post("/login", this.user);
  //       const token = response.data.token;
  //       localStorage.setItem("token", token);
  //       $axios.defaults.headers["Authorization"] = `Bearer ${token}`;
  //       this.$router.replace("/");
  //     } catch (error) {
  //       console.warn("Неверный логин или пароль");
  //     }
  //   }
  // }
  
};
</script>


<style lang="postcss" scoped>
@import url("https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800");
@import url("../../styles/mixins.pcss");

.login {
  height: 100vh;
  min-height: 100vh;
  /* background: linear-gradient(rgba(255, 250, 255, 0.5), rgba(41, 39, 39, 0.5)),
    url("~images/content/admin/main/bg_main.png") center center no-repeat;
  background-size: cover; */

  display: flex;
  align-items: center;
  justify-content: center;
  color: #2d3c4e;

  @include phones {
    background: none;
  }
}

.login__form {
  width: 100%;
  max-width: 563px;
  min-height: 517px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px 77px;

  position: relative;

  @include phones {
    height: 100%;
    padding: 0px 10%;
  }
}

.form__tag {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.login__btn-delete {
  display: flex;
  align-items: center;
  background-color: transparent;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50%;
  padding: 0;

  position: absolute;
  top: 5%;
  right: 5%;

  @include phones {
    top: 5%;
    right: 10%;
  }
}

.btn-edit--icon.remove {
  width: 19px;
  height: 19px;
  background-image: svg-load(
    "remove.svg",
    fill=#2d3c4e,
    width=100%,
    height=100%
  );
}

.form__title {
  font-size: 36px;
  font-weight: 600;
  line-height: 1.67;
  text-align: center;
  margin-bottom: 30px;

  @include phones {
    font-size: 30px;
  }
}

.form__row {
  /* border-bottom: 2px solid #ccc; */
  margin-bottom: 40px;
}

.form__block {
  font-size: 16px;
  font-weight: 600;
  color: #2d3c4e;
}

.form__label {
  opacity: 0.5;
  margin-bottom: 20px;
  padding-left: 12%;
}

.input {
  width: 100%;
  display: flex;
  align-items: center;
  padding-bottom: 15px;
}

.input__pic {
  display: flex;
  align-items: center;
  padding-right: 20px;
}

.input__pic-icon {
  width: 26px;
  height: 30px;
  background-repeat: no-repeat;
  background-position: 50%;
  opacity: 0.3;
}

.input__pic-icon.user {
  background-image: svg-load("user.svg", fill=#2d3c4e, width=100%, height=100%);
}
.input__pic-icon.link {
  background-image: svg-load("link.svg", fill=#2d3c4e, width=100%, height=100%);
}

.form__input {
  width: 85%;
  font-size: 18px;
  font-weight: 800;
  color: #2d3c4e;
  outline: none;
  border: none;
  background: transparent;
  line-height: 2;

  @include phones {
    font-size: 14px;
  }
}

.form__row-btn {
  display: flex;
  justify-content: center;

  @include tablets {
    justify-content: center;
  }
}

.form__btn-submit {
  background-image: linear-gradient(to right, #9300e8 0%, #4a00ed 100%);
  border: none;
  padding: 33px 120px;
  border-radius: 40px 5px;
  color: #ffffff;
  margin-top: 38px;
  font-size: 18px;
  font-weight: 700;
  text-transform: uppercase;
  &:hover {
    background-image: linear-gradient(to right, #4a00ed 0%, #9300e8 100%);
  }
}



.form__btn:focus {
  box-shadow: 1px 1px 10px 3px lightskyblue;
  transition: 0.3s;
}
</style>