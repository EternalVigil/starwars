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
	console.log(characters[i].name);
	selectionTiles.html(characters[i].name);
	selectionTiles.data("hp", characters[i].hp);
	console.log(selectionTiles.data("hp"));
	selectionTiles.data("atk", characters[i].atk);
	console.log(selectionTiles.data("atk"));
	selectionTiles.data("special",characters[i].special);
	console.log(selectionTiles.data("special"));
	
	
	$("#characterSelect").append(selectionTiles);
}