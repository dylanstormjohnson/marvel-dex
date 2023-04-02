var charNamPage = $("#charName");
var picEl = $("#heroPic");
var bio = $("#description");

var apiKey = "d2cfd98c8f587c9ae382ce0a8ada3b38";
var charName = "yondu"
var wikiPageName = "Yondu"

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
    bioText[0] = bioText[0].replace("the character", "Yondu Udonta, or simply Yondu, ")
    bioText.splice(16, 7)
    bioText = bioText.join("");
    console.log(bioText)
    bio.text(bioText)
}

async function wikiPic (wikiPageName) {
    var queryURL = "https://en.wikipedia.org/w/api.php?origin=*&action=query&format=json&formatversion=2&prop=images&titles=" + wikiPageName
    var rawData = await fetch(queryURL)
    /* If API call fails, */
    // if (!rawData.ok) {
    //     console.log("Whoops")
    //     return;
    // }
    var data = await rawData.json()
    console.log(data)
    var imgName = data.query.pages[0].images[0].title;
    console.log(imgName);

    var queryURLTwo = "https://en.wikipedia.org/w/api.php?origin=*&action=query&format=json&prop=imageinfo&titles=" + imgName + "&formatversion=2&iiprop=url"
    var rawImgData = await fetch (queryURLTwo)
    var imgData = await rawImgData.json();
    console.log(imgData)
    var imgURL = imgData.query.pages[0].imageinfo[0].url;
    picEl.attr("src", imgURL)

}

wikipedia(wikiPageName);
getCharData(charName);
wikiPic(wikiPageName)
