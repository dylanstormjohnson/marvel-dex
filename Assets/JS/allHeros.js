var allHeros = {
  1: {
    charName: "captain america",
    wikiPageName: "Captain_America",
    imgName: null,
    imgAlt: "Captain America glares at the viewer, hunched over as if prepared to lunge at you.",
    getCharacterDescription: function (bioText) {
      bioText.splice(0, 2)
      bioText.splice(4, 4)
      bioText.splice(12, 5)
      bioText[0] = bioText[0].replace("the character", "Captain America");
      return bioText;
    }
  },
  2: {
    charName: "deadpool",
    wikiPageName: "Deadpool",
    imgName: null,
    imgAlt: "Deadpool, two katana hilts extending above his shoulders, cocks an eyebrow at the viewer.",
    getCharacterDescription: function (bioText) {
      bioText.splice(0, 2)
      bioText.splice(16, 3)
      bioText[0] = bioText[0].replace("the character", "Deadpool");
      return bioText;
    }
  },
  3: {
    charName: "domino",
    wikiPageName: "Domino_(character)",
    imgName: null,
    imgAlt: "Domino hurls a fist towards the viewer, her eye encased in the usual black circle.",
    getCharacterDescription: function (bioText) {
      bioText.splice(0, 2)
      bioText[0] = bioText[0].replace("The character", "Domino (Neena Thurman)")
      bioText.splice(8, 2)
      bioText[8] = bioText[8].replace("\n\n\n== Publication history ==\n", "")
      return bioText;
    }
  },
  4: {
    charName: "gambit",
    wikiPageName: "Gambit_(Marvel_Comics)",
    imgName: "File:Gambit_(Marvel_Comics).png",
    imgAlt: "With his bo staff thrown back over his shoulder, Gambit brandishes a glowing kinetically charged playing card at the viewer.",
    getCharacterDescription: function (bioText) {
      return bioText;
    }
  },
  5: {
    charName: "Groot",
    wikiPageName: "Groot",
    imgName: "File:I_am_Groot_vol_1.jpeg",
    imgAlt: "Comic book cover of Baby Groot looking up curiously towards a purple sky in an alien landscape.",
    getCharacterDescription: function (bioText) {
      bioText.splice(0, 2)
      bioText[0] = bioText[0].replace("the character", "Groot");
      bioText.splice(12, 2)
      bioText.splice(14, 5)
      return bioText;
    }
  },
  6: {
    charName: "howard the duck",
    wikiPageName: "Howard_the_Duck",
    imgName: null,
    imgAlt: "Howard, eyes wide in fear, sprints towards the viewer while reporters with cameras give chase.",
    getCharacterDescription: function (bioText) {
      bioText.splice(0, 4)
      bioText[0] = bioText[0].replace("The character", "Howard the Duck")
      bioText.splice(22, 11)
      bioText[21] = bioText[21].replace(".", '."')
      return bioText;
    }
  },
  7: {
    charName: "hulk",
    wikiPageName: "Hulk",
    imgName: null,
    imgAlt: "Close up of Hulk's face, his eyes and features half-hidden in shadow, almost looking sad",
    getCharacterDescription: function (bioText) {
      bioText.splice(0, 2)
      bioText[0] = bioText[0].replace("the character", "the Hulk")
      return bioText;
    }
  },
  8: {
    charName: "Iron Man",
    wikiPageName: "Iron_Man",
    imgName: null,
    imgAlt: "Iron Man in his yellow and black suit extends hands towards the viewer as if to blast his hand lasers",
    getCharacterDescription: function (bioText) {
      bioText.splice(0, 4)
      bioText[0] = bioText[0].replace("The character", "Iron Man")
      return bioText;
    }
  },
  9: {
    charName: "magneto",
    wikiPageName: "Magneto_(Marvel_Comics)",
    imgName: "File:Magneto_(Marvel_Comics_character).jpg",
    imgAlt: "Magneto hovers in the air, his hand raised in effort, and behind him, two pillars of amalgamated metal form an X.",
    getCharacterDescription: function (bioText) {
      bioText.splice(0, 2)
      bioText[0] = bioText[0].replace("Created by writer Stan Lee and artist/co-writer Jack Kirby, the character ", "Magneto (birth name: Max Eisenhardt; alias: Erik Lehnsherr and Magnus) ")
      bioText.splice(16, 3)
      return bioText;
    }
  },
  10: {
    charName: "nightcrawler",
    wikiPageName: "Nightcrawler_(character)",
    imgName: null,
    imgAlt: "Nightcrawler with his glowing yellow eyes brandishes a sword towards the viewer",
    getCharacterDescription: function (bioText) {
      bioText.splice(0, 2)
      bioText[0] = bioText[0].replace("he", "Nightcrawler (Kurt Wagner)")
      bioText.splice(14, 7)
      return bioText;
    }
  },
  11: {
    charName: "rocket raccoon",
    wikiPageName: "Rocket_Raccoon",
    imgName: null,
    imgAlt: "Rocket sprinting towards the viewer with a mini-gun in-hand and an arsenal of guns strapped to his back",
    getCharacterDescription: function (bioText) {
      bioText.splice(0, 2);
      bioText[0] = bioText[0].replace("the character", "Rocket")
      bioText.splice(8, 2)
      bioText.splice(14, 3)
      return bioText;
    }
  },
  12: {
    charName: "storm",
    wikiPageName: "Storm_(Marvel_Comics)",
    imgName: "File:Storm_(Ororo_Munroe).png",
    imgAlt: "Storm flies into the air in front of a shadow-laden moon, the stars peaking out around her.",
    getCharacterDescription: function (bioText) {
      bioText.splice(0, 2)
      bioText[0] = bioText[0].replace("the character", "Storm")
      return bioText;
    }
  },
  13: {
    charName: "thor",
    wikiPageName: "Thor_(Marvel_Comics)",
    imgName: null,
    imgAlt: "Close up of Thor, who's wearing a helmet and sporting his red cape",
    getCharacterDescription: function (bioText) {
      bioText.splice(0, 2)
      bioText[0] = bioText[0].replace("the character", "Thor Odinson")
      bioText.splice(10, 2)
      bioText.splice(12, 11)
      return bioText;
    }
  },
  14: {
    charName: "warpath",
    wikiPageName: "Warpath_(comics)",
    imgName: null,
    imgAlt: "Warpath wearing his mask in his red and blue uniform",
    getCharacterDescription: function (bioText) {
      bioText[14] = bioText[14].replace("\n\n\n== Publication history ==\n", "")
      bioText.splice(20, 5)
      bioText[3] = bioText[3].replace(".", ". ")
      bioText[13] = bioText[13].replace(".", ". ")
      return bioText;
    }
  },
  15: {
    charName: "wolverine",
    wikiPageName: "Wolverine_(character)",
    imgName: null,
    imgAlt: "Image of Wolverine wearing his mask",
    getCharacterDescription: function (bioText) {
      bioText.splice(6, 8)
      bioText.splice(12, 5)
      bioText[8] = bioText[8].replace(/:\s265\s/, "")
      bioText[10] = bioText[10].replace(/:\s277\s/, "")
      bioText[10] = bioText[10].replace(/:\s263,\s265\s/, "")
      return bioText;
    }
  },
  16: {
    charName: "yondu",
    wikiPageName: "Yondu",
    imgName: "File:Guardians of the Galaxy 44.jpg",
    imgAlt: "Comic book cover of Yondu charging towards the viewer with two swords raised high while two blade-armed, green-skinned aliens following behind.",
    getCharacterDescription: function (bioText) {
      bioText.splice(0, 2)
      bioText[0] = bioText[0].replace("the character", "Yondu Udonta, or simply Yondu, ")
      bioText.splice(16, 7)
      return bioText;
    }
  },
}