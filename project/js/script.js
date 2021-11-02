/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const promo__adv = document.querySelector('.promo__adv');
promo__adv.textContent = ''

const promo__genre= document.querySelector('.promo__genre') 
promo__genre.textContent = 'драма'

const list= document.querySelector('.promo__interactive-list');
list.textContent = '';
const newList = movieDB.movies.sort((film1,film2) => film1.localeCompare(film2));
newList.forEach((film, index) => {
    list.innerHTML += `
    <li class="promo__interactive-item">№ ${index + 1}: ${film}
    <div class="delete"></div>
    </li>`
})
