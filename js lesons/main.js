// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false,
// };

// const a = prompt('Один из последних просмотрених фильмов', ''),
//       b = prompt('На сколько оцените его?', ''),
//       c = prompt('Один из последних просмотренных фильмов?', ''),
//       d = prompt('На сколько оцените его?', '');

//       personalMovieDB.movies[a] = b;
//       personalMovieDB.movies[c] = d;
//     //   personalMovieDB.movies[a] = b;

//     // console.log(personalMovieDB);

    "use strict";

    // if(4==9) {
    //     console.log('Ok!');
    // } else {
    //     console.log('Error');
    // }

    const num = 50;

    // if(num < 49) {
    //     console.log('Error');
    // } else if (num > 100) {
    //     console.log('Much');
    // } else {
    //     console.log('Ok');
    // }

    // (num === 50) ? console.log('Ok!') : console.log('Error');

    switch(num) {
        case 49: 
            console.log('Is not');
            break;
        
        case 100: 
            console.log('Is not');
            break; 
            
        case 50: 
            console.log('Ok!');
            break;
        default:
            console.log('In last time'); 
            break;
    }

