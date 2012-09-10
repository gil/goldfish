// List extracted from: http://underscorejs.org/
Goldfish.addList({
	"name": "Underscore.js",
	"groups": [
		{
			"name": "Collection Functions (Arrays or Objects)",
			"entries": [
				{
					"name": "_.each(list, iterator, [context])",
					"url": "http://underscorejs.org/#each",
					"description": "Iterates over a list of elements, yielding each in turn to an iterator function. The iterator is bound to the context object, if one is passed. Each invocation of iterator is called with three arguments: (element, index, list). If list is a JavaScript object, iterator's arguments will be (value, key, list). Delegates to the native forEach function if it exists."
				},
				{
					"name": "_.map(list, iterator, [context])",
					"url": "http://underscorejs.org/#map",
					"description": "Produces a new array of values by mapping each value in list through a transformation function (iterator). If the native map method exists, it will be used instead. If list is a JavaScript object, iterator's arguments will be (value, key, list)."
				},
				{
					"name": "_.reduce(list, iterator, memo, [context])",
					"url": "http://underscorejs.org/#reduce",
					"description": "Also known as inject and foldl, reduce boils down a list of values into a single value. Memo is the initial state of the reduction, and each successive step of it should be returned by iterator."
				},
				{
					"name": "_.reduceRight(list, iterator, memo, [context])",
					"url": "http://underscorejs.org/#reduceRight",
					"description": "The right-associative version of reduce. Delegates to the JavaScript 1.8 version of reduceRight, if it exists. Foldr is not as useful in JavaScript as it would be in a language with lazy evaluation."
				},
				{
					"name": "_.find(list, iterator, [context])",
					"url": "http://underscorejs.org/#find",
					"description": "Looks through each value in the list, returning the first one that passes a truth test (iterator). The function returns as soon as it finds an acceptable element, and doesn't traverse the entire list."
				},
				{
					"name": "_.filter(list, iterator, [context])",
					"url": "http://underscorejs.org/#filter",
					"description": "Looks through each value in the list, returning an array of all the values that pass a truth test (iterator). Delegates to the native filter method, if it exists."
				},
				{
					"name": "_.reject(list, iterator, [context])",
					"url": "http://underscorejs.org/#reject",
					"description": "Returns the values in list without the elements that the truth test (iterator) passes. The opposite of filter."
				},
				{
					"name": "_.all(list, iterator, [context])",
					"url": "http://underscorejs.org/#all",
					"description": "Returns true if all of the values in the list pass the iterator truth test. Delegates to the native method every, if present."
				},
				{
					"name": "_.any(list, [iterator], [context])",
					"url": "http://underscorejs.org/#any",
					"description": "Returns true if any of the values in the list pass the iterator truth test. Short-circuits and stops traversing the list if a true element is found. Delegates to the native method some, if present."
				},
				{
					"name": "_.include(list, value)",
					"url": "http://underscorejs.org/#include",
					"description": "Returns true if the value is present in the list, using === to test equality. Uses indexOf internally, if list is an Array."
				},
				{
					"name": "_.invoke(list, methodName, [*arguments])",
					"url": "http://underscorejs.org/#invoke",
					"description": "Calls the method named by methodName on each value in the list. Any extra arguments passed to invoke will be forwarded on to the method invocation."
				},
				{
					"name": "_.pluck(list, propertyName)",
					"url": "http://underscorejs.org/#pluck",
					"description": "A convenient version of what is perhaps the most common use-case for map: extracting a list of property values."
				},
				{
					"name": "_.max(list, [iterator], [context])",
					"url": "http://underscorejs.org/#max",
					"description": "Returns the maximum value in list. If iterator is passed, it will be used on each value to generate the criterion by which the value is ranked."
				},
				{
					"name": "_.min(list, [iterator], [context])",
					"url": "http://underscorejs.org/#min",
					"description": "Returns the minimum value in list. If iterator is passed, it will be used on each value to generate the criterion by which the value is ranked."
				},
				{
					"name": "_.sortBy(list, iterator, [context])",
					"url": "http://underscorejs.org/#sortBy",
					"description": "Returns a sorted copy of list, ranked in ascending order by the results of running each value through iterator. Iterator may also be the string name of the property to sort by (eg. length)."
				},
				{
					"name": "_.groupBy(list, iterator)",
					"url": "http://underscorejs.org/#groupBy",
					"description": "Splits a collection into sets, grouped by the result of running each value through iterator. If iterator is a string instead of a function, groups by the property named by iterator on each of the values."
				},
				{
					"name": "_.sortedIndex(list, value, [iterator])",
					"url": "http://underscorejs.org/#sortedIndex",
					"description": "Uses a binary search to determine the index at which the value should be inserted into the list in order to maintain the list's sorted order. If an iterator is passed, it will be used to compute the sort ranking of each value."
				},
				{
					"name": "_.shuffle(list)",
					"url": "http://underscorejs.org/#shuffle",
					"description": "Returns a shuffled copy of the list, using a version of the Fisher-Yates shuffle."
				},
				{
					"name": "_.toArray(list)",
					"url": "http://underscorejs.org/#toArray",
					"description": "Converts the list (anything that can be iterated over), into a real Array. Useful for transmuting the arguments object."
				},
				{
					"name": "_.size(list)",
					"url": "http://underscorejs.org/#size",
					"description": "Return the number of values in the list."
				}
			]
		},
		{
			"name": "Array Functions",
			"entries": [
				{
					"name": "_.first(array, [n])",
					"url": "http://underscorejs.org/#first",
					"description": "Returns the first element of an array. Passing n will return the first n elements of the array."
				},
				{
					"name": "_.initial(array, [n])",
					"url": "http://underscorejs.org/#initial",
					"description": "Returns everything but the last entry of the array. Especially useful on the arguments object. Pass n to exclude the last n elements from the result."
				},
				{
					"name": "_.last(array, [n])",
					"url": "http://underscorejs.org/#last",
					"description": "Returns the last element of an array. Passing n will return the last n elements of the array."
				},
				{
					"name": "_.rest(array, [index])",
					"url": "http://underscorejs.org/#rest",
					"description": "Returns the rest of the elements in an array. Pass an index to return the values of the array from that index onward."
				},
				{
					"name": "_.compact(array)",
					"url": "http://underscorejs.org/#compact",
					"description": "Returns a copy of the array with all falsy values removed. In JavaScript, false, null, 0, \"\", undefined and NaN are all falsy."
				},
				{
					"name": "_.flatten(array, [shallow])",
					"url": "http://underscorejs.org/#flatten",
					"description": "Flattens a nested array (the nesting can be to any depth). If you pass shallow, the array will only be flattened a single level."
				},
				{
					"name": "_.without(array, [*values])",
					"url": "http://underscorejs.org/#without",
					"description": "Returns a copy of the array with all instances of the values removed. === is used for the equality test."
				},
				{
					"name": "_.union(*arrays)",
					"url": "http://underscorejs.org/#union",
					"description": "Computes the union of the passed-in arrays: the list of unique items, in order, that are present in one or more of the arrays."
				},
				{
					"name": "_.intersection(*arrays)",
					"url": "http://underscorejs.org/#intersection",
					"description": "Computes the list of values that are the intersection of all the arrays. Each value in the result is present in each of the arrays."
				},
				{
					"name": "_.difference(array, *others)",
					"url": "http://underscorejs.org/#difference",
					"description": "Similar to without, but returns the values from array that are not present in the other arrays."
				},
				{
					"name": "_.uniq(array, [isSorted], [iterator])",
					"url": "http://underscorejs.org/#uniq",
					"description": "Produces a duplicate-free version of the array, using === to test object equality. If you know in advance that the array is sorted, passing true for isSorted will run a much faster algorithm. If you want to compute unique items based on a transformation, pass an iterator function."
				},
				{
					"name": "_.zip(*arrays)",
					"url": "http://underscorejs.org/#zip",
					"description": "Merges together the values of each of the arrays with the values at the corresponding position. Useful when you have separate data sources that are coordinated through matching array indexes. If you're working with a matrix of nested arrays, zip.apply can transpose the matrix in a similar fashion."
				},
				{
					"name": "_.indexOf(array, value, [isSorted])",
					"url": "http://underscorejs.org/#indexOf",
					"description": "Returns the index at which value can be found in the array, or -1 if value is not present in the array. Uses the native indexOf function unless it's missing. If you're working with a large array, and you know that the array is already sorted, pass true for isSorted to use a faster binary search."
				},
				{
					"name": "_.lastIndexOf(array, value)",
					"url": "http://underscorejs.org/#lastIndexOf",
					"description": "Returns the index of the last occurrence of value in the array, or -1 if value is not present. Uses the native lastIndexOf function if possible."
				},
				{
					"name": "_.range([start], stop, [step])",
					"url": "http://underscorejs.org/#range",
					"description": "A function to create flexibly-numbered lists of integers, handy for each and map loops. start, if omitted, defaults to 0; step defaults to 1. Returns a list of integers from start to stop, incremented (or decremented) by step, exclusive."
				}
			]
		},
		{
			"name": "Function (uh, ahem) Functions",
			"entries": [
				{
					"name": "_.bind(function, object, [*arguments])",
					"url": "http://underscorejs.org/#bind",
					"description": "Bind a function to an object, meaning that whenever the function is called, the value of this will be the object. Optionally, bind arguments to the function to pre-fill them, also known as partial application."
				},
				{
					"name": "_.bindAll(object, [*methodNames])",
					"url": "http://underscorejs.org/#bindAll",
					"description": "Binds a number of methods on the object, specified by methodNames, to be run in the context of that object whenever they are invoked. Very handy for binding functions that are going to be used as event handlers, which would otherwise be invoked with a fairly useless this. If no methodNames are provided, all of the object's function properties will be bound to it."
				},
				{
					"name": "_.memoize(function, [hashFunction])",
					"url": "http://underscorejs.org/#memoize",
					"description": "Memoizes a given function by caching the computed result. Useful for speeding up slow-running computations. If passed an optional hashFunction, it will be used to compute the hash key for storing the result, based on the arguments to the original function. The default hashFunction just uses the first argument to the memoized function as the key."
				},
				{
					"name": "_.delay(function, wait, [*arguments])",
					"url": "http://underscorejs.org/#delay",
					"description": "Much like setTimeout, invokes function after wait milliseconds. If you pass the optional arguments, they will be forwarded on to the function when it is invoked."
				},
				{
					"name": "_.defer(function, [*arguments])",
					"url": "http://underscorejs.org/#defer",
					"description": "Defers invoking the function until the current call stack has cleared, similar to using setTimeout with a delay of 0. Useful for performing expensive computations or HTML rendering in chunks without blocking the UI thread from updating. If you pass the optional arguments, they will be forwarded on to the function when it is invoked."
				},
				{
					"name": "_.throttle(function, wait)",
					"url": "http://underscorejs.org/#throttle",
					"description": "Creates and returns a new, throttled version of the passed function, that, when invoked repeatedly, will only actually call the original function at most once per every wait milliseconds. Useful for rate-limiting events that occur faster than you can keep up with."
				},
				{
					"name": "_.debounce(function, wait, [immediate])",
					"url": "http://underscorejs.org/#debounce",
					"description": "Creates and returns a new debounced version of the passed function that will postpone its execution until after wait milliseconds have elapsed since the last time it was invoked. Useful for implementing behavior that should only happen after the input has stopped arriving. For example: rendering a preview of a Markdown comment, recalculating a layout after the window has stopped being resized, and so on."
				},
				{
					"name": "_.once(function)",
					"url": "http://underscorejs.org/#once",
					"description": "Creates a version of the function that can only be called one time. Repeated calls to the modified function will have no effect, returning the value from the original call. Useful for initialization functions, instead of having to set a boolean flag and then check it later."
				},
				{
					"name": "_.after(count, function)",
					"url": "http://underscorejs.org/#after",
					"description": "Creates a version of the function that will only be run after first being called count times. Useful for grouping asynchronous responses, where you want to be sure that all the async calls have finished, before proceeding."
				},
				{
					"name": "_.wrap(function, wrapper)",
					"url": "http://underscorejs.org/#wrap",
					"description": "Wraps the first function inside of the wrapper function, passing it as the first argument. This allows the wrapper to execute code before and after the function runs, adjust the arguments, and execute it conditionally."
				},
				{
					"name": "_.compose(*functions)",
					"url": "http://underscorejs.org/#compose",
					"description": "Returns the composition of a list of functions, where each function consumes the return value of the function that follows. In math terms, composing the functions f(), g(), and h() produces f(g(h()))."
				}
			]
		},
		{
			"name": "Object Functions",
			"entries": [
				{
					"name": "_.keys(object)",
					"url": "http://underscorejs.org/#keys",
					"description": "Retrieve all the names of the object's properties."
				},
				{
					"name": "_.values(object)",
					"url": "http://underscorejs.org/#values",
					"description": "Return all of the values of the object's properties."
				},
				{
					"name": "_.functions(object)",
					"url": "http://underscorejs.org/#object-functions",
					"description": "Returns a sorted list of the names of every method in an object — that is to say, the name of every function property of the object."
				},
				{
					"name": "_.extend(destination, *sources)",
					"url": "http://underscorejs.org/#extend",
					"description": "Copy all of the properties in the source objects over to the destination object, and return the destination object. It's in-order, so the last source will override properties of the same name in previous arguments."
				},
				{
					"name": "_.pick(object, *keys)",
					"url": "http://underscorejs.org/#pick",
					"description": "Return a copy of the object, filtered to only have values for the whitelisted keys (or array of valid keys)."
				},
				{
					"name": "_.defaults(object, *defaults)",
					"url": "http://underscorejs.org/#defaults",
					"description": "Fill in missing properties in object with default values from the defaults objects, and return the object. As soon as the property is filled, further defaults will have no effect."
				},
				{
					"name": "_.clone(object)",
					"url": "http://underscorejs.org/#clone",
					"description": "Create a shallow-copied clone of the object. Any nested objects or arrays will be copied by reference, not duplicated."
				},
				{
					"name": "_.tap(object, interceptor)",
					"url": "http://underscorejs.org/#tap",
					"description": "Invokes interceptor with the object, and then returns object. The primary purpose of this method is to \"tap into\" a method chain, in order to perform operations on intermediate results within the chain."
				},
				{
					"name": "_.has(object, key)",
					"url": "http://underscorejs.org/#has",
					"description": "Does the object contain the given key? Identical to object.hasOwnProperty(key), but uses a safe reference to the hasOwnProperty function, in case it's been overridden accidentally."
				},
				{
					"name": "_.isEqual(object, other)",
					"url": "http://underscorejs.org/#isEqual",
					"description": "Performs an optimized deep comparison between the two objects, to determine if they should be considered equal."
				},
				{
					"name": "_.isEmpty(object)",
					"url": "http://underscorejs.org/#isEmpty",
					"description": "Returns true if object contains no values."
				},
				{
					"name": "_.isElement(object)",
					"url": "http://underscorejs.org/#isElement",
					"description": "Returns true if object is a DOM element."
				},
				{
					"name": "_.isArray(object)",
					"url": "http://underscorejs.org/#isArray",
					"description": "Returns true if object is an Array."
				},
				{
					"name": "_.isObject(value)",
					"url": "http://underscorejs.org/#isObject",
					"description": "Returns true if value is an Object."
				},
				{
					"name": "_.isArguments(object)",
					"url": "http://underscorejs.org/#isArguments",
					"description": "Returns true if object is an Arguments object."
				},
				{
					"name": "_.isFunction(object)",
					"url": "http://underscorejs.org/#isFunction",
					"description": "Returns true if object is a Function."
				},
				{
					"name": "_.isString(object)",
					"url": "http://underscorejs.org/#isString",
					"description": "Returns true if object is a String."
				},
				{
					"name": "_.isNumber(object)",
					"url": "http://underscorejs.org/#isNumber",
					"description": "Returns true if object is a Number (including NaN)."
				},
				{
					"name": "_.isFinite(object)",
					"url": "http://underscorejs.org/#isFinite",
					"description": "Returns true if object is a finite Number."
				},
				{
					"name": "_.isBoolean(object)",
					"url": "http://underscorejs.org/#isBoolean",
					"description": "Returns true if object is either true or false."
				},
				{
					"name": "_.isDate(object)",
					"url": "http://underscorejs.org/#isDate",
					"description": "Returns true if object is a Date."
				},
				{
					"name": "_.isRegExp(object)",
					"url": "http://underscorejs.org/#isRegExp",
					"description": "Returns true if object is a RegExp."
				},
				{
					"name": "_.isNaN(object)",
					"url": "http://underscorejs.org/#isNaN",
					"description": "Returns true if object is NaN. Note: this is not the same as the native isNaN function, which will also return true if the variable is undefined."
				},
				{
					"name": "_.isNull(object)",
					"url": "http://underscorejs.org/#isNull",
					"description": "Returns true if the value of object is null."
				},
				{
					"name": "_.isUndefined(variable)",
					"url": "http://underscorejs.org/#isUndefined",
					"description": "Returns true if variable is undefined."
				}
			]
		},
		{
			"name": "Utility Functions",
			"entries": [
				{
					"name": "_.noConflict()",
					"url": "http://underscorejs.org/#noConflict",
					"description": "Give control of the \"_\" variable back to its previous owner. Returns a reference to the Underscore object."
				},
				{
					"name": "_.identity(value)",
					"url": "http://underscorejs.org/#identity",
					"description": "Returns the same value that is used as the argument. In math: f(x) = x This function looks useless, but is used throughout Underscore as a default iterator."
				},
				{
					"name": "_.times(n, iterator)",
					"url": "http://underscorejs.org/#times",
					"description": "Invokes the given iterator function n times."
				},
				{
					"name": "_.mixin(object)",
					"url": "http://underscorejs.org/#mixin",
					"description": "Allows you to extend Underscore with your own utility functions. Pass a hash of {name: function} definitions to have your functions added to the Underscore object, as well as the OOP wrapper."
				},
				{
					"name": "_.uniqueId([prefix])",
					"url": "http://underscorejs.org/#uniqueId",
					"description": "Generate a globally-unique id for client-side models or DOM elements that need one. If prefix is passed, the id will be appended to it. Without prefix, returns an integer."
				},
				{
					"name": "_.escape(string)",
					"url": "http://underscorejs.org/#escape",
					"description": "Escapes a string for insertion into HTML, replacing &, <, >, \", ', and / characters."
				},
				{
					"name": "_.result(object, property)",
					"url": "http://underscorejs.org/#result",
					"description": "If the value of the named property is a function then invoke it; otherwise, return it."
				},
				{
					"name": "_.template(templateString, [data], [settings])",
					"url": "http://underscorejs.org/#template",
					"description": "Compiles JavaScript templates into functions that can be evaluated for rendering. Useful for rendering complicated bits of HTML from JSON data sources. Template functions can both interpolate variables, using <%= … %>, as well as execute arbitrary JavaScript code, with <% … %>. If you wish to interpolate a value, and have it be HTML-escaped, use <%- … %> When you evaluate a template function, pass in a data object that has properties corresponding to the template's free variables. If you're writing a one-off, you can pass the data object as the second parameter to template in order to render immediately instead of returning a template function. The settings argument should be a hash containing any _.templateSettings that should be overriden."
				}
			]
		},
		{
			"name": "Chaining",
			"entries": [
				{
					"name": "_.chain(obj)",
					"url": "http://underscorejs.org/#chain",
					"description": "Returns a wrapped object. Calling methods on this object will continue to return wrapped objects until value is used."
				},
				{
					"name": "_(obj).value()",
					"url": "http://underscorejs.org/#value",
					"description": "Extracts the value of a wrapped object."
				}
			]
		}
	]
});