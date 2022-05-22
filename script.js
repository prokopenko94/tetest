const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');


const personalMovieDB = {
    count: numberOfFilms,
    movies: {
    },
    actors:{},
    genres:[],
    privat: false
};


const userAsk1 = prompt('Один из последних просмотренных фильмов?', ''),
      userAsk2 = prompt('На сколько его оцениваете?', ''),
      userAsk3 = prompt('Один из последних просмотренных фильмов?', ''),
      userAsk4 = prompt('На сколько его оцениваете?', '');

personalMovieDB.movies[userAsk1] = userAsk2;
personalMovieDB.movies[userAsk3] = userAsk4;

console.log(personalMovieDB);