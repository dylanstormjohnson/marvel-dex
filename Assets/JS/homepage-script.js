var apiKey = "d2cfd98c8f587c9ae382ce0a8ada3b38";
var xForceImg = $("#imgXForce");
var xMenImg = $("#imgXMen");
var avengersImg = $("#imgAvengers");
var guardiansImg = $("#imgGuardians");
var avengersComicID = "106048";
var xmenComicID = "96265";
var guardiansComicID = "59481";
var xForceComicID ="95891"; 

// Gets list of comics to review for pic; not used in code function 
// async function getSeriesData(charId, img) {
//     var queryURL = "https://gateway.marvel.com:443/v1/public/characters/" + charId + "/comics?apikey=" + apiKey;
//     var rawData = await fetch(queryURL)
//     /* If API call fails, */
//     // if (!rawData.ok) {
//     //     console.log("Whoops")
//     //     return;
//     // }
//     var data = await rawData.json()
//     console.log(data)
//     var imgURL = data.data.results[11].images[0].path + ".jpg"
//     img.attr("src", imgURL)
// }
// Applies img dynamically to allow us to see what the img looks like
// getSeriesData("1009417", xMenImg);

// gets comic pics and dynamically adds to page
async function getComicData(comicId, img) {
    var queryURL = "https://gateway.marvel.com:443/v1/public/comics/" + comicId + "?apikey=" + apiKey
    var rawData = await fetch(queryURL)
    /* If API call fails, */
    // if (!rawData.ok) {
    //     console.log("Whoops")
    //     return;
    // }
    var data = await rawData.json()
    // console.log(data)
    var imgURL = data.data.results[0].images[0].path + ".jpg"
    img.attr("src", imgURL)
}

// add avengers pic to main page
getComicData(avengersComicID, avengersImg);
getComicData(guardiansComicID, guardiansImg);
getComicData(xForceComicID, xForceImg);
getComicData(xmenComicID, xMenImg)
