// JavaScript Document

var characters = [{
	name: "Luke Skywalker",
	hp: 100,
	atk: 25,
	special: "",
	picture: "Assets/Luke.png"
}, {
	name: "Obi Wan Kenobi",
	hp: 120,
	atk: 20,
	special: "",
	picture: "Assets/obi-wan.jpg"

}, {
	name: "Darth Sidious",
	hp: 120,
	atk: 30,
	special: ""
}, {
	name: "Darth Maul",
	hp: 180,
	atk: 45,
	special: ""
}];
for (var i = 0; i < characters.length; i++){
var selectionTiles = new $("<button>");
selectionTiles.html = characters[i].name;
selectionTiles.data = characters[i].name;
selectionTiles.data = ("atk", characters[i].atk);
selectionTiles.data = ("hp", characters[i].hp);
}
