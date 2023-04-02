var charNamPage = $("#charName");
var picEl = $("#heroPic");
var bio = $("#description");

var apiKey = "d2cfd98c8f587c9ae382ce0a8ada3b38";
var charName = "warpath"
var wikiPageName = "Warpath_(comics)"

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
    bioText[14] = bioText[14].replace("\n\n\n== Publication history ==\n", "")
    bioText.splice(20, 5)
    // bioText.splice(12, 5)
    bioText[3] = bioText[3].replace(".", ". ")
    bioText[13] = bioText[13].replace(".", ". ")
    bioText = bioText.join("");
    bio.text(bioText)
}

wikipedia(wikiPageName);
getCharData(charName);