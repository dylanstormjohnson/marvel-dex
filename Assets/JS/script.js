var copyrights = $("#copyrights");

var myTeamArr = {
    teamName: "", 
    teamComp: []
}
var addBtn = $('#addToTeam')

addBtn.on('click', addHero)

// Load user's team from local storage
function loadMyTeam() {
    var thisTeamArr = JSON.parse(localStorage.getItem("myTeamCharacters")) || myTeamArr
    return thisTeamArr;
}

// Saves user's team to local storage
function saveMyTeam(myTeamArr) {
    localStorage.setItem("myTeamCharacters", JSON.stringify(myTeamArr))
}

// Adds hero to team by clicking on "Add to team" btn on char bio pages
function addHero() {
    myTeamArr = loadMyTeam()
    var thisChar = $("title").text()
    // If character is already in the array, show error
    if (myTeamArr.teamComp.indexOf(thisChar) !== -1) {
        $('#modal-main-txt').text("This character is already on your team!")
        $('#errorModal').modal('show');
    }
    // If team is less than 4, add character to user's team, save, and relocate to "My Team" page
    else if (myTeamArr.teamComp.length < 4){
        myTeamArr.teamComp.push(thisChar);
        saveMyTeam(myTeamArr);
        window.location.href= "my-team.html"
    }
    // If team is already full, display error message modal
    else {
        $('#modal-main-txt').text("You already have a full team! Remove a team member first!")
        $('#errorModal').modal('show');
    }
}

// Dynamically apply copyright info to footer on every page
function getCopyrights(copyrights) {
    var copyrightText = ` 
        <div class="d-flex justify-content-center">
        <a href='http://marvel.com'>Data provided by Marvel. © 2023 MARVEL</a> 
        <p>Bio adapted from Wikipedia</p>
        </div> 
        <p>Neither Marvel nor Wikipedia endorsed this project nor have collaborated to create this page. It is a student project. All characters, data, and images are copyright their respective owners</p>
    `   
    copyrights.append(copyrightText)
}

getCopyrights(copyrights);

