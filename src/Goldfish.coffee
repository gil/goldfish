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

		$(document)
			.on("keydown", @_handleKeys)
			.on "keydown", (e) =>
				@$searchInput.focus()

		@$searchInput
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
				@_openActiveRow()
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

		# Remove selection from active row
		currentActive = $(".active-row").removeClass("active-row")
		nextActive = null

		if currentActive.length > 0

			# Get next/previous entry
			nextActive = currentActive[direction](".entry-row, .list-row")

			# No more on current group? Get from next/previous group
			if jumpGroup or nextActive.length is 0
				nextActive = currentActive.parents(".group-row")[direction](".group-row").find(".entry-row")[nodeToSelect]()

		# No entry? So get first/last
		if not nextActive or nextActive.length is 0
			nextActive = $(".entry-row, .list-row")[nodeToSelect]()

		# Set as active
		nextActive.addClass("active-row")

		@_scrollToActive( nextActive )

	# Scroll to make active item visible
	@_scrollToActive: (activeRow) ->

		if activeRow.length > 0

			activeTop = activeRow.offset().top
			activeHeight = activeRow.height()
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

	# Open active row, when there is a open callback
	@_openActiveRow: ->
		openCallback = $(".active-row").data("openCallback")

		if openCallback
			openCallback()

	# Remove all lists, groups and entries
	@_clearScreen: ->
		$(".group-row, .list-row").remove()

	# Handle search on text input
	@_handleSearch: (e) =>
		if not @preventSearch

			searchText = @$searchInput.val().trim()

			if searchText isnt ""
				@_search searchText
			else
				@_renderLists()

		else
			@preventSearch = false

	# Do search
	@_search: (searchText) ->
		@_clearScreen()

		searchFilters = searchText.split(" ")
		highlighter = @_getHighlighter( searchFilters )

		groupTemplate = _.template( $("#group-template").html() )
		entryTemplate = _.template( $("#entry-template").html() )

		for group in @listManager.search( searchFilters )

			# Render group
			groupEl = $( groupTemplate({
							group: group,
							highlighter: highlighter
						}) )

			for entry in group.entries

				# Function to open entry's URL
				openCallback = (entry) ->
					->
						if entry.url
							window.open entry.url, "_blank"

				# Render entry
				$( entryTemplate({
							entry: entry,
							highlighter: highlighter
						}) )
					.data( "openCallback", openCallback(entry) )
					.on( "click", openCallback(entry) )
					.appendTo( groupEl )

			$(document.body).append( groupEl )

	# Render lists data on screen
	@_renderLists: ->
		@_clearScreen()
		listTemplate = _.template( $("#list-template").html() )

		for list in @listManager.listsData

			# Function to open add list name to the search
			openCallback = (list) =>
				=>
					@$searchInput.val( list.data.name + " " ).focus()
					@_handleSearch()

			# Render list row
			listEl = $( listTemplate({
								name: list.data.name,
								entryCount: list.entryCount,
								groupCount: list.groupCount
							}) )
						.data( "openCallback", openCallback(list) )
						.on( "click", openCallback(list) )

			$(document.body).append( listEl )

	# Return a highlighter function, based on given filters
	@_getHighlighter: (filters) ->

		filtersRegExp = []

		for filter in filters
			if filter.length > 1
				filtersRegExp.push new RegExp( RegExp.escape(filter), "gi" )

		(text) ->
			for regExp in filtersRegExp
				text = text.replace( regExp, "<span class='highlight'>$&</span>" )
			text

$ ->
	window.Goldfish = Goldfish;
	Goldfish.start()