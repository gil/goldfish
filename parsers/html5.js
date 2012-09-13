// Code used to extract a list from: http://html5doctor.com/element-index/

var list = {
	name: "HTML5",
	groups: []
};

$("section").each(function(index, groupRow){

	groupRow = $(groupRow);

	var group = {
		name: groupRow.find("h2").html(),
		entries: []
	};

	groupRow.find("dl").each(function(index, row){

		row = $(row);

		var id = row.find("dt").attr("id");

		if( !id ) {
			id = groupRow.find("h2").attr("id");
		}

		if( !id ) {
			id = "";
		}

		group.entries.push({
			name: row.find("dt").clone().children().remove().end().text(),
			description: row.find("dd").clone().find("footer").remove().end().html().replace(/(\<\/?p[^\>]*\>|\<\/?span[^\>]*\>)/g, "").replace(/[\s]{2,}/g, " ").trim(),
			url: "http://html5doctor.com/element-index/#" + id
		});

	});

	list.groups.push(group);

});

JSON.stringify(list, null, "\t");