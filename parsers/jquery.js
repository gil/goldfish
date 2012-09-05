// Code used to extract a list from: http://api.jquery.com/

var list = {
	name: "jQuery",
	groups: []
};

var groupMap = {};
var deprecated = $("a:contains('Deprecated')").parents(".post");

$(".post").not(deprecated).each(function(index, groupRow){

	groupRow = $(groupRow);
	var groupName = groupRow.find(".cat-links").text();

	if( groupRow.find(".beta").length == 0 && groupName.indexOf("Templates") == -1 ) {

		var link = groupRow.find(".title-link");
		groupMap[ groupName ] = groupMap[ groupName ] || [];

		var entry = {
			name: link.text(),
			url: link.attr("href"),
			description: groupRow.find(".desc").text()
		};

		groupMap[ groupName ].push( entry );
	}

});

for( var group in groupMap ) {
	list.groups.push({
		name: group,
		entries: groupMap[group]
	});
}

JSON.stringify(list, null, "\t");