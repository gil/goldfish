class Goldfish

	@elements = {
		searchInput : ".search-input"
	}

	# Add a new list
	@addList: (data) ->
		@listManager.addList data

	# Perform jQuery selectors to read screen elements
	@_readElements: ->
		for elementName of @elements
			@["$" + elementName] = $( @elements[elementName] )

	# Start app
	@start: ->
		@listManager = new ListManager()
		@listManager.loadLists()

		@_readElements()

		@$searchInput
			.on("keyup", @_search)
			.focus()

		# TODO: Remove temporary auto search
		@$searchInput.val(" ");
		setTimeout =>
			@_search();
		, 300

	# Do search
	@_search: (e) =>
		# key = e.keyCode or e.which
		$(".group-row").remove()
		searchFilters = @$searchInput.val().trim().split(" ")

		groupTemplate = _.template( $("#group-template").html() )
		entryTemplate = _.template( $("#entry-template").html() )

		if searchFilters.length > 0
			for group in @listManager.search( searchFilters )
				groupEl = $( groupTemplate({ group: group }) )

				for entry in group.entries
					entryEl = $( entryTemplate({ entry: entry }) )
					entryEl.data( "entry", entry )
					groupEl.append( entryEl )

				$(document.body).append( groupEl )

		$(".entry-row").on "click", (e) ->
			window.open $(e.currentTarget).data("entry").url, "_blank"

		searchFilters

$ ->
	window.Goldfish = Goldfish;
	Goldfish.start()