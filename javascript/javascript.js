// JavaScript Document

var characters = [{
	name: "Luke Skywalker",
	hp: 100,
	atk: 25,
	special: "25% chance to crit for 200% damage",
	picture: "Assets/Luke.png"
}, {
	name: "Obi Wan Kenobi",
	hp: 120,
	atk: 20,
	special: "increased attack on repetition",
	picture: "Assets/obi-wan.jpg"

}, {
	name: "Darth Sidious",
	hp: 120,
	atk: 30,
	special: "every 3rd attack, add 25 damage as force lightning",
	picture: "Assets/palpatine.jpeg"
}, {
	name: "Darth Maul",
	hp: 180,
	atk: 45,
	special: "50% increased damage on counter",
	picture: "Assets/Maul.jpg"
}];
for (var i = 0; i < characters.length; i++) {
	var selectionTiles = new $("<div>");
	
	var charPic = new $("<img>");
	charPic.attr("src", characters[i].picture);
	selectionTiles.attr("id", "char"+i);
	selectionTiles.addClass("tiles");
	
	charPic.appendTo($("char"+i));
	
	//selectionTiles.attr("class", "characterPicture");
	//selectionTiles.append($("<img>",{class:"characterImg" ,src:characters[i].picture}));
	
	console.log(characters[i].name);
	selectionTiles.data("name", characters[i].name);
	selectionTiles.append(selectionTiles.data("name"));
	
	selectionTiles.data("hp", characters[i].hp);
	selectionTiles.append("<br>" + selectionTiles.data("hp"));
	console.log(selectionTiles.data("hp"));
	
	selectionTiles.data("atk", characters[i].atk);
	selectionTiles.append("<br>" + selectionTiles.data("atk"));
	console.log(selectionTiles.data("atk"));
	
	selectionTiles.data("special",characters[i].special);
	console.log(selectionTiles.data("special"));
	
	
	$("#characterSelect").append(selectionTiles);
}
