var colors = ["Blue", "Red", "Orange", "Purple", "Hazel", "Aquamarine", "Periwinkle", "Azure", "Fuchsia", "Chocolate", "Amber", "Amaranth"];
var reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];
var output = "";

var hohohoElement = document.getElementById("coloredReindeer");

for (var i = 0; i < reindeer.length; i += 1) {
	output = colors[i] + " " + reindeer[i];
	hohohoElement.innerHTML += "<p>" + output + "</p>";
}