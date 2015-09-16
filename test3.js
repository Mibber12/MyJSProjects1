/*
uitleg over quiz
5 vragen die aan gebruiker gesteld worden
bijhouden van aantal correct beantwoorde vragen
user ontvangt gouden kroon bij 5 correcte antwoorden
user ontvangt zilveren kroon bij 3 correcte antwoorden
eind boodschap wanneer user aantal vragen correct heeft beantwoord
ranking user
*/


//beginning of quiz
var correct = 0;

//ask questions
var answer1 = prompt("Hoe heet jij?");
if ( answer1.toUpperCase() === "MIREILLE") {
	correct += 1;

}

var answer2 = prompt("Wat is de naam van je man?");
if ( answer2.toUpperCase() === "MARTIN") {
	correct += 1;
}

var answer3 = prompt("Hoe heet je dochter?");
if ( answer3.toUpperCase() === "MARY") {
	correct += 1;
 
}

var answer4 = prompt("Hoe heet je zoon?");
if ( answer4.toUpperCase() === "JAMES") {	
	correct += 1;

}

var answer5 = prompt("Hoe heet je broer?");
if ( answer5.toUpperCase() === "SEAN") {	
	correct += 1;

}

// output van de resultaten
document.write("<p>Je hebt " + correct + " 5 vragen correct beantwoord.</p>");

//output rank
if  ( correct === 5 ) {
	document.write("<p><strong>Je hebt een gouden kroon gewonnen.<strong></p>");

} else if ( correct >= 3 ) {
	document.write("<p><strong>Je hebt een zilveren kroon gewonnen.<strong></p>");
	


} else if ( correct >= 1 ) {
	document.write("<p><strong>Je hebt een bronzen kroon gewonnen.<strong></p>");

} else {
	document.write("<p><strong>Helaas, je hebt geen kroon gewonnen!<strong></p>");

}


