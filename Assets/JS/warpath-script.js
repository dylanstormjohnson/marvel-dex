var charNamPage = $("#charName");
var picEl = $("#heroPic");
var bio = $("#description");

var apiKey = "d2cfd98c8f587c9ae382ce0a8ada3b38";
var charName = "warpath"
var wikiPageName = "Warpath_(comics)"

// Gets char name and img from Marvel API and applies to page
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
        var picUrl = data.data.results[0].thumbnail.path+".jpg"
        var cDbName = data.data.results[0].name
        picEl.attr({src: picUrl, alt:"Warpath wearing his mask in his red and blue uniform" })
        charNamPage.text(cDbName)
    } catch(err) {
        $('#modal-main-txt').text("Error: Files not found!")
        $('#errorModal').modal('show')
    }
}

// Gets character bio from Wikipedia, edits text, and applies to page
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
    bioText[14] = bioText[14].replace("\n\n\n== Publication history ==\n", "")
    bioText.splice(20, 5)
    bioText[3] = bioText[3].replace(".", ". ")
    bioText[13] = bioText[13].replace(".", ". ")
    bioText = bioText.join("");
    bio.text(bioText)
    } catch(err) {
        $('#modal-main-txt').text("Error: Files not found!")
        $('#errorModal').modal('show')
    }
}

wikipedia(wikiPageName);
getCharData(charName);