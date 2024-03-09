const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
	let results = [];

	// TODO
	if (str.length > 0) {
		const newStr = RegExp(str, "i");		
		results = fruit.filter((s) => newStr.test(s)); // this will filter the fruit list to a list of whatever contains users keystroke input
	  }
	return results;
}

function searchHandler(e) {
	// TODO
	const inputVal = e.target.value; // this takes the input from the search bar
	const results = search(inputVal); // this runs the search function to return the results list
	showSuggestions(results, inputVal); 
}

function showSuggestions(results, inputVal) {

	// TODO
	suggestions.innerHTML = ""; // this clears the list each time you type another letter or else it will append and add to the dropdown
	if (results.length > 0) {
		results.forEach((result) => {
		  const li = document.createElement("li");
		  li.textContent = result;
		  suggestions.appendChild(li);
		});
		suggestions.style.display = "block"; // this shows the list
	  } else {
		suggestions.style.display = "none"; // this will hide if there is no list
	  }
}

function useSuggestion(e) {
	// TODO
	input.value = e.target.textContent; // selects what the user clicked on and moves it in the search bar
	suggestions.style.display = "none"; // this will hide the list
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);