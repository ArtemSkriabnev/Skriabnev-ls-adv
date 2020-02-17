<template lang="pug">
  main.content
    .container.page__container
      .content__title
        .content__title-text
          span Блок «Отзывы»
        
      .content__reviews
        .reviews__edit
          .edit__title
            span Новый Отзыв

          .edit__content

            .edit__image
              .edit__image--avatar
              .edit__image--btn
                button.btn-load(type="button" value="Добавить фото") Добавить фото

            .edit__form
              form.form__tag
                .form__row-wrapper
                  .form__row.form__row-double
                    label.form__block
                      .form__label Имя автора
                      .input
                        input.form__input(type="text" name="name" placeholder="" value="Артем Скрябнев")
                  .form__row.form__row-double
                    label.form__block
                      .form__label Титул автора
                      .input
                        input.form__input(type="text" name="name" placeholder="" value="Разработчик")
                .form__row.form__row--textarea
                  label.form__block
                    .form__label Отзыв
                    .input
                      textarea.form__input.form__input--textarea(type="text" name="name" placeholder="") Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                
                .form__row-btn  
                  .controls.edit-form__btns
                    .controls__btn: button(type="reset").btn.btn--link Отмена
                    .controls__btn: button(type="submit" :class="{ 'is-blocked': isBlocked }").btn.btn--gradient Сохранить

        .add__reviews
          ul.reviews__list
            li.reviews__item.reviews__item-first
              .reviews__add.reviews__add-first
                a.btn__add(href="#")
                  .reviews__add-btn
                  .reviews__add-text 
                    span Добавить отзыв 

            li.reviews__item
              .reviews__add
                
                .reviews__author 
                  .reviews__avatar
                    img(src="~images/content/vova.jpg" alt="аватар" class="reviews__avatar-pic")
                  .reviews__author-info 
                    h4.reviews__author-title Владимир Сабанцев
                    span.reviews__author-desc Преподаватель
                
                .reviews__desc
                  
                  .reviews__desc-text
                    span Этот код выдержит любые испытания. Только пожалуйста, не загружайте сайт на слишком старых браузерах
                 
                  .reviews__desc-btn  
                    button.reviews__btn-edit
                      .btn-edit--text Править
                      .btn-edit--icon.pen
                    button.reviews__btn-delete  
                      .btn-edit--text Удалить
                      .btn-edit--icon.remove
            li.reviews__item
              .reviews__add
                
                .reviews__author 
                  .reviews__avatar
                    img(src="~images/content/dima.jpg" alt="аватар" class="reviews__avatar-pic")
                  .reviews__author-info 
                    h4.reviews__author-title Ковальчук Дмитрий
                    span.reviews__author-desc Основатель Loftschool
                
                .reviews__desc
                  
                  .reviews__desc-text
                    span Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                 
                  .reviews__desc-btn  
                    button.reviews__btn-edit
                      .btn-edit--text Править
                      .btn-edit--icon.pen
                    button.reviews__btn-delete  
                      .btn-edit--text Удалить
                      .btn-edit--icon.remove
           








</template>







<script>
export default {
  name: 'reviews'
};
</script>


<style lang="postcss" scoped>
@import url("../../styles/mixins.pcss");


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

.reviews__edit {
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 520px;
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
    
}

.edit__content {
  display: flex;

  @include phones {
    flex-direction: column;
    align-items: center;
  }

}

.edit__image {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30%;
  max-width: 200px;
  height: 275px;
  margin-right: 31px;
  
  @include phones {
    width: 100%;
    margin-right: 0;
    margin-bottom: 45px;
  }

}

.edit__image--avatar {
  max-width: 200px;
  margin-bottom: 27px;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-image: svg-load("user.svg", fill=#fff, width=100%, height=100%);
  background-color: #dee4ed;
  background-size: 84px 112px;
  background-repeat: no-repeat;
  background-position: 50%;
}

/* Кнопка */

.btn-load {
  font-size: 16px;
  font-weight: bold;
  color: #2d3c4e;
}

.btn-load:hover {
  color: #ff9a00;
  transition: 0.3s;
}

.btn-load:focus {
  color: #ff9a00;
  transition: 0.3s;
}

.edit__form {
  width: 60%;
  max-width: 610px;

  @include phones {
    width: 100%;
    
  }

}

.form__row-wrapper {
  display: flex;
  justify-content: space-between;
  width: 100%; 

  @include tablets {
    flex-direction: column;
  }
}

.form__row {
  border-bottom: 2px solid #ccc;
  margin-bottom: 30px;
}

.form__row-double {
   width: 47%;

  @include tablets {
    width: 65%;
  }
  
  
  @include phones {
    width: 100%;
    
  }

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
  min-height: 116px;
  resize: none;
  padding: 14px 14px ;

  @include phones {
    line-height: 1.88;
    min-height: 150px;
  }

}

.form__row-btn {
  display: flex;
  justify-content: flex-end;

  @include phones {
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



/* Добавление работ */


.reviews__list {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
}

.reviews__item {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30%;
  /* min-height: 380px; */
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

.reviews__item-first {
  background: linear-gradient(to left, #006aed,#3f35cb);
  justify-content: center;

  @include phones {
    max-height: 111px;
    
  }
}

.reviews__add {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* height: 100%; */
  align-items: center; 
  padding: 7% 9%;
}

/* .reviews__add-first {
  justify-content: center;
} */

.btn__add {
  display: flex;
  flex-direction: column;
  align-items: center;

  @include phones {
    flex-direction: row;
  }
}

.reviews__add-btn {
  width: 150px;
  height: 150px;
  border: 2px solid #fff;
  border-radius: 50%;
  background-image: svg-load("remove.svg", fill=#fff, width=100%, height=100%, style= "transform: rotate(45deg)");
  background-color:#383bcf;
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

.reviews__add-text {
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


.reviews__author {
  display: flex;
  align-items: center;
  width: 100%;
  padding-bottom: 30px;
  border-bottom: 2px solid #ccc;
  margin-bottom: 30px;

  
}

.reviews__avatar {
  width: 50px;
  height: 50px;
  overflow: hidden;
  border-radius: 50%;
  margin-right: 20px;
  
}

.reviews__avatar-pic {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
}

.reviews__author-title {
  color: #2d3c4e;
  font-size: 18px;
  font-weight: bold;

   @include phones {
    font-size: 16px;
  }

}

.reviews__author-desc {
  opacity: 0.5;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.88;

   @include phones {
    font-size: 14px;
  }
}



.reviews__desc {
  display: flex;
  flex-direction: column;
  
  color: #2d3c4e;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.88;

  @include phones {
    font-size: 14px;
  }
  
}



.reviews__desc-text {
  opacity: 0.7;
  padding-bottom: 20%;
}


.reviews__desc-btn {
  display: flex;
  justify-content: space-between;
}

.reviews__btn-edit, .reviews__btn-delete {
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
  background-image: svg-load("pencil.svg", fill=#383bcf, width=100%, height=100%);
  width: 14px;
  height: 14px;
}

.btn-edit--icon.remove {
  background-image: svg-load("remove.svg", fill=#c92e2e, width=100%, height=100%);
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