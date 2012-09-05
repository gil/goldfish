Goldfish.addList({
	"name": "Backbone.js",
	"groups": [
		{
			"name": "Backbone.Events",
			"entries": [
				{
					"name": "object.on(event, callback, [context])",
					"url": "http://backbonejs.org/#Events-on",
					"description": "Bind a callback function to an object. The callback will be invoked whenever the event is fired. If you have a large number of different events on a page, the convention is to use colons to namespace them: \"poll:start\", or \"change:selection\". The event string may also be a space-delimited list of several events..."
				},
				{
					"name": "object.off([event], [callback], [context])",
					"url": "http://backbonejs.org/#Events-off",
					"description": "Remove a previously-bound callback function from an object. If no context is specified, all of the versions of the callback with different contexts will be removed. If no callback is specified, all callbacks for the event will be removed. If no event is specified, all event callbacks on the object will be removed."
				},
				{
					"name": "object.trigger(event, [*args])",
					"url": "http://backbonejs.org/#Events-trigger",
					"description": "Trigger callbacks for the given event, or space-delimited list of events. Subsequent arguments to trigger will be passed along to the event callbacks."
				}
			]
		},
		{
			"name": "Backbone.Model",
			"entries": [
				{
					"name": "Backbone.Model.extend(properties, [classProperties])",
					"url": "http://backbonejs.org/#Model-extend",
					"description": "To create a Model class of your own, you extend Backbone.Model and provide instance properties, as well as optional classProperties to be attached directly to the constructor function."
				},
				{
					"name": "new Model([attributes])",
					"url": "http://backbonejs.org/#Model-constructor",
					"description": "When creating an instance of a model, you can pass in the initial values of the attributes, which will be set on the model. If you define an initialize function, it will be invoked when the model is created."
				},
				{
					"name": "model.get(attribute)",
					"url": "http://backbonejs.org/#Model-get",
					"description": "Get the current value of an attribute from the model. For example: note.get(\"title\")"
				},
				{
					"name": "model.set(attributes, [options])",
					"url": "http://backbonejs.org/#Model-set",
					"description": "Set a hash of attributes (one or many) on the model. If any of the attributes change the models state, a \"change\" event will be triggered, unless {silent: true} is passed as an option. Change events for specific attributes are also triggered, and you can bind to those as well, for example: change:title, and change:content. You may also pass individual keys and values."
				},
				{
					"name": "model.escape(attribute)",
					"url": "http://backbonejs.org/#Model-escape",
					"description": "Similar to get, but returns the HTML-escaped version of a model's attribute. If you're interpolating data from the model into HTML, using escape to retrieve attributes will prevent XSS attacks."
				},
				{
					"name": "model.has(attribute)",
					"url": "http://backbonejs.org/#Model-has",
					"description": "Returns true if the attribute is set to a non-null or non-undefined value."
				},
				{
					"name": "model.unset(attribute, [options])",
					"url": "http://backbonejs.org/#Model-unset",
					"description": "Remove an attribute by deleting it from the internal attributes hash. Fires a \"change\" event unless silent is passed as an option."
				},
				{
					"name": "model.clear([options])",
					"url": "http://backbonejs.org/#Model-clear",
					"description": "Removes all attributes from the model. Fires a \"change\" event unless silent is passed as an option."
				},
				{
					"name": "model.id",
					"url": "http://backbonejs.org/#Model-id",
					"description": "A special property of models, the id is an arbitrary string (integer id or UUID). If you set the id in the attributes hash, it will be copied onto the model as a direct property. Models can be retrieved by id from collections, and the id is used to generate model URLs by default."
				},
				{
					"name": "model.idAttribute",
					"url": "http://backbonejs.org/#Model-idAttribute",
					"description": "A model's unique identifier is stored under the id attribute. If you're directly communicating with a backend (CouchDB, MongoDB) that uses a different unique key, you may set a Model's idAttribute to transparently map from that key to id."
				},
				{
					"name": "model.cid",
					"url": "http://backbonejs.org/#Model-cid",
					"description": "A special property of models, the cid or client id is a unique identifier automatically assigned to all models when they're first created. Client ids are handy when the model has not yet been saved to the server, and does not yet have its eventual true id, but already needs to be visible in the UI. Client ids take the form: c1, c2, c3 ..."
				},
				{
					"name": "model.attributes",
					"url": "http://backbonejs.org/#Model-attributes",
					"description": "The attributes property is the internal hash containing the model's state. Please use set to update the attributes instead of modifying them directly. If you'd like to retrieve and munge a copy of the model's attributes, use toJSON instead."
				},
				{
					"name": "model.changed",
					"url": "http://backbonejs.org/#Model-changed",
					"description": "The changed property is the internal hash containing all the attributes that have changed since the last \"change\" event was triggered. Please do not update changed directly. Its state is maintained internally by set and change. A copy of changed can be acquired from changedAttributes."
				},
				{
					"name": "model.defaults or model.defaults()",
					"url": "http://backbonejs.org/#Model-defaults",
					"description": "The defaults hash (or function) can be used to specify the default attributes for your model. When creating an instance of the model, any unspecified attributes will be set to their default value."
				},
				{
					"name": "model.toJSON()",
					"url": "http://backbonejs.org/#Model-toJSON",
					"description": "Return a copy of the model's attributes for JSON stringification. This can be used for persistence, serialization, or for augmentation before being handed off to a view. The name of this method is a bit confusing, as it doesn't actually return a JSON string — but I'm afraid that it's the way that the JavaScript API for JSON.stringify works."
				},
				{
					"name": "model.fetch([options])",
					"url": "http://backbonejs.org/#Model-fetch",
					"description": "Resets the model's state from the server by delegating to Backbone.sync. Returns a jqXHR. Useful if the model has never been populated with data, or if you'd like to ensure that you have the latest server state. A \"change\" event will be triggered if the server's state differs from the current attributes. Accepts success and error callbacks in the options hash, which are passed (model, response) as arguments."
				},
				{
					"name": "model.save([attributes], [options])",
					"url": "http://backbonejs.org/#Model-save",
					"description": "Save a model to your database (or alternative persistence layer), by delegating to Backbone.sync. Returns a jqXHR if validation is successful and false otherwise. The attributes hash (as in set) should contain the attributes you'd like to change — keys that aren't mentioned won't be altered — but, a complete representation of the resource will be sent to the server. As with set, you may pass individual keys and values instead of a hash. If the model has a validate method, and validation fails, the model will not be saved. If the model isNew, the save will be a \"create\" (HTTP POST), if the model already exists on the server, the save will be an \"update\" (HTTP PUT)."
				},
				{
					"name": "model.destroy([options])",
					"url": "http://backbonejs.org/#Model-destroy",
					"description": "Destroys the model on the server by delegating an HTTP DELETE request to Backbone.sync. Returns a jqXHR object, or false if the model isNew. Accepts success and error callbacks in the options hash. Triggers a \"destroy\" event on the model, which will bubble up through any collections that contain it, and a \"sync\" event, after the server has successfully acknowledged the model's deletion. Pass {wait: true} if you'd like to wait for the server to respond before removing the model from the collection."
				},
				{
					"name": "model.validate(attributes)",
					"url": "http://backbonejs.org/#Model-validate",
					"description": "This method is left undefined, and you're encouraged to override it with your custom validation logic, if you have any that can be performed in JavaScript. validate is called before set and save, and is passed the model attributes updated with the values from set or save. If the attributes are valid, don't return anything from validate; if they are invalid, return an error of your choosing. It can be as simple as a string error message to be displayed, or a complete error object that describes the error programmatically. If validate returns an error, set and save will not continue, and the model attributes will not be modified. Failed validations trigger an \"error\" event."
				},
				{
					"name": "model.isValid()",
					"url": "http://backbonejs.org/#Model-isValid",
					"description": "Models may enter an invalid state if you make changes to them silently ... useful when dealing with form input. Call model.isValid() to check if the model is currently in a valid state, according to your validate function."
				},
				{
					"name": "model.url()",
					"url": "http://backbonejs.org/#Model-url",
					"description": "Returns the relative URL where the model's resource would be located on the server. If your models are located somewhere else, override this method with the correct logic. Generates URLs of the form: \"/[collection.url]/[id]\", falling back to \"/[urlRoot]/id\" if the model is not part of a collection."
				},
				{
					"name": "model.urlRoot or model.urlRoot()",
					"url": "http://backbonejs.org/#Model-urlRoot",
					"description": "Specify a urlRoot if you're using a model outside of a collection, to enable the default url function to generate URLs based on the model id. \"/[urlRoot]/id\" Note that urlRoot may also be defined as a function."
				},
				{
					"name": "model.parse(response)",
					"url": "http://backbonejs.org/#Model-parse",
					"description": "parse is called whenever a model's data is returned by the server, in fetch, and save. The function is passed the raw response object, and should return the attributes hash to be set on the model. The default implementation is a no-op, simply passing through the JSON response. Override this if you need to work with a preexisting API, or better namespace your responses."
				},
				{
					"name": "model.clone()",
					"url": "http://backbonejs.org/#Model-clone",
					"description": "Returns a new instance of the model with identical attributes."
				},
				{
					"name": "model.isNew()",
					"url": "http://backbonejs.org/#Model-isNew",
					"description": "Has this model been saved to the server yet? If the model does not yet have an id, it is considered to be new."
				},
				{
					"name": "model.change()",
					"url": "http://backbonejs.org/#Model-change",
					"description": "Manually trigger the \"change\" event and a \"change:attribute\" event for each attribute that has changed. If you've been passing {silent: true} to the set function in order to aggregate rapid changes to a model, you'll want to call model.change() when you're all finished."
				},
				{
					"name": "model.hasChanged([attribute])",
					"url": "http://backbonejs.org/#Model-hasChanged",
					"description": "Has the model changed since the last \"change\" event? If an attribute is passed, returns true if that specific attribute has changed."
				},
				{
					"name": "model.changedAttributes([attributes])",
					"url": "http://backbonejs.org/#Model-changedAttributes",
					"description": "Retrieve a hash of only the model's attributes that have changed. Optionally, an external attributes hash can be passed in, returning the attributes in that hash which differ from the model. This can be used to figure out which portions of a view should be updated, or what calls need to be made to sync the changes to the server."
				},
				{
					"name": "model.previous(attribute)",
					"url": "http://backbonejs.org/#Model-previous",
					"description": "During a \"change\" event, this method can be used to get the previous value of a changed attribute."
				},
				{
					"name": "model.previousAttributes()",
					"url": "http://backbonejs.org/#Model-previousAttributes",
					"description": "Return a copy of the model's previous attributes. Useful for getting a diff between versions of a model, or getting back to a valid state after an error occurs."
				}
			]
		},
		{
			"name": "Backbone.Collection",
			"entries": [
				{
					"name": "Backbone.Collection.extend(properties, [classProperties])",
					"url": "http://backbonejs.org/#Collection-extend",
					"description": "To create a Collection class of your own, extend Backbone.Collection, providing instance properties, as well as optional classProperties to be attached directly to the collection's constructor function."
				},
				{
					"name": "collection.model",
					"url": "http://backbonejs.org/#Collection-model",
					"description": "Override this property to specify the model class that the collection contains. If defined, you can pass raw attributes objects (and arrays) to add, create, and reset, and the attributes will be converted into a model of the proper type."
				},
				{
					"name": "new Collection([models], [options])",
					"url": "http://backbonejs.org/#Collection-constructor",
					"description": "When creating a Collection, you may choose to pass in the initial array of models. The collection's comparator function may be included as an option. If you define an initialize function, it will be invoked when the collection is created."
				},
				{
					"name": "collection.models",
					"url": "http://backbonejs.org/#Collection-models",
					"description": "Raw access to the JavaScript array of models inside of the collection. Usually you'll want to use get, at, or the Underscore methods to access model objects, but occasionally a direct reference to the array is desired."
				},
				{
					"name": "collection.toJSON()",
					"url": "http://backbonejs.org/#Collection-toJSON",
					"description": "Return an array containing the attributes hash of each model in the collection. This can be used to serialize and persist the collection as a whole. The name of this method is a bit confusing, because it conforms to JavaScript's JSON API."
				},
				{
					"name": "collection.add(models, [options])",
					"url": "http://backbonejs.org/#Collection-add",
					"description": "Add a model (or an array of models) to the collection. Fires an \"add\" event, which you can pass {silent: true} to suppress. If a model property is defined, you may also pass raw attributes objects, and have them be vivified as instances of the model. Pass {at: index} to splice the model into the collection at the specified index. Likewise, if you're a callback listening to a collection's \"add\" event, options.index will tell you the index at which the model is being added to the collection."
				},
				{
					"name": "collection.remove(models, [options])",
					"url": "http://backbonejs.org/#Collection-remove",
					"description": "Remove a model (or an array of models) from the collection. Fires a \"remove\" event, which you can use silent to suppress. If you're a callback listening to the \"remove\" event, the index at which the model is being removed from the collection is available as options.index."
				},
				{
					"name": "collection.get(id)",
					"url": "http://backbonejs.org/#Collection-get",
					"description": "Get a model from a collection, specified by id."
				},
				{
					"name": "collection.getByCid(cid)",
					"url": "http://backbonejs.org/#Collection-getByCid",
					"description": "Get a model from a collection, specified by client id. The client id is the .cid property of the model, automatically assigned whenever a model is created. Useful for models which have not yet been saved to the server, and do not yet have true ids."
				},
				{
					"name": "collection.at(index)",
					"url": "http://backbonejs.org/#Collection-at",
					"description": "Get a model from a collection, specified by index. Useful if your collection is sorted, and if your collection isn't sorted, at will still retrieve models in insertion order."
				},
				{
					"name": "collection.push(model, [options])",
					"url": "http://backbonejs.org/#Collection-push",
					"description": "Add a model at the end of a collection. Takes the same options as add."
				},
				{
					"name": "collection.pop([options])",
					"url": "http://backbonejs.org/#Collection-pop",
					"description": "Remove and return the last model from a collection. Takes the same options as remove."
				},
				{
					"name": "collection.unshift(model, [options])",
					"url": "http://backbonejs.org/#Collection-unshift",
					"description": "Add a model at the beginning of a collection. Takes the same options as add."
				},
				{
					"name": "collection.shift([options])",
					"url": "http://backbonejs.org/#Collection-shift",
					"description": "Remove and return the first model from a collection. Takes the same options as remove."
				},
				{
					"name": "collection.length",
					"url": "http://backbonejs.org/#Collection-length",
					"description": "Like an array, a Collection maintains a length property, counting the number of models it contains."
				},
				{
					"name": "collection.comparator",
					"url": "http://backbonejs.org/#Collection-comparator",
					"description": "By default there is no comparator function on a collection. If you define a comparator, it will be used to maintain the collection in sorted order. This means that as models are added, they are inserted at the correct index in collection.models. Comparator function can be defined as either a sortBy (pass a function that takes a single argument), or as a sort (pass a comparator function that expects two arguments)."
				},
				{
					"name": "collection.sort([options])",
					"url": "http://backbonejs.org/#Collection-sort",
					"description": "Force a collection to re-sort itself. You don't need to call this under normal circumstances, as a collection with a comparator function will maintain itself in proper sort order at all times. Calling sort triggers the collection's \"reset\" event, unless silenced by passing {silent: true}"
				},
				{
					"name": "collection.pluck(attribute)",
					"url": "http://backbonejs.org/#Collection-pluck",
					"description": "Pluck an attribute from each model in the collection. Equivalent to calling map, and returning a single attribute from the iterator."
				},
				{
					"name": "collection.where(attributes)",
					"url": "http://backbonejs.org/#Collection-where",
					"description": "Return an array of all the models in a collection that match the passed attributes. Useful for simple cases of filter."
				},
				{
					"name": "collection.url or collection.url()",
					"url": "http://backbonejs.org/#Collection-url",
					"description": "Set the url property (or function) on a collection to reference its location on the server. Models within the collection will use url to construct URLs of their own."
				},
				{
					"name": "collection.parse(response)",
					"url": "http://backbonejs.org/#Collection-parse",
					"description": "parse is called by Backbone whenever a collection's models are returned by the server, in fetch. The function is passed the raw response object, and should return the array of model attributes to be added to the collection. The default implementation is a no-op, simply passing through the JSON response. Override this if you need to work with a preexisting API, or better namespace your responses. Note that afterwards, if your model class already has a parse function, it will be run against each fetched model."
				},
				{
					"name": "collection.fetch([options])",
					"url": "http://backbonejs.org/#Collection-fetch",
					"description": "Fetch the default set of models for this collection from the server, resetting the collection when they arrive. The options hash takes success and error callbacks which will be passed (collection, response) as arguments. When the model data returns from the server, the collection will reset. Delegates to Backbone.sync under the covers for custom persistence strategies and returns a jqXHR. The server handler for fetch requests should return a JSON array of models."
				},
				{
					"name": "collection.reset(models, [options])",
					"url": "http://backbonejs.org/#Collection-reset",
					"description": "Adding and removing models one at a time is all well and good, but sometimes you have so many models to change that you'd rather just update the collection in bulk. Use reset to replace a collection with a new list of models (or attribute hashes), triggering a single \"reset\" event at the end. Pass {silent: true} to suppress the \"reset\" event. Using reset with no arguments is useful as a way to empty the collection."
				},
				{
					"name": "collection.create(attributes, [options])",
					"url": "http://backbonejs.org/#Collection-create",
					"description": "Convenience to create a new instance of a model within a collection. Equivalent to instantiating a model with a hash of attributes, saving the model to the server, and adding the model to the set after being successfully created. Returns the model, or false if a validation error prevented the model from being created. In order for this to work, you should set the model property of the collection. The create method can accept either an attributes hash or an existing, unsaved model object."
				}
			]
		},
		{
			"name": "Backbone.Router",
			"entries": [
				{
					"name": "Backbone.Router.extend(properties, [classProperties])",
					"url": "http://backbonejs.org/#Router-extend",
					"description": "Get started by creating a custom router class. Define actions that are triggered when certain URL fragments are matched, and provide a routes hash that pairs routes to actions. Note that you'll want to avoid using a leading slash in your route definitions:"
				},
				{
					"name": "router.routes",
					"url": "http://backbonejs.org/#Router-routes",
					"description": "The routes hash maps URLs with parameters to functions on your router, similar to the View's events hash. Routes can contain parameter parts, :param, which match a single URL component between slashes; and splat parts *splat, which can match any number of URL components."
				},
				{
					"name": "new Router([options])",
					"url": "http://backbonejs.org/#Router-constructor",
					"description": "When creating a new router, you may pass its routes hash directly as an option, if you choose. All options will also be passed to your initialize function, if defined."
				},
				{
					"name": "router.route(route, name, [callback])",
					"url": "http://backbonejs.org/#Router-route",
					"description": "Manually create a route for the router, The route argument may be a routing string or regular expression. Each matching capture from the route or regular expression will be passed as an argument to the callback. The name argument will be triggered as a \"route:name\" event whenever the route is matched. If the callback argument is omitted router[name] will be used instead."
				},
				{
					"name": "router.navigate(fragment, [options])",
					"url": "http://backbonejs.org/#Router-navigate",
					"description": "Whenever you reach a point in your application that you'd like to save as a URL, call navigate in order to update the URL. If you wish to also call the route function, set the trigger option to true. To update the URL without creating an entry in the browser's history, set the replace option to true."
				}
			]
		},
		{
			"name": "Backbone.history",
			"entries": [
				{
					"name": "Backbone.history.start([options])",
					"url": "http://backbonejs.org/#History-start",
					"description": "When all of your Routers have been created, and all of the routes are set up properly, call Backbone.history.start() to begin monitoring hashchange events, and dispatching routes."
				}
			]
		},
		{
			"name": "Backbone.sync",
			"entries": [
				{
					"name": "Backbone.emulateHTTP = true",
					"url": "http://backbonejs.org/#Sync-emulateHTTP",
					"description": "If you want to work with a legacy web server that doesn't support Backbones's default REST/HTTP approach, you may choose to turn on Backbone.emulateHTTP. Setting this option will fake PUT and DELETE requests with a HTTP POST, setting the X-HTTP-Method-Override header with the true method. If emulateJSON is also on, the true method will be passed as an additional _method parameter."
				},
				{
					"name": "Backbone.emulateJSON = true",
					"url": "http://backbonejs.org/#Sync-emulateJSON",
					"description": "If you're working with a legacy web server that can't handle requests encoded as application/json, setting Backbone.emulateJSON = true; will cause the JSON to be serialized under a model parameter, and the request to be made with a application/x-www-form-urlencoded mime type, as if from an HTML form."
				}
			]
		},
		{
			"name": "Backbone.View",
			"entries": [
				{
					"name": "Backbone.View.extend(properties, [classProperties])",
					"url": "http://backbonejs.org/#View-extend",
					"description": "Get started with views by creating a custom view class. You'll want to override the render function, specify your declarative events, and perhaps the tagName, className, or id of the View's root element."
				},
				{
					"name": "new View([options])",
					"url": "http://backbonejs.org/#View-constructor",
					"description": "When creating a new View, the options you pass are attached to the view as this.options, for future reference. There are several special options that, if passed, will be attached directly to the view: model, collection, el, id, className, tagName and attributes. If the view defines an initialize function, it will be called when the view is first created. If you'd like to create a view that references an element already in the DOM, pass in the element as an option: new View({el: existingElement})"
				},
				{
					"name": "view.el",
					"url": "http://backbonejs.org/#View-el",
					"description": "All views have a DOM element at all times (the el property), whether they've already been inserted into the page or not. In this fashion, views can be rendered at any time, and inserted into the DOM all at once, in order to get high-performance UI rendering with as few reflows and repaints as possible. this.el is created from the view's tagName, className, id and attributes properties, if specified. If not, el is an empty div."
				},
				{
					"name": "view.$el",
					"url": "http://backbonejs.org/#View-$el",
					"description": "A cached jQuery (or Zepto) object for the view's element. A handy reference instead of re-wrapping the DOM element all the time."
				},
				{
					"name": "view.setElement(element)",
					"url": "http://backbonejs.org/#View-setElement",
					"description": "If you'd like to apply a Backbone view to a different DOM element, use setElement, which will also create the cached $el reference and move the view's delegated events from the old element to the new one."
				},
				{
					"name": "view.attributes",
					"url": "http://backbonejs.org/#View-attributes",
					"description": "A hash of attributes that will be set as HTML DOM element attributes on the view's el (id, class, data-properties, etc.), or a function that returns such a hash."
				},
				{
					"name": "view.$(selector)",
					"url": "http://backbonejs.org/#View-dollar",
					"description": "If jQuery or Zepto is included on the page, each view has a $ function that runs queries scoped within the view's element. If you use this scoped jQuery function, you don't have to use model ids as part of your query to pull out specific elements in a list, and can rely much more on HTML class attributes. It's equivalent to running: view.$el.find(selector)"
				},
				{
					"name": "view.render()",
					"url": "http://backbonejs.org/#View-render",
					"description": "The default implementation of render is a no-op. Override this function with your code that renders the view template from model data, and updates this.el with the new HTML. A good convention is to return this at the end of render to enable chained calls."
				},
				{
					"name": "view.remove()",
					"url": "http://backbonejs.org/#View-remove",
					"description": "Convenience function for removing the view from the DOM. Equivalent to calling $(view.el).remove();"
				},
				{
					"name": "view.make(tagName, [attributes], [content])",
					"url": "http://backbonejs.org/#View-make",
					"description": "Convenience function for creating a DOM element of the given type (tagName), with optional attributes and HTML content. Used internally to create the initial view.el."
				},
				{
					"name": "delegateEvents([events])",
					"url": "http://backbonejs.org/#View-delegateEvents",
					"description": "Uses jQuery's delegate function to provide declarative callbacks for DOM events within a view. If an events hash is not passed directly, uses this.events as the source. Events are written in the format {\"event selector\": \"callback\"}. The callback may be either the name of a method on the view, or a direct function body. Omitting the selector causes the event to be bound to the view's root element (this.el). By default, delegateEvents is called within the View's constructor for you, so if you have a simple events hash, all of your DOM events will always already be connected, and you will never have to call this function yourself."
				},
				{
					"name": "undelegateEvents()",
					"url": "http://backbonejs.org/#View-undelegateEvents",
					"description": "Removes all of the view's delegated events. Useful if you want to disable or remove a view from the DOM temporarily."
				}
			]
		},
		{
			"name": "Utility Functions",
			"entries": [
				{
					"name": "var backbone = Backbone.noConflict();",
					"url": "http://backbonejs.org/#Utility-noConflict",
					"description": "Returns the Backbone object back to its original value. You can use the return value of Backbone.noConflict() to keep a local reference to Backbone. Useful for embedding Backbone on third-party websites, where you don't want to clobber the existing Backbone."
				},
				{
					"name": "Backbone.setDomLibrary(jQueryNew);",
					"url": "http://backbonejs.org/#Utility-setDomLibrary",
					"description": "If you have multiple copies of jQuery on the page, or simply want to tell Backbone to use a particular object as its DOM / Ajax library, this is the function for you."
				}
			]
		}
	]
});