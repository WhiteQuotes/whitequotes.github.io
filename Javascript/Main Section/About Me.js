var GeneralInfoText ='Hello, I Am WhiteQuotes And All I Do Is Create Such Websites And Games For Fun. I Dont Really Work For A Anyone As My Sole Intent Behind This Is To Learn. There Are Many Sources I Learn From For Ex: <ul> <li><a href="https://www.freecodecamp.org">FreeCodeCamp</a></li> <li><a href="https://www.youtube.com">YouTube</a></li> <li><a href="https://stackoverflow.com/">Stack Overflow</a></li> <li>ETC.</li> </ul>';
var Info_2020_Text = 'Will Be Added In Future';
var Info_2021_Text = 'Will Be Added In Future';

function Year_General() {
	document.getElementById('paragraphinfo').innerHTML = GeneralInfoText;
}

function Year_2020() {
	document.getElementById('paragraphinfo').innerHTML = Info_2020_Text;
}
function Year_2021() {
	document.getElementById('paragraphinfo').innerHTML = Info_2021_Text;
}

document.getElementById('Year-General').onmouseover = function(){Year_General()}
document.getElementById('Year-2020').onmouseover = function(){Year_2020()}
document.getElementById('Year-2021').onmouseover = function(){Year_2021()}
