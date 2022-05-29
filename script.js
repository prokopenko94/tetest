const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');


const personalMovieDB = {
    count: numberOfFilms,
    movies: {
    },
    actors:{},
    genres:[],
    privat: false
};

for (let i = 0; i < 2; i++) {
    const userAsk1 = prompt('Один из последних просмотренных фильмов?', ''),
          userAsk2 = prompt('На сколько его оцениваете?', '');

    if (userAsk1 != null && userAsk2 != null && userAsk1 != '' && userAsk2 != '' && userAsk1.length < 50) {
        personalMovieDB.movies[userAsk1] = userAsk2;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }    
}

if (personalMovieDB.count < 10) {
    console.log('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count  >= 10 && personalMovieDB.count < 30) {
    console.log('Вы классический зритель');
} else if (personalMovieDB.count >= 30) {
    console.log('Вы киноман');
} else {
    console.log('произошла ошибка');
}

console.log(personalMovieDB);