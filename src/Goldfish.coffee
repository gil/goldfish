class Goldfish

	@elements = {
		searchInput : ".search-input"
	}

	@preventSearch = false

	# Add a new list
	@addList: (data) ->
		@listManager.addList data
		@_renderLists()

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
			.on("keydown", @_handleKeys)
			.on("keyup", @_handleSearch)
			.focus()

		# TODO: Remove temporary auto search
		# @$searchInput.val(" ");
		# setTimeout =>
		# 	@_search();
		# , 300

	# Handle keyboard navigation
	@_handleKeys: (e) =>
		key = e.keyCode or e.which

		switch key
			when 40 # key down
				@_keyboardNavigate(e, "next")
			when 38 # key up
				@_keyboardNavigate(e, "prev")
			when 13 # enter key
				@_openActiveEntry()
			else
				# Continue to keyup handler
				return

		# Prevent keyup handler
		@preventSearch = true
		e.preventDefault()
		e.stopPropagation()
		false

	# Select next/previous available entry
	@_keyboardNavigate: (e, direction) ->

		jumpGroup = e.ctrlKey or e.metaKey
		nodeToSelect = if direction is "next" or jumpGroup then "first" else "last"

		# Remove selection from active entry
		currentActive = $(".active-entry").removeClass("active-entry")
		nextActive = null

		if currentActive.length > 0

			# Get next/previous entry
			nextActive = currentActive[direction](".entry-row")

			# No more on current group? Get from next/previous group
			if jumpGroup or nextActive.length is 0
				nextActive = currentActive.parents(".group-row")[direction](".group-row").find(".entry-row")[nodeToSelect]()

			# Set as active
			nextActive.addClass("active-entry")

		else
			# No entry currently active, so activate first/last
			nextActive = $(".entry-row")[nodeToSelect]().addClass("active-entry")

		@_scrollToActive( nextActive )

	# Scroll to make active item visible
	@_scrollToActive: (activeEntry) ->

		if activeEntry.length > 0

			activeTop = activeEntry.offset().top
			activeHeight = activeEntry.height()
			windowHeight = $(window).height()
			bodyScroll = $('body').scrollTop()

			if activeTop + activeHeight > windowHeight + bodyScroll
				# Entry is below current screen scroll position
				bodyScroll = activeTop - 10
			else if activeTop < bodyScroll
				# Entry is above current screen scroll position
				bodyScroll = activeTop - windowHeight + activeHeight + 20

			# Animate scroll
			$('body').stop().animate({
				scrollTop: bodyScroll
			}, 300)

	# Open active entry, when there is a URL to open
	@_openActiveEntry: ->
		activeEntryData = $(".active-entry").data("entry")

		if activeEntryData and activeEntryData.url
			window.open activeEntryData.url, "_blank"

	# Remove all lists, groups and entries
	@_clearScreen: ->
		$(".group-row, .list-row").remove()

	# Handle search on text input
	@_handleSearch: (e) =>
		searchText = @$searchInput.val().trim()

		if searchText isnt ""
			@_search searchText
		else
			@_renderLists()

	# Do search
	@_search: (searchText) ->
		if not @preventSearch

			@_clearScreen()

			searchFilters = searchText.split(" ")
			highlighter = @_getHighlighter( searchFilters )

			groupTemplate = _.template( $("#group-template").html() )
			entryTemplate = _.template( $("#entry-template").html() )

			for group in @listManager.search( searchFilters )
				groupEl = $( groupTemplate({
								group: group,
								highlighter: highlighter
							}) )

				for entry in group.entries
					$( entryTemplate({
						entry: entry,
						highlighter: highlighter
					}) )
					.data( "entry", entry )
					.appendTo( groupEl )

				$(document.body).append( groupEl )

			$(".entry-row").on "click", (e) ->
				url = $(e.currentTarget).data("entry").url

				if url
					window.open url, "_blank"

		else
			@preventSearch = false

	# Render lists data on screen
	@_renderLists: ->
		@_clearScreen()
		listTemplate = _.template( $("#list-template").html() )

		for list in @listManager.listsData
			listEl = $( listTemplate({
				name: list.data.name,
				entryCount: list.entryCount,
				groupCount: list.groupCount
			}) )

			$(document.body).append( listEl )

	# Return a highlighter function, based on given filters
	@_getHighlighter: (filters) ->
		(text) ->
			for filter in filters
				if filter.length > 1
					text = text.split( filter ).join( "<span class='highlight'>" + filter + "</span>" )
			text

$ ->
	window.Goldfish = Goldfish;
	Goldfish.start()