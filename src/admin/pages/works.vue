<template lang="pug">
  main.content
    .container.page__container
      .content__title
        .content__title-text
          span Блок «Работы»
        
      .content__works
        .works__edit
          .edit__title
            span Редактирование Работы

          .edit__content

            .edit__image
              .edit__image--text
                span Перетащите или загрузите для загрузки изображения
              .edit__image--btn
                label(for="upload-pic").btn.btn--gradient ЗАГРУЗИТЬ

            .edit__form
              form.form__tag
                .form__row
                  label.form__block
                    .form__label Название
                    .input
                      input.form__input(type="text" name="name" placeholder="" value="Дизайн сайта для авто салона Porsche")
                .form__row
                  label.form__block
                    .form__label Ссылка
                    .input
                      input.form__input(type="text" name="name" placeholder="" value="https://www.porsche-pulkovo.ru")
                .form__row.form__row--textarea
                  label.form__block
                    .form__label Описание
                    .input
                      textarea.form__input.form__input--textarea(type="text" name="name" placeholder="") Порше Центр Пулково - является официальным дилером марки Порше в Санкт-Петербурге и предоставляет полный цикл услуг по продаже и сервисному обслуживанию автомобилей
                .form__row
                  label.form__block
                    .form__label Добавление тэга
                    .input
                      input.form__input(type="text" name="name" placeholder="" value="Jquery, Vue.js, HTML5")

                .edit-tags
                  ul.tags__list
                    li.tags__item
                      .tags__item--name HTML
                      .tags__item--remove
                    li.tags__item
                      .tags__item--name CSS
                      .tags__item--remove
                    li.tags__item
                      .tags__item--name javascript
                      .tags__item--remove
                      
                .form__row-btn  
                  .controls.edit-form__btns
                    .controls__btn: button(type="reset").btn.btn--link Отмена
                    .controls__btn: button(type="submit" :class="{ 'is-blocked': isBlocked }").btn.btn--gradient Сохранить

        .add__works
          ul.works__list
            li.works__item.works__item-first
              .works__add
                a.btn__add(href="#")
                  .works__add-btn
                  .works__add-text 
                   span Добавить работу 

            li.works__item
              .works__add
                .works__display
                  img(src="~images/content/slider-1.png" alt="слайд" class="works__display-pic")

                .works__desc
                  .works__desc-title
                    span Сайт школы образования
                  .works__desc-text
                    span Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                  .works__desc-link
                    a(href="http://loftschool.ru" target="_blank") http://loftschool.ru

                  .works__desc-btn  
                    button.works__btn-edit
                      .btn-edit--text Править
                      .btn-edit--icon.pen
                    button.works__btn-delete  
                      .btn-edit--text Удалить
                      .btn-edit--icon.remove
            li.works__item
              .works__add
                .works__display
                  img(src="~images/content/slider-2.png" alt="слайд" class="works__display-pic")

                .works__desc
                  .works__desc-title
                    span Сайт школы образования
                  .works__desc-text
                    span Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                  .works__desc-link
                    a(href="http://loftschool.ru" target="_blank") http://loftschool.ru

                  .works__desc-btn  
                    button.works__btn-edit
                      .btn-edit--text Править
                      .btn-edit--icon.pen
                    button.works__btn-delete  
                      .btn-edit--text Удалить
                      .btn-edit--icon.remove
                     
       
</template>



<script>
export default {
  name: "Works"
};
</script>


<style lang="postcss" scoped>
@import url("../../styles/mixins.pcss");

/* Основная часть */

.content {
  min-height: 974px;
 
}

.content__title {
  display: flex;
  align-items: center;
  padding: 61px 0px;

  @include tablets {
    padding: 51px 0px;
  }

  @include phones {
    padding: 41px 0px;
  }
}

.content__title-text {
  font-size: 21px;
  font-weight: bold;
  color: #2d3c4e;
  margin-right: 59px;

  @include phones {
    font-size: 18px;
  }
}

.works__edit {
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 775px;
  background-color: #fff;
  box-shadow: 4px 3px 20px 0 rgba(0, 0, 0, 0.4);
  padding: 30px 30px;
  margin-bottom: 30px;
  color: #2d3c4e;
  margin-bottom: 32px;

   @include phones {
    margin-bottom: 10px;
  }
}

.edit__title {
  font-size: 18px;
  font-weight: bold;
  border-bottom: 1px solid #ccc;
  padding-bottom: 25px;
  margin-bottom: 48px;

  @include tablets {
    margin-bottom: 25px;
  }

  @include phones {
    font-size: 16px;
  }
}

.edit__content {
  display: flex;
  justify-content: space-between;

  @include tablets {
    flex-direction: column;
    align-items: center;
  }
}

.edit__image {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 49%;
  max-width: 495px;
  height: 275px;
  background-color: #dee4ed;
  border: 1px dashed #a1a1a1;

  @include tablets {
    width: 100%;
    max-width: 465px;
    max-height: 275px;
    margin-bottom: 54px;
  }

  @include phones {
    max-width: 278px;
    max-height: 155px;
    margin-bottom: 40px;
  }
}

.edit__image--text {
  font-size: 16px;
  font-weight: 600;
  line-height: 2.12;
  text-align: center;
  opacity: 0.5;
  max-width: 230px;
  padding-bottom: 27px;

  @include phones {
    font-size: 14px;
  }
}

/* Кнопка */

.btn-load {
  width: 181px;
  height: 50px;
  text-transform: uppercase;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  background: linear-gradient(to top, #ea7400, #f29400);
}

.btn-load:hover {
  background: linear-gradient(to bottom, #d0731b, #dc9322);
  transition: 0.3s;
}

.btn-load:focus {
  box-shadow: 1px 1px 10px 3px lightskyblue;
  transition: 0.3s;
}

.edit__form {
  width: 49%;

  @include tablets {
    width: 100%;
    max-width: 465px;
  }
}

.form__row {
  border-bottom: 2px solid #ccc;
  margin-bottom: 30px;
}

.form__block {
  font-size: 16px;
  font-weight: 600;
  color: #2d3c4e;

  @include phones {
    font-size: 14px;
  }
}

.form__label {
  opacity: 0.5;
  margin-bottom: 20px;
}

.input {
  width: 100%;
}

.form__input {
  width: 85%;
  font-size: 16px;
  font-weight: 600;
  color: #2d3c4e;
  outline: none;
  border: none;
  background: transparent;
  padding-bottom: 18px;

  @include phones {
    font-size: 14px;
  }
}

.form__row--textarea {
  border-bottom: 2px solid transparent;
}

.form__input--textarea {
  width: 100%;
  border: 2px solid #ccc;
  line-height: 1.88;
  min-height: 146px;
  resize: none;
  padding: 14px 80px 14px 20px;

  @include phones {
    font-size: 14px;
    min-height: 205px;
    padding: 10px 14px;
  }
}

.edit-tags {
  margin-bottom: 40px;
}

.tags__list {
  display: flex;
}

.tags__item {
  display: flex;
  align-items: center;
  font-size: 13px;
  font-weight: 600;
  color: #2d3c4e;
  padding: 9px 17px;
  background: #f4f4f4;
  border-radius: 15px;
  margin-right: 9px;

  @include phones {
    justify-content: center;
    padding: 2% 4%;
    margin-right: 2%;
  }
}

.tags__item--name {
  opacity: 0.7;
  margin-right: 9px;
}

.tags__item--remove {
  width: 11px;
  height: 11px;
  background-image: svg-load(
    "remove.svg",
    fill=#2d3c4e,
    width=100%,
    height=100%
  );
  background-size: 11px 11px;
  background-repeat: no-repeat;
  background-position: 50%;
  cursor: pointer;
}

.form__row-btn {
  display: flex;

  @include tablets {
    justify-content: center;
  }
}

.form__btn--reset {
  font-size: 16px;
  font-weight: 600;
  color: #2d3c4e;
  text-decoration: none;
  cursor: pointer;
  background: transparent;
  border: 1px solid transparent;
  outline: none;
  margin-right: 59px;
  @include phones {
    font-size: 14px;
    margin-right: 4%;
  }
}
.form__btn--reset:hover {
  transform: translateY(-2px);
  transition: 0.3s;
}

.form__btn {
  width: 181px;
  height: 60px;
  text-transform: uppercase;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  background: linear-gradient(to top, #ea7400, #f29400);

  @include phones {
    font-size: 14px;
  }
}

.form__btn:hover {
  background: linear-gradient(to bottom, #d0731b, #dc9322);
  transition: 0.3s;
}

.form__btn:focus {
  box-shadow: 1px 1px 10px 3px lightskyblue;
  transition: 0.3s;
}

.works__list {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
}

.works__item {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30%;
  /* min-height: 556px; */
  background-color: #fff;
  margin-bottom: 30px;
  /* margin-right: 3%; */

  @include tablets {
    width: 48%;
  }

  @include phones {
    width: 100%;
    margin-bottom: 10px;
  }
}

.works__item-first {
  background: linear-gradient(to left, #006aed,#3f35cb);
  justify-content: center;

  @include phones {
    min-height: 111px;
  }
}

.works__add {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.btn__add {
  display: flex;
  flex-direction: column;
  align-items: center;

  @include phones {
    flex-direction: row;
  }
}

.works__add-btn {
  width: 150px;
  height: 150px;
  border: 2px solid #fff;
  border-radius: 50%;
  background-image: svg-load(
    "remove.svg",
    fill=#fff,
    width=100%,
    height=100%,
    style= "transform: rotate(45deg)"
  );
  background-color: #383bcf;
  background-size: 34px 34px;
  background-repeat: no-repeat;
  background-position: 50%;

  @include phones {
    width: 50px;
    height: 50px;
    background-size: 12px 12px;
    margin-right: 20px;
  }
}

.works__add-text {
  max-width: 95px;
  text-align: center;
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  line-height: 1.67;
  padding-top: 30px;

  @include phones {
    max-width: 150px;
    font-size: 16px;
    padding-top: 0px;
  }
}

.works__display {
  width: 100%;
  max-height: 190px;
  overflow: hidden;
}

.works__desc {
  display: flex;
  flex-direction: column;

  color: #2d3c4e;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.88;
  padding: 7% 9%;

  @include phones {
    font-size: 14px;
  }
}

.works__desc-title {
  font-size: 18px;
  font-weight: bold;
  line-height: 1.67;
  margin-bottom: 26px;

  @include phones {
    margin-bottom: 15px;
  }
}

.works__desc-text {
  opacity: 0.7;
  padding-bottom: 6%;
}

.works__desc-link {
  color: #4b6fd7;
  margin-bottom: 8%;

  @include phones {
    margin-bottom: 30%;
  }
}

.works__desc-btn {
  display: flex;
  justify-content: space-between;
}

.works__btn-edit,
.works__btn-delete {
  display: flex;
  align-items: center;
  background-color: transparent;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50%;
  padding: 0;
}

.btn-edit--text {
  opacity: 0.5;
  margin-right: 11px;
}

.btn-edit--icon.pen {
  background-image: svg-load(
    "pencil.svg",
    fill=#383bcf,
    width=100%,
    height=100%
  );
  width: 14px;
  height: 14px;
}

.btn-edit--icon.remove {
  background-image: svg-load(
    "remove.svg",
    fill=#c92e2e,
    width=100%,
    height=100%
  );
  width: 14px;
  height: 14px;
}

.controls {
  display: flex;
  align-items: center;
  justify-content: space-between;

  &__btn {
    margin-right: 20px;

    &:last-child {
      margin-right: 0;
    }
  }
}
</style>