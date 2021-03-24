const videoPlayerInit = () => {
  const videoPlayer = document.querySelector(".video-player");
  const videoButtonPlay = document.querySelector(".video-button__play");
  const videoButtonStop = document.querySelector(".video-button__stop");
  const videoTimePassed = document.querySelector(".video-time__passed");
  const videoProgress = document.querySelector(".video-progress");
  const videoTimeTotal = document.querySelector(".video-time__total");
  const videoVolume = document.querySelector(".video-volume");
  const volumeOff = document.querySelector(".volume-off");
  const faVolumeDown = document.querySelector(".fa-volume-down");
  const faVolumeUp = document.querySelector(".fa-volume-up");
  const videoFullscreen = document.querySelector(".video-fullscreen");

  const toggleIcon = () => {
    if (videoPlayer.paused) {
      videoButtonPlay.classList.remove("fa-pause");
      videoButtonPlay.classList.add("fa-play");
    } else {
      videoButtonPlay.classList.remove("fa-play");
      videoButtonPlay.classList.add("fa-pause");
    }
  };

  const togglePlay = () => {
    if (videoPlayer.paused) {
      videoPlayer.play();
    } else {
      videoPlayer.pause();
    }
    //toggleIcon();
  };
  const stopPlay = () => {
    videoPlayer.pause();
    videoPlayer.currentTime = 0; //начальная точка откуда видео начинается
  };
  //у видео плеера будет особенность, когда будем кликакать по нему=запуск видео
  /*добавляем нолики на шкалу прогрессив , написав функцию с тернарным условием
  передаем число, далее проверка если число меньше 10,
   ставим знак вопроса(тернарный оператор(условный)) добавляем 0 и само число, но если 
   число больше 1о (знак:) тогда просто возвращаем число n*/
  const addZero = (n) => (n < 10 ? "0" + n : n);

  //функция влияния на звук с помощью ползунка
  const changeValue = () => {
    const valueVolume = videoVolume.value; // получаем значение volume
    videoPlayer.volume = valueVolume / 100;
  };

  videoPlayer.addEventListener("click", togglePlay);
  videoButtonPlay.addEventListener("click", togglePlay);
  console.dir(videoPlayer);
  videoPlayer.addEventListener("onfullscreenchange", () => {
    if (videoPlayer) {
      videoPlayer.removeEventListener("click", togglePlay);
      loop = true;
    } else {
      videoPlayer.addEventListener("click", togglePlay);
    }
  });
  /*у видео и аудио плееров есть 
    свои события и тогда можно не использовать функцию toggleIcon в функции togglePlay*/
  videoPlayer.addEventListener("play", toggleIcon);
  videoPlayer.addEventListener("pause", toggleIcon);

  videoButtonStop.addEventListener("click", stopPlay);

  videoPlayer.addEventListener("timeupdate", () => {
    const currentTime = videoPlayer.currentTime; // получаем начальную позицию видео
    const duration = videoPlayer.duration;

    /*console.log(currentTime); показывает время , сколько длится ролик от момента старта, 
      эти числа и нужно выводить в показ, окргулив до целых чисел*/
    //console.log(duration);постоянное значение, столько-сколько длится видео

    //пишем выражение для ползунка прогрессива видео обращение к значению value
    videoProgress.value =
      (currentTime / duration) *
      100; /* определяем сколько 
      прошло времени из всего времени и получаем целое число, умножив на 100*/
    //конвертируем время из секунд в минуты

    const minutePassed = Math.floor(currentTime / 60);
    // получаем остаток секунд
    const secondsPassed = Math.floor(currentTime % 60);

    //конвертируем  duration время в минуты и остаток по секундам
    const minuteTotal = Math.floor(duration / 60);
    // получаем остаток секунд
    const secondsTotal = Math.floor(duration % 60);

    // выводим минуты и секунды на страницу
    videoTimePassed.textContent = `${addZero(minutePassed)}:${addZero(
      secondsPassed
    )}`;
    // addZero(minutePassed) + ":" + addZero(secondsPassed); //здесь применили функцию добавления 0 к минутам и секундам
    /*ниже шаблонная строка верхнего примера
     `обратные кавычки, далее интерполляция знак $ и {здесь 
      вызываем функцию и передаем минуты} после фигурных скобок ставим :
      и интерполяция фигурные скобки,в которых вызываем функцию и передаемв нее секунды*/
    videoTimeTotal.textContent = `${addZero(minuteTotal)}:${addZero(
      secondsTotal
    )}`;
  });
  //добавляем возможность перетаскивания ползунка прогрессива

  videoProgress.addEventListener("input", () => {
    const duration = videoPlayer.duration;
    //получаем текущее  value
    const value = videoProgress.value;
    //пишем выражение, в котором обращаемся к видеоплееру и меняем  currentTime
    videoPlayer.currentTime = (value * duration) / 100;
  });
  videoVolume.addEventListener("input", changeValue);
  changeValue(); // вызываем функцию единожды для уменьшения звука в половину при запуске видео

  videoFullscreen.addEventListener("click", () => {
    videoPlayer.requestFullscreen();
  });

  //удаление лишних  кнопок управления при развернутом экране
  videoPlayer.addEventListener("fullscreenchange", () => {
    console.log(document.fullscreenElement);
    if (document.fullscreenElement) {
      videoPlayer.controls = true;
    } else {
      videoPlayer.controls = false;
    }
  });

  volumeOff.addEventListener("click", () => {
    videoPlayer.muted = !videoPlayer.muted;
  });

  faVolumeDown.addEventListener("click", () => {
    //audio.muted = !audio.muted;
    if (videoPlayer.volume) {
      valueVolume = videoVolume.value;
      tempVolume = videoPlayer.volume;
      videoVolume.value = 0;
      videoPlayer.volume = 0;
    } else {
      videoPlayer.volume = tempVolume;
      videoVolume.value = valueVolume;
    }
  });

  faVolumeUp.addEventListener("click", () => {
    if (videoPlayer.volume) {
      videoVolume.value = 100;
      videoPlayer.volume = 1;
    }
  });

  videoPlayerInit.stop = () => {
    videoPlayer.pause();
    toggleIcon();
  };
};
videoPlayerInit();
