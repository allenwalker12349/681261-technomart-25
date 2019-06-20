var link = document.querySelector('.write-us-btn');
var mapLink = document.querySelector('.map-img');

var popup = document.querySelector('.write-us-popup');
var map = document.querySelector('.map-popup');
var close = popup.querySelector(".close-cart-btn");
var closeMap = map.querySelector(".close-cart-btn");

var form = popup.querySelector("form");
var login = popup.querySelector("[name=write_name]");
var email = popup.querySelector("[name=write-email]");
var text = popup.querySelector("[name=write-your-text]");

mapLink.addEventListener('click', function(evt) {
    evt.preventDefault();
    map.classList.add("modal-show");
});

link.addEventListener('click', function(evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
    login.focus();
});

closeMap.addEventListener("click", function (evt) {
    evt.preventDefault();
    map.classList.remove("modal-show");
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

  window.addEventListener("keydown", function (evt) {
      if (evt.keyCode === 27) {
        evt.preventDefault();
        if (map.classList.contains("modal-show")) {
          map.classList.remove("modal-show");
        }
      }
    });
