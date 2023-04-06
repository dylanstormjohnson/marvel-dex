var myTeam = ['duderinos', 'storm', "hi"]
var teamPick = $('.team')
var characterContainerDivEl = $("#character-container");

//localStorage.getItem('')

function init() {
  //myTeam = JSON.parse(localStorage.getItem("myTeamCharacters")) 

  for (var i = 0; i < myTeam.length; i++) {
    var charName = myTeam[i]
    var html = `
    <div class="team col-3 vh-100" id="playerOne">
      <img src="./Assets/Images/Screenshot 2023-03-27 at 8.36.28 PM.png" class="img-fluid" alt="Marvel Character">
      <button class='remove-hero' >Remove Hero</button>
    </div>
    `

    characterContainerDivEl.append(html);

  }

  for (var k = 0; k < 4 - myTeam.length; k++) {
    var charName = myTeam[i]
    var html = `
    <div class="add-hero col-3 vh-100">
    <i class="fa-solid fa-plus-large"></i>
    </div>
    `

    characterContainerDivEl.append(html);
  }


}

init();


characterContainerDivEl.on('click', '.remove-hero', function(event) {
  console.log('remove hero')
});

characterContainerDivEl.on('click', '.add-hero', function(event) {
  console.log('add hero')
});


































