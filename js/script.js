/* открытие  попапа карты на главной */

var mapLink = document.querySelector('.map-img');
var map = document.querySelector('.map-popup');

if (map) {
  var closeMap = map.querySelector(".close-cart-btn");

  mapLink.addEventListener('click', function(evt) {
      evt.preventDefault();
      map.classList.add("modal-show");
  });

  closeMap.addEventListener("click", function (evt) {
      evt.preventDefault();
      map.classList.remove("modal-show");
  });

  window.addEventListener("keydown", function (evt) {
      if (evt.keyCode === 27) {
        evt.preventDefault();
        if (map.classList.contains("modal-show")) {
          map.classList.remove("modal-show");
        }
      }
    });
  }

/* открытие  попапа напишите нам на главной */

var link = document.querySelector('.write-us-btn');
var popup = document.querySelector('.write-us-popup');

if (popup) {
  var close = popup.querySelector(".close-cart-btn");
  var form = popup.querySelector("form");
  var login = popup.querySelector("[name=write_name]");
  var email = popup.querySelector("[name=write-email]");
  var text = popup.querySelector("[name=write-your-text]");

  link.addEventListener('click', function(evt) {
      evt.preventDefault();
      popup.classList.add("modal-show");
      login.focus();
  });

  close.addEventListener("click", function (evt) {
      evt.preventDefault();
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
  });

  form.addEventListener("submit", function (evt) {
      evt.preventDefault();
      popup.classList.remove("modal-error");
      popup.offsetWidth = popup.offsetWidth;
      if (!login.value || !email.value || !text.value) {
        evt.preventDefault();
        popup.classList.add("modal-error");
      }
  });

  window.addEventListener("keydown", function (evt) {
      if (evt.keyCode === 27) {
        evt.preventDefault();
        if (popup.classList.contains("modal-show")) {
          popup.classList.remove("modal-show");
          popup.classList.remove("modal-error");
        }
      }
    });
  }

/* открытие  покупки на странице каталога */

var buyLink = document.querySelectorAll(".buy"), index, button;
var cart = document.querySelector(".cart-pop-up");
var closeCart = cart.querySelector(".close-cart-btn");
var continueBtn = cart.querySelector(".continue-btn");
var basketBtn = document.querySelector(".basket");

  closeCart.addEventListener("click", function (evt) {
      evt.preventDefault();
      cart.classList.remove("modal-show");
  });

  continueBtn.addEventListener("click", function (evt) {
      evt.preventDefault();
      cart.classList.remove("modal-show");
  });

  window.addEventListener("keydown", function (evt) {
      if (evt.keyCode === 27) {
        evt.preventDefault();
        if (cart.classList.contains("modal-show")) {
          cart.classList.remove("modal-show");
        }
      }
  });

  for (index = 0; index < buyLink.length; index++) {
      button = buyLink[index];
      button.addEventListener('click', function (event) {
          event.preventDefault();
          cart.classList.add("modal-show");
          basketBtn.classList.add("basket-active");
      });
  }

/* Изменение цвета закладок */

var bookmarkLink = document.querySelectorAll(".bookmark");
var favorites = document.querySelector(".favorites")
var bookTemp = "";

for (i=0; bookmarkLink.length > i; i++) {
  bookTemp = bookmarkLink[i];
  bookTemp.addEventListener('click', function(evt) {
    evt.preventDefault();
    favorites.classList.add("favorites-active");
  });
}
