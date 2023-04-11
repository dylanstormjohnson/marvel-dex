var apiKey = "d2cfd98c8f587c9ae382ce0a8ada3b38";

var charNamPage = $("#charName");
var picEl = $("#heroPic");
var bio = $("#description");

var urlParams = new URLSearchParams(window.location.search);
var characterId = urlParams.get('id') || null;

function init(characterId) {
  if (!characterId) {
    console.log('no character')
    return;
  }

  var charObj = allHeros[characterId]

  var { charName, wikiPageName, imgName, imgAlt, getCharacterDescription } = charObj

  wikipedia(wikiPageName, getCharacterDescription);
  getCharData(charName, imgName, imgAlt);
  if (imgName) wikiPic(imgName, imgAlt);

}



// Gets character name from Marvel API and applies to page
async function getCharData(charName, imgName, imgAlt) {
  try {
    var queryURL = "https://gateway.marvel.com/v1/public/characters?name=" + charName + "&apikey=" + apiKey;
    var rawData = await fetch(queryURL)
    if (rawData.status !== 200) {
      $('#modal-main-txt').text("Error: Files not found!")
      $('#errorModal').modal('show')
      return;
    }
    var data = await rawData.json();

    if (!imgName) {
      var picUrl = data.data.results[0].thumbnail.path + ".jpg"
      picEl.attr({ src: picUrl, alt: imgAlt })
    };

    var cDbName = data.data.results[0].name
    charNamPage.text(cDbName)
  } catch (err) {
    $('#modal-main-txt').text("Error: Files not found!")
    $('#errorModal').modal('show')
  }
}

// Gets bio from wikipedia, edits text, applies to page
async function wikipedia(wikiPageName, getCharacterDescription) {
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

    bioText = getCharacterDescription(bioText);
    bioText = bioText.join("");

    bio.text(bioText)
  } catch (err) {
    $('#modal-main-txt').text("Error: Files not found!")
    $('#errorModal').modal('show')
  }
}

// Using img name, gets img url from wikipedia API and applies to page
async function wikiPic(imgName, imgAlt) {
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
    picEl.attr({ src: imgURL, alt: imgAlt })
  } catch (err) {
    $('#modal-main-txt').text("Error: Files not found!")
    $('#errorModal').modal('show')
  }
}


init(characterId);