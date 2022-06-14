// Iteration 1 (MAP): All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArr) {
  // const cleanMovieArr = [];

  const directors = moviesArr.map(oneMovie => oneMovie.director)
  // .forEach( singleMovie => {
  //   if (!cleanMovieArr.includes(singleMovie)) {
  //     cleanMovieArr.push(singleMovie)
  //   }
  // })
  // return cleanMovieArr
  return directors
}

// Iteration 2 (FILTER): Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArr) {
  const numberOfSpielbergDramas = moviesArr.filter(movie => 
    movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
    ).length;
    return numberOfSpielbergDramas
}

// Iteration 3 (REDUCE): All scores average - Get the average of all scores with 2 decimals
function scoresAverage(lotsOfMovies) {
  //  return !lotsOfMovies.length? 0 : Number((lotsOfMovies.reduce((a,b) => b.rate? a + b.rate : a, 0)/lotsOfMovies.length).toFixed(2));
  // this is the one line version

  if (!lotsOfMovies.length) {
    return 0
  } else {

  let total = lotsOfMovies.reduce((a, b) => {
    if (b.score) {
      return a + b.score;
    } else {
      return a;
    }
  }, 0);
  // you can use Number(), parseInt() or simply plus +
  return Number((total / lotsOfMovies.length).toFixed(2));
}}

// Iteration 4 (FILTER): Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArr) {
  const dramaMoviesArr = moviesArr.filter(movie => movie.genre.includes("Drama"));
  // filter returns an array
  return scoresAverage(dramaMoviesArr)
}

// Iteration 5 (SORT): Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArr) {
   let sortedArray = [...moviesArr];
   // spread operator is to make sure not to mutate the original array because .sort() does change/mutate the original array so always make sure you create a safe copy before sorting
   sortedArray.sort((a,b) => {
    if (a.year < b.year) {
      return -1
    } else if (a.year > b.year) {
      return 1
    } else {
      if (a.title < b.title) {
        return -1
      } else if (a.title > b.title) {
        return 1
      } // else
      return 0
    }
   });

   return sortedArray

}

// Iteration 6 (SORT, MAP, SLICE): Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArr) {
  let titlesArr = [...moviesArr]
  titlesArr.sort((a,b) => {
    if (a.title < b.title) {
      return -1
    } else if (a.title > b.title) {
      return 1
    } else {
      return 0
    }
  })
  .map(eachMovie => eachMovie.title)
  .slice(0, 20);

  return titlesArr

}
// BONUS - Iteration 7 (MAP): Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArr) {
  let newArray = [...moviesArr]
  let hours = newArray.map(movie => {
    movie.duration.split("h");
    

  })
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
