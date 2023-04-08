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
var doctorStrange = $("#doctorStrange");

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
    idArr = [ironMan, captainAmerica, thor, doctorStrange]
    charArr = ["Iron Man", "Captain America", "Thor", "Doctor Strange"]
  }

// 4 characters in each team, create an h3, add an image, and a link to the bio page
  for (var i=0; i<4; i++){
    var charName = $("<h3>")
    charName.text(charArr[i])
    charName.addClass("pt-4")
    idArr[i].append(charName);

    var charImg = $("<img>");

    // dynamically create the images of the characters in each team
    async function characterImage() {
      var queryURL = "http://gateway.marvel.com/v1/public/characters?name="+ charName.text() +  "&apikey=" + apiKey;
      var rawData = await fetch(queryURL)
      /* If API call fails, */
      // if (!rawData.ok) {
      //     console.log("Whoops")
      //     return;
      // }
      var data = await rawData.json()
      var picUrl = data.data.results[0].thumbnail.path+".jpg"
      console.log(picUrl)
      charImg.attr("src", picUrl)
      // charImg.addClass("img-fluid");
      // idArr[i].append(charImg);

  }

  characterImage()

    

    var linkToPage = $("<a>");
    linkToPage.text("Link to Bio");
    linkToPage.attr("href", "./" + idArr[i].text() + ".html")
    linkToPage.addClass("flex-wrap")
    idArr[i].append(linkToPage);
    
  
  





  }


















}






marvelTeam()

