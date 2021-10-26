const numberofFilm = prompt('Сколько фильмов вы уже посмотрели');
const lastMovie = prompt('Один из последних просмотреных фильмов');
const review = prompt('На сколько оцените его?');

const personalMovieDB = {
    count: numberofFilm,
    movies: {
        [lastMovie]: review
    },
    actors: {},
    genres: [],
    privat: false
};
console.log(personalMovieDB);
