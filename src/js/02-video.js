import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

//Виконуй це завдання у файлах 02-video.html і 02-video.js. Розбий його на декілька підзавдань:

//Ознайомся з документацією бібліотеки Vimeo плеєра.
//Додай бібліотеку як залежність проекту через npm.
//Ініціалізуй плеєр у файлі скрипта як це описано в секції pre-existing player, але враховуй, що у тебе плеєр доданий як npm пакет, 
//а не через CDN.
//Вивчи документацію методу on() і почни відстежувати подію timeupdate - оновлення часу відтворення.
//Зберігай час відтворення у локальне сховище. Нехай ключем для сховища буде рядок "videoplayer-current-time".
//Під час перезавантаження сторінки скористайся методом setCurrentTime() з метою відновлення відтворення зі збереженої позиції.
//Додай до проекту бібілотеку lodash.throttle і зроби так, щоб час відтворення оновлювався у сховищі не частіше, ніж раз на секунду.

 const iframe = document.querySelector('iframe');
 const player = new Player(iframe);
 const CURRENT_TIME = 'videoplayer-current-time';

 const onPlay = function(data) {
    localStorage.setItem(CURRENT_TIME, data.seconds);
};

player.on('timeupdate', throttle(onPlay, 1000));

const savedTime = localStorage.getItem(CURRENT_TIME);
if(savedTime){
    player.setCurrentTime(savedTime);
  }

