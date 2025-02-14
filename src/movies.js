// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

const movies = require("./data");

function getAllDirectors(moviesArray) {
  return moviesArray.map((element) => (element.director))
} 



// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const arrOfSpielbergDrama =  moviesArray.filter((element) => element.director === "Steven Spielberg" && element.genre.indexOf("Drama") >= 0 )    
    return arrOfSpielbergDrama.length
  }
// Iteration 3: All scores average - Get the average of all scores with 2 decimals

function scoresAverage(moviesArray) {
  if (moviesArray.length === 0){
      return 0
  }
  const scoredMovies =  moviesArray.filter(element => typeof element.score === "number")
  const sum = scoredMovies.reduce(function (acc, curr) {
    return acc + curr.score
  }, 0)
  const average = sum / scoredMovies.length
  return parseFloat(average.toFixed(2))
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const dramaArr = moviesArray.filter((element) => element.genre.indexOf("Drama") >= 0 && typeof element.score === "number") 
  if (dramaArr.length === 0) return 0
  const sumDramaScore = dramaArr.reduce(function (acc, curr){ 
    return acc + curr.score
  }, 0 )
  const avg = sumDramaScore / dramaArr.length
  return parseFloat(avg.toFixed(2))
  }
  let name = 20

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const copy = JSON.parse(JSON.stringify(moviesArray));
  let result = copy.sort((a,b ) => a.year -b.year )
  return result.sort()
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const copy = JSON.parse(JSON.stringify(moviesArray));
  let titleArr = copy.map(element => element.title)
  let orderedTitle = titleArr.sort((a, b) => a.localeCompare(b))
  return orderedTitle.slice(0,20)
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  const copy = JSON.parse(JSON.stringify(moviesArray));
  let toMinutes = copy.map(function (element){ 
    let hours  = element.duration.slice(0,1) 
    let minutes = element.duration.slice(3,5)
    element.duration = Number (hours) *60  + Number(minutes)
    return element
    })
return toMinutes
}



// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}



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
