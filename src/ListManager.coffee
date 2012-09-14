class ListManager

	constructor: ->
		@listsData = []

		# amplify.store( "lists", ["regexp"] )
		# amplify.store( "lists", null )
		# @defaultLists = amplify.store("lists")

		# if not @defaultLists
		@defaultLists = ["jquery", "underscore", "backbone", "html5", "css", "jasmine", "regexp"]
			# amplify.store( "lists", @defaultLists )

	# Load all lists
	loadLists: ->
		for list in @defaultLists
			script = $("<script/>").attr("src", "lists/" + list + ".js")
			$("head")[0].appendChild( script[0] ); # Not using jQuery's .append(), to avoid cross-domain problems.

	# Add list data
	addList: (listData) ->
		@listsData.push new List(listData)

	# Search for entries
	search: (filters) ->
		groups = []

		for listData in @listsData
			groups = groups.concat( listData.groupsBy(filters) )

		groups