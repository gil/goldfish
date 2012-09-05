// Code used to extract a list from any cheat sheet from: http://www.cheatography.com/

var list = {
	name: $("#body_wide_shadow h1").first().text().replace(/Cheat Sheet.*/, "").trim(),
	groups: []
};

$(".cheat_sheet_output_wrapper").each(function(index, groupRow){

	groupRow = $(groupRow);

	var group = {
		name: groupRow.find(".cheat_sheet_output_title").html().replace( list.name, "" ).trim(),
		entries: []
	};

	groupRow.find("tr").each(function(index, row){

		row = $(row);

		group.entries.push({
			name: row.find(".cheat_sheet_output_cell_1").html(),
			description: row.find(".cheat_sheet_output_cell_2").html()
		});

	});

	list.groups.push(group);

});

JSON.stringify(list, null, "\t");