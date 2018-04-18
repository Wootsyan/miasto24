// Array for days

var namesofDays = [
  "Niedziela",
  "Poniedziałek",
  "Wtorek",
  "Środa",
  "Czwartek",
  "Piątek",
  "Sobota"
]


// Object Date

var data = new Date();
var day = data.getDay();
var monthNumber = data.getMonth() + 1;
var month = "";

if (monthNumber<10){
  month = '0'+monthNumber;
} else {
  month = monthNumber
}
console.log(day);
console.log(namesofDays[3]);


window.onload = dataPut;


function dataPut() {
  document.getElementsByClassName("smallHeader")[0].innerHTML = namesofDays[day] + ' // <a href="index.html">www.miasto24.pl</a>';
  document.getElementsByClassName("data")[0].innerHTML = data.getDate() + '.' + month + '.' + data.getFullYear() ;
}
