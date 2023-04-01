const charNamPage = $("#charName");
const picEl = $("#heroPic");
const bio = $("#description");

var baseURL = "https://en.wikipedia.org/w/api.php"


var stormWiki = "Storm_(Marvel_Comics)"
var apiKey = "d2cfd98c8f587c9ae382ce0a8ada3b38";
var charName = "groot"




async function getCharData(charName) {
    var queryURL = "http://gateway.marvel.com/v1/public/characters?name="+ charName +  "&apikey=" + apiKey;
    console.log(queryURL);
    var rawData = await fetch(queryURL)
    /* If API call fails, */
    // if (!rawData.ok) {
    //     console.log("Whoops")
    //     return;
    // }
    var data = await rawData.json()
    var picUrl = data.data.results[0].thumbnail.path+".jpg"
    var cDbName = data.data.results[0].name
    picEl.attr("src", picUrl)
    charNamPage.text(cDbName)
    console.log(data)
}

async function wikipedia () {
    var queryURL = "https://en.wikipedia.org/w/api.php?origin=*&action=query&format=json&prop=extracts&titles=Wolverine_(character)&formatversion=2&exsentences=10&exlimit=1&explaintext=1"
    console.log(queryURL);
    var rawData = await fetch(queryURL)
    /* If API call fails, */
    // if (!rawData.ok) {
    //     console.log("Whoops")
    //     return;
    // }
    var data = await rawData.json()
    console.log(data)
    var bioText = data.query.pages[0].extract
    bio.text(bioText)
}

console.log("test");

wikipedia();
getCharData("wolverine");









// $(document).ready(function() {
//     $("#marvelTeamsNavBar-toggle").dropdown();
// });