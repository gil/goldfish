// Code used to extract a list from: http://cssvalues.com/

$.getScript("http://underscorejs.org/underscore-min.js", function() {

	var list = {
		name: "CSS",
		groups: []
	};

	var entries = [];

	// Get all entries
	$("section").each(function(index, row){

		row = $(row);

		entries.push({
			name: row.find("h2").html().trim(),
			description: row
							.clone()
								.find("h2, h3, footer, .btn")
								.remove()
								.end()
							.html()
							.replace(/(\<\/?span[^\>]*\>|\<\/?a[^\>]*\>)/g, "")
							.replace(/\<h3\>/g, "<p>")
							.replace(/\<\/h3\>/g, "</p>")
							.replace(/[\s]{2,}/g, " ")
							.trim(),
			url: row.find(".btn").last().attr("href")
		});

	});

	// Group by prefix (eg. border-*)
	var groupedEntries = _.groupBy(entries, function(entry){
		if( entry.name.indexOf("-") > 0 && entry.name != "z-index" ) {
			var prefix = entry.name.split("-")[0];
			return prefix.charAt(0).toUpperCase() + prefix.slice(1);
		} else {
			return "General";
		}
	});

	// Remove groups with just 1 name
	_.each(groupedEntries, function(entryGroup, groupName) {
		if( entryGroup.length == 1 ) {
			groupedEntries["General"].push( entryGroup[0] );
			// groupedEntries[groupName] = null;
			delete groupedEntries[groupName];
		}
	});

	// Put main entries from General, inside correct groups
	var cleanGeneralEntries = [];

	_.each(groupedEntries.General, function(entryGroup) {
		var groupName = entryGroup.name.charAt(0).toUpperCase() + entryGroup.name.slice(1);

		if( groupedEntries[ groupName ] ) {
			groupedEntries[ groupName ].unshift( entryGroup );
		} else {
			cleanGeneralEntries.push( entryGroup );
		}
	});

	groupedEntries.General = cleanGeneralEntries;

	// Create groups
	_.each(groupedEntries, function(entryGroup, groupName) {
		list.groups.push({
			name: groupName,
			entries: entryGroup
		});
	});

	console.log( JSON.stringify(list, null, "\t") );

});

true;