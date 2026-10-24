const movieDurations = [150, 45, 90, 135, 30, 180, 60]; 

function findMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

function filterLongMovies(arr) {
  return arr.filter(duration => duration > 120);
}

function calculateSum(arr) {
  return arr.reduce((sum, current) => sum + current, 0);
}

let userName = prompt("Введите ваше имя:");

const maxDuration = findMax(movieDurations);
const longMovies = filterLongMovies(movieDurations);
const totalDuration = calculateSum(movieDurations);
const totalLongDuration = calculateSum(longMovies);

let shortMoviesCount = 0;
let totalShortDuration = 0;

for (let i = 0; i < movieDurations.length; i++) {
  if (movieDurations[i] <= 40) {
    shortMoviesCount++;
    totalShortDuration += movieDurations[i];
  }
}


if (userName) {
  alert(`Привет, ${userName}!\nОбщая длительность просмотра – ${totalDuration} минут, из них ${totalLongDuration} минут – полнометражные фильмы.`);
} else {
  alert(`Привет!\nОбщая длительность просмотра – ${totalDuration} минут, из них ${totalLongDuration} минут – полнометражные фильмы.`);
}

console.log(`Количество короткометражек: ${shortMoviesCount}`);
console.log(`Суммарная длительность короткометражек: ${totalShortDuration} минут`);

if (maxDuration >= 180) {
  console.log("Это почти как полноценный театральный спектакль!");
}