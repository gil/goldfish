class ListManager

	constructor: ->
		@listsData = []

		# amplify.store( "lists", ["lists/regexp.js"] )
		# amplify.store( "lists", null )
		@lists = amplify.store("lists")

		if not @lists
			@lists = _.map ["jquery", "underscore", "backbone", "html5", "css", "jasmine", "regexp"], (listName) ->
				"lists/" + listName + ".js"
			amplify.store( "lists", @lists )

	# Load all lists
	loadLists: ->
		for listUrl in @lists
			script = $("<script/>").attr("src", listUrl)
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

	# Show screen to manage lists
	manageLists: =>
		$(".main").hide()

		manageListsTemplate = _.template( $("#manage-lists").html() );
		manageListsTemplate = $( manageListsTemplate({
									lists:  @lists.join("\n")
								}) )

		manageListsTemplate
			.find( ".save-button" )
				.on( "click", @saveLists )
				.end()
			.find( ".cancel-button" )
				.on( "click", @showMain )
				.end()
			.appendTo( $("body") )

	# Save and refresh lists
	saveLists: ->
		amplify.store( "lists", $(".manage-lists .lists").val().trim().split(/[\n\t\r]+/) )
		location.reload()

	# Remove screen to manage lists and show main
	showMain: ->
		$(".manage-lists").remove()
		$(".main").show()
