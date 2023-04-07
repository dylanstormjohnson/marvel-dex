var myTeamArr = {
  teamName: "", 
  teamComp: []
}
var teamPick = $('.team')
var characterContainerDivEl = $("#character-container");

function init() {
  var myTeam = JSON.parse(localStorage.getItem("myTeamCharacters")) || myTeamArr

  for (var i = 0; i < myTeam.teamComp.length; i++) {
    var charName = myTeam.teamComp[i]
    var html = `
    <div class="team col-3" id="playerOne">
      <p>${charName}</p>
      <img src="./Assets/Images/Screenshot 2023-03-27 at 8.36.28 PM.png" class="img-fluid" alt="Marvel Character">
      <button class='remove-hero' >Remove Hero</button>
    </div>
    `

    characterContainerDivEl.append(html);

  }

  // for the remainder of empty spaces in my team, add a + sign to add more characters
  for (var k = 0; k < 4 - myTeam.teamComp.length; k++) {
    var charName = myTeam.teamComp[i]
    var html = `
    <div class="add-hero col-3 d-flex justify-content-center align-items-center">
    <i class="fa-solid fa-plus fa-2xl" style="font-size: 3rem" ></i>
    </div>
    `

    characterContainerDivEl.append(html);
  }


}

init();

// when the remove button is clicked, empty the space and create + sign to add another hero up to a max of 4
characterContainerDivEl.on('click', '.remove-hero', function(event) {
  console.log('remove hero')
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
  $(event.target).parent('.team').html(html)
});

// add button leads back to home page to select new heros
characterContainerDivEl.on('click', '.add-hero', function(event) {
  console.log('add hero')
  window.location.href= "index.html"
});

function loadMyTeam() {
  var thisTeamArr = JSON.parse(localStorage.getItem("myTeamCharacters")) || myTeamArr
  return thisTeamArr;
}

function saveMyTeam(myTeamArr) {
  localStorage.setItem("myTeamCharacters", JSON.stringify(myTeamArr))
}


































