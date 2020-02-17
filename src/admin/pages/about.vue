<template lang="pug">
  main.content
    .container.page__container
      .content__title
        .content__title-text
          span Блок «Обо мне»
        .content__title-btn
          button(type="button").btn.btn--add.btn--text Добавить группу
          //- a.btn__add(href="#")
          //-   .btn__add-circle 
          //-   .btn__add-text Добавить группу

      .content__skill
        ul.skill__list 
                
          li.skill__item
            .skill__title
              .skill__title-input
                input.skill__input-name(type="text" name="name" placeholder="Название новой группы" ) 
              .skill__title-icon
            ul.skill__table
              li.skill__box
                .skill__desc
                  input.skill__desc-name(type="text" name="name" placeholder="Git" ) 
                .skill__percent
                  input.percent-number(type="number" name="percent" placeholder="100")
                  .percent %
                .skill__btn
                  .skill__btn-edit
                  .skill__btn-delete
              
            .skill__add 
              .new__skill
                input.new__skill-name(type="text" name="name" placeholder="Новый навык" )
              .new__percent
                  input.new__percent-number(type="number" name="percent" placeholder="100")
                  .percent %
              button(type="submit").btn.btn--add.btn--big


              //- 2группа
          li.skill__item
            .skill__title
              .skill__title-input
                input.skill__input-name(type="text" name="name" placeholder="Название новой группы" value="Workflow" )
              .skill__title-icon
            ul.skill__table
              li.skill__box
                .skill__desc
                  input.skill__desc-name(type="text" name="name" placeholder="" value="Git") 
                .skill__percent
                  input.percent-number(type="number" name="percent" placeholder="100")
                  .percent %
                .skill__btn
                  .skill__btn-edit
                  .skill__btn-delete
              li.skill__box
                .skill__desc
                  input.skill__desc-name(type="text" name="name" placeholder="" value="Terminal") 
                .skill__percent
                  input.percent-number(type="number" name="percent" placeholder="100")
                  .percent %
                .skill__btn
                  .skill__btn-edit
                  .skill__btn-delete
              li.skill__box
                .skill__desc
                  input.skill__desc-name(type="text" name="name" placeholder="" value="Gulp") 
                .skill__percent
                  input.percent-number(type="number" name="percent" placeholder="100")
                  .percent %
                .skill__btn
                  .skill__btn-edit
                  .skill__btn-delete
              li.skill__box
                .skill__desc
                  input.skill__desc-name(type="text" name="name" placeholder="" value="Webpack") 
                .skill__percent
                  input.percent-number(type="number" name="percent" placeholder="100")
                  .percent %
                .skill__btn
                  .skill__btn-edit
                  .skill__btn-delete
                
            .skill__add 
              .new__skill
                input.new__skill-name(type="text" name="name" placeholder="Новый навык" )
              .new__percent
                  input.new__percent-number(type="number" name="percent" placeholder="100")
                  .percent %
              button(type="submit").btn.btn--add.btn--big


              //- 3группа
          li.skill__item
            .skill__title
              .skill__title-input
                input.skill__input-name(type="text" name="name" placeholder="Название новой группы" value="Frontend")
              .skill__title-icon
            ul.skill__table
              li.skill__box
                .skill__desc
                  input.skill__desc-name(type="text" name="name" placeholder="" value="Html5") 
                .skill__percent
                  input.percent-number(type="number" name="percent" placeholder="100")
                  .percent %
                .skill__btn
                  .skill__btn-edit
                  .skill__btn-delete
              li.skill__box
                .skill__desc
                  input.skill__desc-name(type="text" name="name" placeholder="" value="CSS3" ) 
                .skill__percent
                  input.percent-number(type="number" name="percent" placeholder="100")
                  .percent %
                .skill__btn
                  .skill__btn-edit
                  .skill__btn-delete
              li.skill__box
                .skill__desc
                  input.skill__desc-name(type="text" name="name" placeholder="" value="JavaScript" ) 
                .skill__percent
                  input.percent-number(type="number" name="percent" placeholder="100")
                  .percent %
                .skill__btn
                  .skill__btn-edit
                  .skill__btn-delete
              li.skill__box
                .skill__desc
                  input.skill__desc-name(type="text" name="name" placeholder="" value="Jquery и Vue.js") 
                .skill__percent
                  input.percent-number(type="number" name="percent" placeholder="100")
                  .percent %
                .skill__btn
                  .skill__btn-edit
                  .skill__btn-delete
                
            .skill__add 
              .new__skill
                input.new__skill-name(type="text" name="name" placeholder="Новый навык" )
              .new__percent
                  input.new__percent-number(type="number" name="percent" placeholder="100")
                  .percent %
              button(type="submit").btn.btn--add.btn--big


</template>



<script>
export default {
  name: "About"
};
</script>


<style lang="postcss" scoped>
@import url("../../styles/mixins.pcss");

/* Основная часть */

.content {
  min-height: 974px;
  /* background: linear-gradient(rgba(255, 250, 255, 0.5), rgba(41, 39, 39, 0.5)),
    url("~images/content/admin/main/bg_main.png") center center no-repeat; */
  background-size: cover;
}

.content__title {
  display: flex;
  align-items: center;
  padding: 61px 0px;

  @include tablets {
    padding: 51px 0px;
  }

  @include phones {
    padding: 40px 0px;
    flex-direction: column;
    align-items: flex-start;
  }
}

.content__title-text {
  font-size: 21px;
  font-weight: bold;
  color: #2d3c4e;
  margin-right: 59px;

  @include phones {
    font-size: 18px;
    margin-right: 0;
    margin-bottom: 32px;
  }
}

.content__title-btn {
  display: flex;
  font-size: 16px;
  font-weight: 600;
  color: #ff9a00;

  @include tablets {
    font-size: 14px;
  }
}

.btn__add {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.btn__add-circle {
  width: 21px;
  height: 21px;
  border: 1px solid transparent;
  border-radius: 50%;
  background-image: svg-load(
    "remove.svg",
    fill=#fff,
    width=100%,
    height=100%,
    style= "transform: rotate(45deg)"
  );
  background-color: #ff9d00;
  background-size: 8px 8px;
  background-repeat: no-repeat;
  background-position: 50%;
  margin-right: 13px;
}

.btn__add-text {
  font-size: 16px;
  font-weight: 600;
  line-height: 2.12;

  @include tablets {
    font-size: 14px;
  }
}

.skill__list {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;

  @include tablets {
    flex-direction: column;
  }
}

.skill__item {
  display: flex;
  flex-direction: column;
  width: 49%;
  min-height: 387px;
  background-color: #fff;
  box-shadow: 4px 3px 20px 0 rgba(0, 0, 0, 0.4);
  padding: 30px 27px;
  margin-bottom: 30px;

  /* @include tablets {
    &:first-child {
      display: none;
    }
  } */

  @include tablets {
    width: 100%;
  }
  
}

.skill__title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid #ccc;
  padding-bottom: 15px;
  margin-bottom: 10px;
}

.skill__title-input {
  width: 53%;
}

.skill__input-name {
  width: 100%;
  font-size: 18px;
  font-weight: 600;
  color: #2d3c4e;
  outline: none;
  border: none;
  border-bottom: 1px solid transparent;
  padding-bottom: 10px;

  @include phones {
    font-size: 16px;
  }
}

.skill__input-name:focus {
  border-bottom: 1px solid #000;
}

.skill__title-icon {
  width: 14px;
  height: 14px;
  cursor: pointer;
  background: svg-load("pencil.svg", fill=#a0a5b1, width=100%, height=100%);
}

.skill__table {
  margin-bottom: auto;
}

.skill__box {
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  font-weight: normal;
  color: #2d3c4e;

  @include phones {
    font-size: 14px;
  }
}

.skill__desc {
  width: 53%;
  margin-right: 20px;

  @include phones {
    width: 40%;
  }
}

.skill__desc-name {
  width: 100%;
  outline: none;
  border: none;
  line-height: 2;
  border-bottom: 1px solid transparent;
}
.skill__desc-name:focus {
  border-bottom: 1px solid #000;
}

.skill__percent {
  width: 14%;
  display: flex;
  align-items: center;

  @include phones {
    width: 20%;
  }
}

.percent-number {
  width: 75%;
  outline: none;
  border: none;
  line-height: 2;
  border-bottom: 1px solid transparent;
}
.percent-number:focus {
  border-bottom: 1px solid #000;
}

.skill__btn {
  display: flex;
  align-items: center;
}

.skill__btn-edit {
  width: 14px;
  height: 14px;
  cursor: pointer;
  background: svg-load("pencil.svg", fill=#a0a5b1, width=100%, height=100%);
  margin-right: 22px;
}

.skill__btn-delete {
  width: 14px;
  height: 14px;
  cursor: pointer;
  background: svg-load("trash.svg", fill=#a0a5b1, width=100%, height=100%);
}

.skill__add {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: 16px;
  font-weight: normal;
  color: #2d3c4e;
}

.new__skill {
  width: 40%;
  margin-right: 10px;

  @include phones {
    width: 50%;
  }
}

.new__skill-name {
  width: 100%;
  outline: none;
  border: none;
  line-height: 2;
  border-bottom: 1px solid #000;
}

.new__percent {
  width: 14%;
  display: flex;
  align-items: center;
  margin-right: 30px;

  @include phones {
    width: 19%;
    margin-right: 20px;
  }
}

.new__percent-number {
  width: 75%;
  outline: none;
  border: none;
  line-height: 2;
  border-bottom: 1px solid #000;
}

.btn__add-circle--big {
  width: 40px;
  height: 40px;
  border: 1px solid #fff;
  border-radius: 50%;
  background-image: svg-load(
    "remove.svg",
    fill=#fff,
    width=100%,
    height=100%,
    style= "transform: rotate(45deg)"
  );
  background-color: #ff9d00;
  background-size: 15px 15px;
  background-repeat: no-repeat;
  background-position: 50%;
}
</style>