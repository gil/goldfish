class Goldfish

	@elements = {
		searchInput : ".search-input"
	}

	# Add a new list
	@addList: (data) ->
		@listManager.addList data
		@preventSearch = false

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
			.on("keyup", @_search)
			.focus()

		# TODO: Remove temporary auto search
		@$searchInput.val(" ");
		setTimeout =>
			@_search();
		, 300

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

	# Do search
	@_search: (e) =>
		if not @preventSearch

			$(".group-row").remove()
			searchFilters = @$searchInput.val().trim().split(" ")
			highlighter = @_getHighlighter( searchFilters )

			groupTemplate = _.template( $("#group-template").html() )
			entryTemplate = _.template( $("#entry-template").html() )

			if searchFilters.length > 0
				for group in @listManager.search( searchFilters )
					groupEl = $( groupTemplate({
									group: group,
									highlighter: highlighter
								}) )

					for entry in group.entries
						entryEl = $( entryTemplate({
										entry: entry,
										highlighter: highlighter
									}) )

						entryEl.data( "entry", entry )
						groupEl.append( entryEl )

					$(document.body).append( groupEl )

			$(".entry-row").on "click", (e) ->
				window.open $(e.currentTarget).data("entry").url, "_blank"

		else
			@preventSearch = false

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