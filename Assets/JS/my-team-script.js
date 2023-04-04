var myTeam = []
var addCharacter = document.querySelector('#addToTeam')
var removeCharacter =document.querySelector('#removeCharacter')

var characters = localStorage.getItem("addCharacter");

window.localStorage.setItem('addCharacter', JSON.stringify(''))
