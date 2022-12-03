const numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    showMyDB: function () {
        if (personalMovieDB.privat == false) {
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: function () {
        for (let i = 0; i < 3; i++) {
            const genre = prompt('Ваш любимый жанр под номером ' + (i + 1))

            if (genre == null || genre == "") {
                i--;
            } else {
                personalMovieDB.genres[i] = genre;
            }
        }
        console.log(personalMovieDB.genres);
    },
    toggleVisibleMyDB: function () {
        if (personalMovieDB.privat == false) {
            personalMovieDB.privat = true;
        } else {
            personalMovieDB.privat = false
        }
    }

};

personalMovieDB.showMyDB();
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showMyDB();
personalMovieDB.writeYourGenres();
personalMovieDB.genres.forEach(function (item, i, arr) {
    console.log(`Любимый жанр ${i+1} - это ${item}`);
});

const list = document.getElementById('list'),
    li = document.getElementsByTagName('li'),
    liHead = document.getElementsByClassName('li_head'),
    liTexts = document.querySelectorAll('.li_text'),
    liText = document.querySelector('.li_text');
console.log(list);
console.log(li[2]);
console.log(liHead[0]);
liTexts.forEach(item => {
    console.log(item);
});
console.log(liText);
li[0].style.backgroundColor = '#000';
li[2].style.cssText = "background-color: blue"

const div = document.createElement('div');

div.classList.add('block_3_n');
document.body.append(div);
//document.querySelector('.block_3').append(div);
//document.querySelector('.block_3').prepend(div);
//li[0].after(div);
li[1].remove();
li[1].replaceWith(liHead[2]);
div.innerHTML = "<h1>Hello</h1>";
//div.textContent = "Hi";
div.insertAdjacentHTML('beforebegin','<h2>Hello</h2>');
div.insertAdjacentHTML('afterend', '<h2>Hello</h2>');