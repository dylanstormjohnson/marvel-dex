// Dom Elements
var xForceImg = $("#imgXForce");
var xMenImg = $("#imgXMen");
var avengersImg = $("#imgAvengers");
var guardiansImg = $("#imgGuardians");

// Global Vars
var apiKey = "d2cfd98c8f587c9ae382ce0a8ada3b38";
var imgDataObjArr = [
    xmen = {
        img: xMenImg,
        comicId:"96265"  
    }, 
    xForce = {
        img: xForceImg,
        comicId:"95891"  
    },
    guardians = {
        img: guardiansImg,
        comicId:"59481"  
    },
    avengers = {
        img: avengersImg,
        comicId:"106048"  
    }
]

getImgs();

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
    var imgURL = data.data.results[0].images[0].path + ".jpg"
    img.attr("src", imgURL)
}

function getImgs() {
// add avengers pic to main page
for (var i = 0; i < imgDataObjArr.length; i++) {
    getComicData(imgDataObjArr[i].comicId, imgDataObjArr[i].img)
}
}

// Gets list of comics to review for pic; not used in code function 
// async function getSeriesData(charId, img) {
//     var queryURL = "https://gateway.marvel.com:443/v1/public/characters/" + charId + "/comics?apikey=" + apiKey;
//     var rawData = await fetch(queryURL)
//     var data = await rawData.json()
//     console.log(data)
//     var imgURL = data.data.results[11].images[0].path + ".jpg"
//     img.attr("src", imgURL)
// }
// Applies img dynamically to allow us to see what the img looks like
// getSeriesData("1009417", xMenImg);