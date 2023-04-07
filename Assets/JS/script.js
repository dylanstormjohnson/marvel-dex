// var characters = ["Deadpool", "Warpath", "Wolverine", "Domino", "Magneto", "Storm", "Gambit", "Night Crawler", "Iron Man", "Captain America", "Thor", "Dr. Strange", "Groot", "Rocket", "Yondu", "Howard the Duck"];

// window.redirect

// get search input value
// for (var i = 0; i < characters.length; i++){
// if(searchInputValue == character[i]){
//   window.location.replace(`./${character[i]}.html`)
// }
// }

var copyrights = $("#copyrights");



function getCopyrights(copyrights) {
    console.log(copyrights)
    var copyrightText = ` 
        <div class="d-flex justify-content-center">
        <a href='http://marvel.com'>Data provided by Marvel. © 2023 MARVEL</a> 
        <p>Bio adapted from Wikipedia</p>
        </div> 
        <p>Neither Marvel nor Wikipedia endorsed this project nor have collaborated to create this page. It is a student project. All characters, data, and images are copyright their respective owners</p>
        
    `   
    console.log(copyrightText)
    copyrights.append(copyrightText)
}

getCopyrights(copyrights);

