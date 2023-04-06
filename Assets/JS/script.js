// var characters = ["Deadpool", "Warpath", "Wolverine", "Domino", "Magneto", "Storm", "Gambit", "Night Crawler", "Iron Man", "Captain America", "Thor", "Dr. Strange", "Groot", "Rocket", "Yondu", "Howard the Duck"];

// window.redirect


// get search input value
// for (var i = 0; i < characters.length; i++){
// if(searchInputValue == character[i]){
//   window.location.replace(`./${character[i]}.html`)
// }
// }
var apiKey = "d2cfd98c8f587c9ae382ce0a8ada3b38";
var copyrights = $("#copyrights");



async function getCopyrights(copyrights) {
  var queryURL = "http://gateway.marvel.com/v1/public/characters?" + "&apikey=" + apiKey;
  var rawData = await fetch(queryURL)
  var data = await rawData.json()
  var copyrightText = data.attributionText
  copyrights.text(copyrightText)
  console.log(copyrightText)
}


getCopyrights(copyrights);


//this is for my-team page add event listener
//var addCharacter = document.querySelector('#addToTeam')