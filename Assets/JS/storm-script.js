var charNamPage = $("#charName");
var picEl = $("#heroPic");
var bio = $("#description");

var apiKey = "d2cfd98c8f587c9ae382ce0a8ada3b38";
var charName = "storm"
var wikiPageName = "Storm_(Marvel_Comics)"

async function getCharData(charName) {
    try {
        var queryURL = "http://gateway.marvel.com/v1/public/characters?name="+ charName +  "&apikey=" + apiKey;
        var rawData = await fetch(queryURL)
        if (rawData.status !== 200) {
            $('#modal-main-txt').text("Error: Files not found!")
            $('#errorModal').modal('show')
            return;
            }
        var data = await rawData.json()
        var picUrl = data.data.results[0].thumbnail.path+".jpg"
        var cDbName = data.data.results[0].name
        picEl.attr("src", picUrl)
        charNamPage.text(cDbName)
    } catch(err) {
        $('#modal-main-txt').text("Error: Files not found!")
        $('#errorModal').modal('show')
    }
}

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
        bioText[0] = bioText[0].replace("the character", "Storm")
        bioText = bioText.join("");
        bio.text(bioText)
    } catch(err) {
        $('#modal-main-txt').text("Error: Files not found!")
        $('#errorModal').modal('show')
    }
}

wikipedia(wikiPageName);
getCharData(charName);