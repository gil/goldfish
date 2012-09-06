class List

	constructor: (data) ->
		@data = data

	# Filter group by given filter param
	groupsBy: (filters) ->

		groups = []

		# Every filter to lower case
		for i in [0..filters.length - 1]
			filters[i] = filters[i].toLowerCase()

		# For each group
		for group in @data.groups
			group.list = @data

			# Get entries matching all filters
			filteredEntries = _.filter group.entries, (entry) =>
				fields = ([ group.list.name, group.name, entry.name, entry.description ]).join(" ").toLowerCase()

				for filter in filters
					if fields.indexOf( filter ) < 0
						return false

				true

			# Clone groups to return filtered entries
			if filteredEntries.length > 0
				groupCopy = _.clone( group )
				groupCopy.entries = filteredEntries
				groups.push groupCopy

		groups