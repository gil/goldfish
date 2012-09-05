class List

	constructor: (data) ->
		@data = data

	# Filter group by given filter param
	groupsBy: (filter) ->

		groups = []
		filter = $.trim( filter.toLowerCase() )

		matches = (field) ->
			field.toLowerCase().indexOf(filter) > -1

		for group in @data.groups
			group.list = @data

			filteredEntries = _.filter group.entries, (entry) =>
				matches(group.name) or matches(entry.name) or matches(entry.description)

			if filteredEntries.length > 0
				groupCopy = _.clone( group )
				groupCopy.entries = filteredEntries
				groups.push groupCopy

		groups