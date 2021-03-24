jQuery(document).ready(function () {
  const menuBtn = document.querySelector(".menu__btn");
  const nmLogoRings = document.querySelector(".nm-logo-rings");
  const menuToggle = document.getElementById("menu__toggle");
  const menuIcon = document.querySelector(".menuIcon");
  const menuBox = document.querySelector(".menu__box");
  const menuItem = document.querySelectorAll(".menu__item");

  var map; //для яндекс карты
  var marker; //для метки яндекс карты

  var div = document.querySelector(".imgfeedback");

  var count = 0; //счетчик

  div.style.left = 0 + "px"; //обращение к диву с машиной
  setInterval(movementCar, 200);

  function movementCar() {
    var car = div;
    car.style.backgroundPositionX = (count-- % 5) * 350 + "px";
  }

  $("#block").hover(
    function () {
      $(this).css("backgroundImage", "url(./assets/images/maine_9.gif)");
    },

    function () {
      $(this).css("backgroundImage", "url(./assets/images/maine_screen1.png)");
    }
  );

  //функция измения цвета лого и меню при скролле страницы
  window.onscroll = function () {
    var scrolled = window.pageYOffset || document.documentElement.scrollTop;
    menuBtn.style.backgroundColor =
      scrolled == 0 ? "" : "rgba(51, 51, 51, 0.6)";
    nmLogoRings.style.fill = scrolled == 0 ? "" : "rgba(51, 51, 51, 0.6)";
  };
  //функция раскрытия меню
  menuToggle.addEventListener("click", function () {
    if (
      menuBox.classList.contains("menu__box") ||
      menuIcon.classList.contains("menuIcon")
    )
      menuBox.classList.toggle("menuboxVisible");
    menuIcon.classList.toggle("menuIconAfter");
  });

  //функция скролла до нужной секции при выборе пункта меню
  $(function () {
    $("a.scrollto").click(function () {
      let elementClick = $(this).attr("href");
      let destination = $(elementClick).offset().top;
      $("html:not(:animated),body:not(:animated)").animate(
        { scrollTop: destination },
        1100
      );

      return false;
    });
  });
  //функция закрытия меню при выборе пункта меню
  $(menuItem).on("click", function () {
    if (
      menuBox.classList.contains("menuboxVisible") ||
      menuIcon.classList.contains("menuIcon")
    ) {
      $("#block").css(
        "backgroundImage",
        "url(./assets/images/maine_screen1.png)"
      );
      menuBox.classList.remove("menuboxVisible");
      menuIcon.classList.remove("menuIconAfter");
    }
  });
  //скрытие блока меню при клике не в этом блоке
  $(document).click(function (e) {
    if (
      !$(e.target).hasClass("#menu__toggle") &&
      $(e.target).parents("#menu__toggle").length === 0
    ) {
      $(".menu__box").removeClass("menuboxVisible");
      $(".menuIcon").removeClass("menuIconAfter");
    }
  });
  //функция просмотра авто в обзоре
  window.onload = function () {
    var imgArr = [];

    for (var i = 0; i < 45; i++) {
      imgArr[i] = new Image();

      imgArr[i].src = "./assets/imgCar/" + i + ".jpg";
    }

    var targetImage = document.getElementsByClassName("review")[0];
    //первоначально старую координату Х считаем нулевой
    var oldX = 0;
    var touchX = 0;
    //счетчик текущего изображения
    var count = 0;

    //
    targetImage.ondragstart = function (e) {
      //return false;//1й вариант
      e.preventDefault(); //2й вариант
    };
    //по нажатию клавиши подключаем обработчик mousemove

    targetImage.onmousedown = function () {
      targetImage.style.cursor = "ew-resize";

      targetImage.addEventListener("mousemove", handler);

      //targetImage.onmousemove = handler; //второй вариант подключения обработчика
    };
    //отпускаем клавишу - отключаем обработчик mousemove
    window.onmouseup = function () {
      targetImage.style.cursor = "pointer";
      targetImage.removeEventListener("mousemove", handler);
      //targetImage.onmousemove = null;  //второй вариант отключения обработчика
    };
    targetImage.addEventListener("touchmove", handlerMob);
    targetImage.removeEventListener("touchend", handlerMob);

    //действие при нажатой клавише мыши

    function handler(e) {
      //если текущая координата мыши больше старой (курсор находится правее), то меняем картинку на следующую
      console.log(e);

      if (e.pageX > oldX) {
        if (++count > 44) {
          count = 0;
        }
      } else {
        //если текущая координата мыши меньше старой (курсор находится левее), то меняем картинку на предыдущую
        if (--count < 0) {
          count = 44;
        }
      }

      this.src = imgArr[count].src;

      oldX = e.pageX;
    }

    function handlerMob(e) {
      const touch = e.changedTouches[0];
      const target = document.elementFromPoint(touch.clientX, touch.clientY);
      if (target > touchX) {
        if (++count > 44) {
          count = 0;
        }
      } else {
        //если текущая координата мыши меньше старой (курсор находится левее), то меняем картинку на предыдущую
        if (--count < 0) {
          count = 44;
        }
        this.src = imgArr[count].src;

        touchX = e.target;
      }
    }
  };

  //

  //функция яндекс карты
  function initMap() {
    map = new ymaps.Map("yandexmap", {
      center: [53.951659, 27.710835],
      zoom: 16,
    });
    marker = new ymaps.Placemark([53.951659, 27.710835], {
      hintContent: "Расположение",
      balloonContent: "Audi Центр<br>Минск проспект Независимости 198",
    });
    map.geoObjects.add(marker); //смена цвета у маркера карты
    marker.events
      .add("mouseenter", function (e) {
        // Ссылку на объект, вызвавший событие,
        // можно получить из поля 'target'.
        e.get("target").options.set("preset", "islands#greenIcon");
      })
      .add("mouseleave", function (e) {
        e.get("target").options.unset("preset");
      });
  }
  ymaps.ready(initMap);
});
//функция предзагрузчика

$(window).on("load", function () {
  ($preloader = $(".loadwindow")),
    ($loader = $preloader.find(".loading-window"));
  $loader.fadeOut();
  $preloader.delay(400).fadeOut("slow");
});

//функция валидации формы
function validate1(forma) {
  var list = forma.getElementsByTagName("span");
  for (var i = list.length - 1; i >= 0; i--) {
    list[i].remove();
  }
  var vName = isFullText(forma.firstname);
  var vPhone = validPhone(forma.phone);
  return vName && vPhone;
}
function isFullText(fieldInp) {
  var letters = /^[A-Za-z]+$|^[А-Яа-я]+$/;

  if (fieldInp.value.match(letters)) {
    fieldInp.className = fieldInp.className.replace("alert", "");
    return true;
  } else {
    fieldInp.className = "alert";
    var item = document.createElement("span");
    item.innerHTML = "Имя должно состоять из букв латиницы или кириллицы";
    fieldInp.parentNode.insertBefore(item, fieldInp.nextSibling);
    return false;
  }
}
function validPhone(numbPhone) {
  var pattern = /^(\+375|80)(17|29|25|44|33)(\d{3})(\d{2})(\d{2})$/;
  if (numbPhone.value.match(pattern)) {
    numbPhone.className = numbPhone.className.replace("alert", "");
    return true;
  } else {
    numbPhone.className = "alert";
    var item = document.createElement("span");
    item.innerHTML = "Телефон должен быть формата +375...";
    numbPhone.parentNode.insertBefore(item, numbPhone.nextSibling);
    return false;
  }
}

//
// Видеовсплывашка
//==============

setTimeout(function () {
  $("#popup-video").removeClass("hide");
}, 2500);

// функция вывода значения куки по имени
function get_cookie(cookie_name) {
  var results = document.cookie.match(
    "(^|;) ?" + cookie_name + "=([^;]*)(;|$)"
  );
  if (results) return unescape(results[2]);
  else return null;
}
var popupvideo = get_cookie("video-close");

//Если куки popupvideo нет, при прокрутке страницы через ,,, открывается видео
if (!popupvideo) {
  $(window).scroll(function () {
    if (popupvideo) {
      return;
    }
    topscroll = $(window).scrollTop();
    if (topscroll > 4800) {
      $("#popup-video").removeClass("noactive");
    }
  });
}

$("#video-swipe, #popup-video .close").on("click", function () {
  $("#popup-video").toggleClass("noactive");
  var d = new Date();
  d.setTime(d.getTime() + 30 * 24 * 60 * 60 * 1000);
  expires = d;
  if (d.toUTCString) {
    expires = d.toUTCString();
  }

  //document.cookie = 'video-close=1; path=/; expires=' + expires;
  document.cookie =
    "video-close=" +
    ($("#popup-video").hasClass("noactive") ? 1 : 0) +
    "; path=/; expires=" +
    expires;
  popupvideo = $("#popup-video").hasClass("noactive");
});
