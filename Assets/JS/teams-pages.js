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


// create a function to dynamically add characters on each team
function marvelTeam() {
  var charArr = [];
  var idArr = [];
  var teams = ["X-Men", "X-Force", "Guardians of the Galaxy", "Avengers"];


  // for (var j=0; j<teams.length; j++){
  //   teamName.text(teams[j])

    // var teamNameH1El = $("<h1>")
    // teamNameH1El.text(teams[j])
    // teamName.append(teamNameH1El)
    // teamNameH1El.addClass("pt-4")

    // var descriptionPEl = $("<p>");
    // descriptionPEl.text("dynamically add description")
    // teamName.append(descriptionPEl)

    // var divContainer = $("<div>");
    // divContainer.addClass("container");
    // teamName.append(divContainer);

    // var divRow = $("div");
    // divRow.addClass("row mt-4")
    // teamName.append(divRow)

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
      idArr[i].append(charName);


      var charImg = $("<img>");
      charImg.attr("src", "./Assets/Images/Screenshot 2023-03-27 at 8.36.28 PM.png")
      charImg.addClass("img-fluid");
      idArr[i].append(charImg);

      var linkToPage = $("<a>");
      linkToPage.text("Link to Bio");
      linkToPage.attr("href", "./" + idArr[i].text() + ".html")
      idArr[i].append(linkToPage);
    
    }
  // }
}

marvelTeam()