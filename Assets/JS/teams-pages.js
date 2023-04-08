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

  // check which team page we are in to choose the right characters array
  console.log(teamName.text())
  if (teamName.text() === "X-Men") {
    idArr = [magneto, storm, gambit, nightCrawler]
    charArr = ["Magneto", "Storm", "Gambit", "Night Crawler"]
  } else if (teamName.text() === "X-Force") {
    idArr = [deadpool, warpath, wolverine, domino]
    charArr = ["Deadpool", "Warpath", "Wolverine", "Domino"]
  } else if (teamName.text() === "Guardians of the Galaxy") {
    idArr = [groot, rocket, yondu, howardTheDuck]
    charArr = ["Groot", "Rocket", "Yondu", "Howard the Duck"]
  } else if (teamName.text() === "Avengers") {
    idArr = [ironMan, captainAmerica, thor, hulk]
    charArr = ["Iron Man", "Captain America", "Thor", "Hulk"]
  }

// 4 characters in each team, create an h3, add an image, and a link to the bio page
  for (var i=0; i<4; i++){
    var charName = $("<h3>")
    charName.text(charArr[i])
    charName.addClass("pt-4")
    idArr[i].append(charName);

    var linkToPage = $("<a>");
    linkToPage.text("Link to Bio");
    linkToPage.attr("href", "./" + idArr[i].text() + ".html")
    linkToPage.addClass("flex-wrap")
    idArr[i].append(linkToPage);

  }

  // adds imgs based on team name
  for (var i=0; i<4; i++){
    if  (teamName.text() === "Avengers" || teamName.text() === "X-Force") {
      getAvengersImg(charArr[i], idArr[i]);
    }
  }
}


marvelTeam()


    
// Get Avengers and X-Force Pics function

async function getAvengersImg(charArr, idArr) {
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