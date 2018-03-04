var ladiesNames = ['Asia', 'Kasia', 'Ola', 'Sylwia', 'Ola', 'Ania'];
var maleNames = ['Jakub', 'Marek', 'Jan', 'Hubert', 'Czesław', 'Rysiek'];
var allNames = ladiesNames.concat(maleNames);
var newName = 'Marian';

if (allNames.indexOf(newName) === -1) {
	allNames.push(newName);
	console.log(allNames);
} else {
	console.log("You can't go any further");
}