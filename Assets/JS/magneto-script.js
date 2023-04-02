var charNamPage = $("#charName");
var picEl = $("#heroPic");
var bio = $("#description");

var apiKey = "d2cfd98c8f587c9ae382ce0a8ada3b38";
var charName = "magneto"
var wikiPageName = "Magneto_(Marvel_Comics)"
var imgName = "File:Magneto_(Marvel_Comics_character).jpg"

async function getCharData(charName) {
    var queryURL = "http://gateway.marvel.com/v1/public/characters?name="+ charName +  "&apikey=" + apiKey;
    var rawData = await fetch(queryURL)
    /* If API call fails, */
    // if (!rawData.ok) {
    //     console.log("Whoops")
    //     return;
    // }
    var data = await rawData.json()
    var cDbName = data.data.results[0].name
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
    bioText[0] = bioText[0].replace("Created by writer Stan Lee and artist/co-writer Jack Kirby, the character ", "Magneto (birth name: Max Eisenhardt; alias: Erik Lehnsherr and Magnus) ")
    bioText.splice(16, 3)
    bioText = bioText.join("");
    console.log(bioText)
    bio.text(bioText)
}

async function wikiPic (imgName) {
    var queryURL = "https://en.wikipedia.org/w/api.php?origin=*&action=query&format=json&prop=imageinfo&titles=" + imgName + "&formatversion=2&iiprop=url"
    var rawData = await fetch(queryURL)
    /* If API call fails, */
    // if (!rawData.ok) {
    //     console.log("Whoops")
    //     return;
    // }
    var data = await rawData.json()
    console.log(data)
    var imgURL = data.query.pages[0].imageinfo[0].url;
    picEl.attr("src", imgURL)
}

wikipedia(wikiPageName);
getCharData(charName);
wikiPic(imgName);