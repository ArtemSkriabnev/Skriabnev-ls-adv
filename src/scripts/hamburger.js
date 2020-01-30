// фулскрин мею НАЧАЛО

const hamburger = document.querySelector(".nav__ham-menu");
const fullScreenMenu = document.querySelector(".fullscreen-menu");
console.log(fullScreenMenu);
const closeMenu = document.querySelector(".fullscreen-menu__close");
const menuLink = document.querySelectorAll(".fullscreen-menu-nav__link");

var op = 0.2

let increaseOpacity = function () {
  setTimeout( () => {
    if (fullScreenMenu.style.opacity < 1) {
      op += 0.2;
      fullScreenMenu.style.opacity = op;
      increaseOpacity();

    }
  }, 100);
}

let decreaseOpacity = function () {
  setTimeout( () => {
    if (fullScreenMenu.style.opacity > 0) {
      op -= 0.2;
      fullScreenMenu.style.opacity = op;
      decreaseOpacity();
    }
  }, 100)

  if ((op == 0) || (op < 0 )) {
    fullScreenMenu.style.display = 'none';
  }
  
}

hamburger.addEventListener('click', function() {
  fullScreenMenu.style.display = 'flex';
  increaseOpacity();
  console.log("was click")
});

closeMenu.addEventListener('click', function() {
  decreaseOpacity();
})

fullScreenMenu.addEventListener('click', (event) => {
  if (event.target === fullScreenMenu) {
    decreaseOpacity();
  }
})

for (let i = 0; i < menuLink.length; i++) {
  // console.log(menuLink[i]);
  menuLink[i].addEventListener('click', ()=>{
    decreaseOpacity();
  })
}