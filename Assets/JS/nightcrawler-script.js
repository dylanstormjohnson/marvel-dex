var charNamPage = $("#charName");
var picEl = $("#heroPic");
var bio = $("#description");

var apiKey = "d2cfd98c8f587c9ae382ce0a8ada3b38";
var charName = "nightcrawler"
var wikiPageName = "Nightcrawler_(character)"

async function getCharData(charName) {
    var queryURL = "http://gateway.marvel.com/v1/public/characters?name="+ charName +  "&apikey=" + apiKey;
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

async function wikipedia (wikiPageName) {
    var queryURL = "https://en.wikipedia.org/w/api.php?origin=*&action=query&format=json&prop=extracts&titles=" + wikiPageName + "&formatversion=2&exsentences=10&exlimit=1&explaintext=1"
    var rawData = await fetch(queryURL)
    /* If API call fails, */
    // if (!rawData.ok) {
    //     console.log("Whoops")
    //     return;
    // }
    var data = await rawData.json()
    console.log(data)
    var bioText = data.query.pages[0].extract
    bioText = bioText.split(/(\.)/)
    bioText.splice(0, 2)
    bioText[0] = bioText[0].replace("he", "Nightcrawler (Kurt Wagner)")
    bioText.splice(14, 7)
    bioText = bioText.join("");
    console.log(bioText)
    bio.text(bioText)
}

wikipedia(wikiPageName);
getCharData(charName);