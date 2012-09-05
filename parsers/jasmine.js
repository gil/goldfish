// Code used to extract a matchers list from: https://github.com/pivotal/jasmine/wiki/Matchers

var list = {
	name: "Jasmine",
	groups: []
};

var group = {
	name: "Matchers",
	entries: []
};

$("blockquote p").each(function(index, matcherEl){

	matcherEl = $(matcherEl);

	var matcherElClone = matcherEl.clone();
	matcherElClone.find("code").first().remove();

	group.entries.push({
		name: matcherEl.find("code").first().text().trim(),
		description: matcherElClone.text().trim()
	});

});

list.groups.push(group);

JSON.stringify(list, null, "\t");