var charNamPage = $("#charName");
var picEl = $("#heroPic");
var bio = $("#description");

var apiKey = "d2cfd98c8f587c9ae382ce0a8ada3b38";
var charName = "Groot"
var wikiPageName = "Groot"
var imgName = "File:I_am_Groot_vol_1.jpeg"

// Gets character name from Marvel API and applies to page
async function getCharData(charName) {
    try {
        var queryURL = "https://gateway.marvel.com/v1/public/characters?name="+ charName +  "&apikey=" + apiKey;
        var rawData = await fetch(queryURL)
        if (rawData.status !== 200) {
            $('#modal-main-txt').text("Error: Files not found!")
            $('#errorModal').modal('show')
            return;
            }
        var data = await rawData.json()
        var cDbName = data.data.results[0].name
        charNamPage.text(cDbName)
    } catch(err) {
        $('#modal-main-txt').text("Error: Files not found!")
        $('#errorModal').modal('show')
    }
}

// Gets bio from wikipedia, edits text, applies to page
async function wikipedia (wikiPageName) {
    try {
        var queryURL = "https://en.wikipedia.org/w/api.php?origin=*&action=query&format=json&prop=extracts&titles=" + wikiPageName + "&formatversion=2&exsentences=10&exlimit=1&explaintext=1"
        var rawData = await fetch(queryURL)
        if (rawData.status !== 200) {
            $('#modal-main-txt').text("Error: Files not found!")
            $('#errorModal').modal('show')
            return;
            }
        var data = await rawData.json()
        var bioText = data.query.pages[0].extract
        bioText = bioText.split(/(\.)/)
        bioText.splice(0, 2)
        bioText[0] = bioText[0].replace("the character", "Groot");
        bioText.splice(12, 2)
        bioText.splice(14, 5)
        bioText = bioText.join("");
        bio.text(bioText)
    } catch(err) {
        $('#modal-main-txt').text("Error: Files not found!")
        $('#errorModal').modal('show')
    }
}

// Using img name, gets img url from wikipedia API and applies to page
async function wikiPic (imgName) {
    try {
        var queryURL = "https://en.wikipedia.org/w/api.php?origin=*&action=query&format=json&prop=imageinfo&titles=" + imgName + "&formatversion=2&iiprop=url"
        var rawData = await fetch(queryURL)
        if (rawData.status !== 200) {
            $('#modal-main-txt').text("Error: Files not found!")
            $('#errorModal').modal('show')
            return;
            }
        var data = await rawData.json()
        var imgURL = data.query.pages[0].imageinfo[0].url;
        picEl.attr({src: imgURL, alt:"Comic book cover of Baby Groot looking up curiously towards a purple sky in an alien landscape."})
    } catch(err) {
        $('#modal-main-txt').text("Error: Files not found!")
        $('#errorModal').modal('show')
    }
}


wikipedia(wikiPageName);
getCharData(charName);
wikiPic(imgName)