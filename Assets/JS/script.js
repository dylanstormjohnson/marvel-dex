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
var xForceImg = $("#imgXForce");
var xMenImg = $("#imgXMen");
var avengersImg = $("#imgAvengers");
var guardiansImg = $("#imgGuardians");
var avengersComicID = "106048"

async function getCopyrights(copyrights) {
  var queryURL = "http://gateway.marvel.com/v1/public/characters?" + "&apikey=" + apiKey;
  var rawData = await fetch(queryURL)
  var data = await rawData.json()
  var copyrightText = data.attributionText
  copyrights.text(copyrightText)
  console.log(copyrightText)
}

// Gets list of comics to review for pic
async function getSeriesData(charId) {
    var queryURL = "https://gateway.marvel.com:443/v1/public/characters/" + charId + "/comics?apikey=" + apiKey;
    var rawData = await fetch(queryURL)
    /* If API call fails, */
    // if (!rawData.ok) {
    //     console.log("Whoops")
    //     return;
    // }
    var data = await rawData.json()
    console.log(data)
    var imgURL = data.data.results[0].images[0].path + ".jpg"
    avengersImg.attr("src", imgURL)
}

async function getComicData(comicId) {
    var queryURL = "https://gateway.marvel.com:443/v1/public/comics/" + comicId + "?apikey=" + apiKey
    var rawData = await fetch(queryURL)
    /* If API call fails, */
    // if (!rawData.ok) {
    //     console.log("Whoops")
    //     return;
    // }
    var data = await rawData.json()
    console.log(data)
    var imgURL = data.data.results[0].images[0].path + ".jpg"
    avengersImg.attr("src", imgURL)
}

// getSeriesData(capnID);
getComicData(avengersComicID)

getCopyrights(copyrights)