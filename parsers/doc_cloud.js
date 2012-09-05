// Code used to extract a list from: http://underscorejs.org/ and http://backbonejs.org/

function shouldIgnore(name) {

	var ignoreList = [
		"Downloads", "Links & Suggested Reading", "Change Log", // Underscore
		"Introduction", "Upgrading to 0.9", "Examples", "DocumentCloud", "Rdio", "LinkedIn Mobile", "Flow", // Backbone
		"Wunderkit", "Disqus", "Khan Academy", "Do", "Pitchfork", "Spin", "Walmart Mobile", "Groupon Now!",
		"Basecamp Mobile", "Slavery Footprint", "Stripe", "Airbnb", "Diaspora", "SoundCloud Mobile", "Art.sy",
		"Pandora", "Inkling", "Code School", "CloudApp", "SeatGeek", "Easel", "Prose", "Grove.io", "KANO/GAMES",
		"Shortmail", "scroll kit", "Battlefield Play4Free", "Salon.io", "TileMill", "Blossom", "Decide", "Trello",
		"Ducksboard", "QuietWrite", "Tzigla", "WordPress.com", "Foursquare", "F.A.Q."
	];

	for( var i = 0; i < ignoreList.length; i++ ) {
		if( name.indexOf( ignoreList[i] ) > -1 ) {
			return true;
		}
	}

	return false;
}

function generateList() {

	var list = {
		name: document.title,
		groups: []
	};

	$("h2").each(function(index, groupEl){

		groupEl = $(groupEl);

		var group = {
			name: groupEl.text().trim(),
			entries: []
		};

		if( !shouldIgnore(group.name) ) {

			groupEl.nextUntil("h2").filter("p").each(function(index, entryEl){

				entryEl = $(entryEl);

				var entryElClone = entryEl.clone();
				entryElClone.find(".header, .alias, code").remove();

				var entryName = entryEl.find("code").first().html();

				if( entryName ) {

					group.entries.push({
						name: entryName,
						url: "http://" + location.host + "/#" + entryEl.attr("id"),
						description: entryElClone.text().replace(/[\n\s\t]+/g, " ").trim()
					});
				}

			});

			list.groups.push(group);
		}
	});

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

"";