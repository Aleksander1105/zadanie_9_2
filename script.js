var ladiesNames = ['Asia', 'Kasia', 'Ola', 'Sylwia', 'Ola', 'Ania'];
var maleNames = ['Jakub', 'Marek', 'Jan', 'Hubert', 'Czesław', 'Rysiek'];
var allNames = ladiesNames.concat(maleNames);
var newName = 'Marian';

if (allNames.indexOf(newName) === -1) {
	console.log("You can go further");
} else {
	console.log("You can't go any further");
}

var x = allNames.push(newName);

console.log(allNames);