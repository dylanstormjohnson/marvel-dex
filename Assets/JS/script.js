var xForceImg = $("#imgXForce");
var xMenImg = $("#imgXMen");
var avengersImg = $("#imgAvengers");
var guardiansImg = $("#imgGuardians");
var avengersComicID = "106048"

var apiKey = "d2cfd98c8f587c9ae382ce0a8ada3b38";


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
