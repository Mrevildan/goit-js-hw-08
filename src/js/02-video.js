//Виконуй це завдання у файлах 02-video.html і 02-video.js. Розбий його на декілька підзавдань:

//Ознайомся з документацією бібліотеки Vimeo плеєра.
//Додай бібліотеку як залежність проекту через npm.
//Ініціалізуй плеєр у файлі скрипта як це описано в секції pre-existing player, але враховуй, що у тебе плеєр доданий як npm пакет, 
//а не через CDN.
//Вивчи документацію методу on() і почни відстежувати подію timeupdate - оновлення часу відтворення.
//Зберігай час відтворення у локальне сховище. Нехай ключем для сховища буде рядок "videoplayer-current-time".
//Під час перезавантаження сторінки скористайся методом setCurrentTime() з метою відновлення відтворення зі збереженої позиції.
//Додай до проекту бібілотеку lodash.throttle і зроби так, щоб час відтворення оновлювався у сховищі не частіше, ніж раз на секунду.

 const throttle = require('lodash.throttle');
 const videoPlayer = document.querySelector('#vimeo-player');

 const onPlay = function(data) {
    // data is an object containing properties specific to that event
};

player.on('play', onPlay);

 localStorage.setItem("videoplayer-current-time", time);
