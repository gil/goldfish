// Code used to extract a list from: http://www.w3.org/TR/CSS/
function generateList() {

	var list = {
		name: "CSS Selectors",
		groups: []
	};

	var group = {
		name: "Selectors",
		entries: []
	};

	$(".data tbody tr").each(function(index, entryEl){

		entryEl = $(entryEl);

		group.entries.push({
			name: entryEl.find("th").text().replace(/[\s]{2,}/g, " ").trim(),
			description: entryEl.find("td").first().text().replace(/[\s]{2,}/g, " ").trim(),
			url: entryEl.find("td").find("a").first().attr("href")
		});

	});

	list.groups.push(group);
	console.log( JSON.stringify(list, null, "\t") );
}

if( window.jQuery ) {
	generateList();
} else {
	var script = document.createElement("script");
	script.src = "http://ajax.googleapis.com/ajax/libs/jquery/1.8.1/jquery.min.js";
	script.onload = generateList;
	document.body.appendChild(script);
}

true;