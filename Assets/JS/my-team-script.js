var myTeamArr = {
  teamName: "", 
  teamComp: []
}
var teamPick = $('.team')
var characterContainerDivEl = $("#character-container");
var apiKey = "d2cfd98c8f587c9ae382ce0a8ada3b38";

function init() {
  var myTeam = JSON.parse(localStorage.getItem("myTeamCharacters")) || myTeamArr

  loadTeamName(myTeam);

  for (var i = 0; i < myTeam.teamComp.length; i++) {
    var charName = myTeam.teamComp[i];
    var html = `
    <div class="team col-sm-12 col-lg-3 col-md-6 d-flex flex-column align-items-center" id="playerOne">
      <p id=teammateName>${charName}</p>
      <img src="" class="img-fluid" id=${charName} alt="Marvel Character">
      <button class='remove-hero btn btn-danger btn-outline-warning'>Remove Hero</button>
    </div>
    `
    characterContainerDivEl.append(html);
    loadPic(charName)
  }

  // for the remainder of empty spaces in my team, add a + sign to add more characters
  for (var k = 0; k < 4 - myTeam.teamComp.length; k++) {
    var charName = myTeam.teamComp[i]
    var html = `
    <div class="add-hero col-sm-12 col-lg-3 col-md-6 d-flex flex-column align-items-center justify-content-center">
    <i class="fa-solid fa-plus fa-2xl" style="font-size: 7rem; font-family: 'Faster One', cursive; color:rgb(18, 157, 18);" ></i>
    </div>
    `
    characterContainerDivEl.append(html);
  }
}

init();

// when the remove button is clicked, empty the space and create + sign to add another hero up to a max of 4
characterContainerDivEl.on('click', '.remove-hero', function(event) {
  var myTeam = loadMyTeam();
  var charName = $(event.target).siblings('p').text()

  var newTeamComp = myTeam.teamComp.filter((val) => val !== charName);

  myTeam.teamComp = newTeamComp;
  saveMyTeam(myTeam)
  
  var html = `
  <div class="add-hero col-3 d-flex justify-content-center align-items-center">
  <i class="fa-solid fa-plus fa-2xl" style="font-size: 3rem" ></i>
  </div>
  ` 
  var parentContainer =  $(event.target).parent('.team')
  parentContainer.addClass("d-flex justify-content-center align-items-center")

  parentContainer.html(html)
});


// add button leads back to home page to select new heros
characterContainerDivEl.on('click', '.add-hero', function(event) {
  window.location.href= "index.html"
});

$("main").on("click", "#submit-btn", function(event) {
  event.preventDefault();
  var myTeam = loadMyTeam();
  var userTeamName = $("#teamNameInput").val();
  myTeam.teamName = userTeamName;
  saveMyTeam(myTeam);
  loadTeamName(myTeam);
})

$("main").on("click", ".fa-pen", function(event) {
  var myTeam = loadMyTeam();
  var emptyName = "";
  myTeam.teamName = emptyName;
  saveMyTeam(myTeam);
  $(event.target).remove();
  loadTeamName(myTeam);
})

function loadMyTeam() {
  var thisTeamArr = JSON.parse(localStorage.getItem("myTeamCharacters")) || myTeamArr
  return thisTeamArr;
}

function saveMyTeam(myTeamArr) {
  localStorage.setItem("myTeamCharacters", JSON.stringify(myTeamArr))
}



function loadPic(name) {
  switch (name) {
    case "Captain America":
      url = marvelApiPic(name);
      break;
    case "Deadpool":
      url = marvelApiPic(name);
      break;
    case "Domino":
      url = marvelApiPic(name);
      break;
    case "Howard the Duck":
      url = marvelApiPic(name);
      break;
    case "Hulk":
      url = marvelApiPic(name);
      break;
    case "Iron Man":
      url = marvelApiPic(name);
      break;
    case "Nightcrawler":
      url = marvelApiPic(name);
      break;
    case "Rocket Raccoon":
      url = marvelApiPic(name);
      break;
    case "Thor":
      url = marvelApiPic(name);
      break;
    case "Warpath":
      url = marvelApiPic(name);
      break;
    case "Wolverine":
      url = marvelApiPic(name);
      break;
    case "Storm":
      var picName = "File:Storm_(Ororo_Munroe).png";
      wikiPic(name, picName);
      break;
    case "Magneto":
        var picName = "File:Magneto_(Marvel_Comics_character).jpg";
        wikiPic(name, picName);
        break;
    case "Gambit":
        var picName = "File:Gambit_(Marvel_Comics).png";
        wikiPic(name, picName);
        break;
    case "Groot":
        var picName = "File:I_am_Groot_vol_1.jpeg";
        wikiPic(name, picName);
        break;
    case "Yondu":
      var picName = "File:Guardians_of_the_Galaxy_44.jpg";
      wikiPic(name, picName);
      break;
  }
}



async function marvelApiPic(name) {
    try {
        var queryURL = "http://gateway.marvel.com/v1/public/characters?name="+ name +  "&apikey=" + apiKey;
        var rawData = await fetch(queryURL);
        if (rawData.status !== 200) {
            $('#modal-main-txt').text("Error: Files not found!");
            $('#errorModal').modal('show');
            return;
            }
        var data = await rawData.json();
        var picUrl = data.data.results[0].thumbnail.path+".jpg";
        $(`#${name}`).attr("src", picUrl)
    } catch(err) {
        $('#modal-main-txt').text("Error: Files not found!");
        $('#errorModal').modal('show');
    }
}

async function wikiPic(charName, picName) {
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
    $(`#${charName}`).attr("src", imgURL)
} catch(err) {
    $('#modal-main-txt').text("Error: Files not found!")
    $('#errorModal').modal('show')
}
}

function loadTeamName(myTeam) {
  var teamSaveName = myTeam.teamName;
  var formEl = $("#name-form")
  formEl.html("");
  if (teamSaveName === "" || !teamSaveName) {
    var html =`        
      <input type="text" id="teamNameInput" placeholder="Name Your Team!">
      <button id="submit-btn">Submit</button>
    `
    $("#teamName").text("Name Your Team!")
    formEl.append(html);
  }
  else {
    var html =`<i class="fa-solid fa-pen"></i>`
    $("#teamName").text(teamSaveName)
    $("#titleContainer").append(html)
  }
}






















