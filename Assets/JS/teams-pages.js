var teamName = $("#teamName");
var magneto = $("#magneto");
var storm = $("#storm");
var gambit = $("#gambit");
var nightCrawler = $("#nightCrawler");
var deadpool = $("#deadpool");
var warpath = $("#warpath");
var wolverine = $("#wolverine");
var domino = $("#domino");
var groot = $("#groot");
var rocket = $("#rocket");
var yondu = $("#yondu");
var howardTheDuck = $("#howardTheDuck");
var ironMan = $("#ironMan");
var captainAmerica = $("#captainAmerica");
var thor = $("#thor");
var hulk = $("#hulk");

var apiKey = "d2cfd98c8f587c9ae382ce0a8ada3b38";

// create a function to dynamically add characters on each team

function marvelTeam() {
  var charArr = [];
  var idArr = [];
  var teams = ["X-Men", "X-Force", "Guardians of the Galaxy", "Avengers"];
}

  // check which team page we are in to choose the right characters array
  if (teamName.text() === "X-Men") {
    idArr = [magneto, storm, gambit, nightCrawler]
    charArr = ["Magneto", "Storm", "Gambit", "Night Crawler"]
    linkArr = ["magneto", "storm", "gambit", "nightcrawler"]
  } else if (teamName.text() === "X-Force") {
    idArr = [deadpool, warpath, wolverine, domino]
    charArr = ["Deadpool", "Warpath", "Wolverine", "Domino"]
    linkArr = ["deadpool", "warpath", "wolverine", "domino"]
  } else if (teamName.text() === "Guardians of the Galaxy") {
    idArr = [groot, rocket, yondu, howardTheDuck]
    charArr = ["Groot", "Rocket", "Yondu", "Howard the Duck"]
    linkArr = ["groot", "rocket", "yondu", "howardTheDuck"]
  } else if (teamName.text() === "Avengers") {
    idArr = [ironMan, captainAmerica, thor, hulk]
    charArr = ["Iron Man", "Captain America", "Thor", "Hulk"]
    linkArr = ["ironMan", "captainAmerica", "thor", "hulk"]
  }

// 4 characters in each team, create an h3, add an image, and a link to the bio page
  for (var i=0; i<4; i++){
    var charName = $("<h3>")
    charName.text(charArr[i])
    charName.addClass("pt-4")
    idArr[i].append(charName);
    var linkToPage = $("<a>");
    linkToPage.text("Link to Bio");
    // var linkText = idArr[i].text().replace(/\s/g, "");
    var linkText = linkArr[i];

    linkToPage.attr("href", "./" + linkText + ".html")
    linkToPage.addClass("flex-wrap")
    idArr[i].append(linkToPage);

  }

  // adds imgs based on team name
  for (var i=0; i<4; i++){
    console.log(teamName.text())
    if  (teamName.text() === "Avengers" || teamName.text() === "X-Force") {
      getMarvelImg(charArr[i], idArr[i]);
    }
    else if (teamName.text() === "Guardians of the Galaxy") {
        if (charArr[i] ===  "Howard the Duck") {
          getMarvelImg(charArr[i], idArr[i]);
        }
        else if(charArr[i] === "Rocket"){
          getMarvelImg("Rocket Raccoon", idArr[i]);
        }
        else if(charArr[i] === "Groot") {
          var imgName = "File:I_am_Groot_vol_1.jpeg";
          wikiPic(charArr[i], imgName, idArr[i]);
        }
        else if (charArr[i] === "Yondu") {
          var imgName = "File:Guardians_of_the_Galaxy_44.jpg";
          wikiPic(charArr[i], imgName, idArr[i]);
        }
    }
    else if (teamName.text() === "X-Men") {
        if (charArr[i] === "Magneto"){
          var imgName = "File:Magneto_(Marvel_Comics_character).jpg";
          wikiPic(charArr[i], imgName, idArr[i]);
        }
        else if (charArr[i] === "Storm") {
          var imgName = "File:Storm_(Ororo_Munroe).png";
          wikiPic(charArr[i], imgName, idArr[i]);
        }
        else if (charArr[i] === "Gambit") {
          var imgName = "File:Gambit_(Marvel_Comics).png";
          wikiPic(charArr[i], imgName, idArr[i]);
        }
        else if (charArr[i] === "Night Crawler") {
          getMarvelImg("Nightcrawler", idArr[i]);
        }
    }
  }



marvelTeam()

// Get Marvel database function
async function getMarvelImg(charArr, idArr) {
  try {
      var queryURL = "http://gateway.marvel.com/v1/public/characters?name="+ charArr +  "&apikey=" + apiKey;
      var rawData = await fetch(queryURL)
      if (rawData.status !== 200) {
          $('#modal-main-txt').text("Error: Files not found!")
          $('#errorModal').modal('show')
          return;
          }
      var data = await rawData.json()
      var picUrl = data.data.results[0].thumbnail.path+".jpg"
      var charImg = $("<img>");
      charImg.attr("src", picUrl)
      charImg.addClass("img-fluid");
      idArr.append(charImg);
  } catch(err) {
      console.log("error-not 404")
      $('#modal-main-txt').text("Error: Files not found!")
      $('#errorModal').modal('show')
  }
}

// Get Wikipedia images 
async function wikiPic(charName, picName, idArr) {
  try{
    var queryURL = "https://en.wikipedia.org/w/api.php?origin=*&action=query&format=json&prop=imageinfo&titles=" + picName + "&formatversion=2&iiprop=url"
    var rawData = await fetch(queryURL)
    if (rawData.status !== 200) {
        $('#modal-main-txt').text("Error: Files not found!")
        $('#errorModal').modal('show')
        return;
        }
    var data = await rawData.json()
    var imgURL = data.query.pages[0].imageinfo[0].url;
    var charImg = $("<img>");
    charImg.attr("src", imgURL)
    charImg.addClass("img-fluid");
    idArr.append(charImg);
} catch(err) {
    $('#modal-main-txt').text("Error: Files not found!")
    $('#errorModal').modal('show')
}
}