Goldfish.addList({
	"name": "Regular Expressions",
	"groups": [
		{
			"name": "Anchors",
			"entries": [
				{
					"name": "^",
					"description": "Start of string, or start of line in multi-line pattern"
				},
				{
					"name": "\\A",
					"description": "Start of string"
				},
				{
					"name": "$",
					"description": "End of string, or end of line in multi-line pattern"
				},
				{
					"name": "\\Z",
					"description": "End of string"
				},
				{
					"name": "\\b",
					"description": "Word boundary"
				},
				{
					"name": "\\B",
					"description": "Not word boundary"
				},
				{
					"name": "\\&lt;",
					"description": "Start of word"
				},
				{
					"name": "\\&gt;",
					"description": "End of word"
				}
			]
		},
		{
			"name": "Character Classes",
			"entries": [
				{
					"name": "\\c",
					"description": "Control character"
				},
				{
					"name": "\\s",
					"description": "White space"
				},
				{
					"name": "\\S",
					"description": "Not white space"
				},
				{
					"name": "\\d",
					"description": "Digit"
				},
				{
					"name": "\\D",
					"description": "Not digit"
				},
				{
					"name": "\\w",
					"description": "Word"
				},
				{
					"name": "\\W",
					"description": "Not word"
				},
				{
					"name": "\\x",
					"description": "Hexade­cimal digit"
				},
				{
					"name": "\\O",
					"description": "Octal digit"
				}
			]
		},
		{
			"name": "POSIX",
			"entries": [
				{
					"name": "[:upper:]",
					"description": "Upper case letters"
				},
				{
					"name": "[:lower:]",
					"description": "Lower case letters"
				},
				{
					"name": "[:alpha:]",
					"description": "All letters"
				},
				{
					"name": "[:alnum:]",
					"description": "Digits and letters"
				},
				{
					"name": "[:digit:]",
					"description": "Digits"
				},
				{
					"name": "[:xdigit:]",
					"description": "Hexade­cimal digits"
				},
				{
					"name": "[:punct:]",
					"description": "Punctu­ation"
				},
				{
					"name": "[:blank:]",
					"description": "Space and tab"
				},
				{
					"name": "[:space:]",
					"description": "Blank characters"
				},
				{
					"name": "[:cntrl:]",
					"description": "Control characters"
				},
				{
					"name": "[:graph:]",
					"description": "Printed characters"
				},
				{
					"name": "[:print:]",
					"description": "Printed characters and spaces"
				},
				{
					"name": "[:word:]",
					"description": "Digits, letters and underscore"
				}
			]
		},
		{
			"name": "Assertions",
			"entries": [
				{
					"name": "?=",
					"description": "Lookahead assertion"
				},
				{
					"name": "?!",
					"description": "Negative lookahead"
				},
				{
					"name": "?&lt;=",
					"description": "Lookbehind assertion"
				},
				{
					"name": "?!= or ?&lt;!",
					"description": "Negative lookbehind"
				},
				{
					"name": "?&gt;",
					"description": "Once-only Subexp­ression"
				},
				{
					"name": "?()",
					"description": "Condition [if then]"
				},
				{
					"name": "?()|",
					"description": "Condition [if then else]"
				},
				{
					"name": "?#",
					"description": "Comment"
				}
			]
		},
		{
			"name": "Quantifiers",
			"entries": [
				{
					"name": "*",
					"description": "0 or more"
				},
				{
					"name": "+",
					"description": "1 or more"
				},
				{
					"name": "?",
					"description": "0 or 1"
				},
				{
					"name": "{3}",
					"description": "Exactly 3"
				},
				{
					"name": "{3,}",
					"description": "3 or more"
				},
				{
					"name": "{3,5}",
					"description": "3, 4 or 5"
				}
			]
		},
		{
			"name": "Special Characters",
			"entries": [
				{
					"name": "\\n",
					"description": "New line"
				},
				{
					"name": "\\r",
					"description": "Carriage return"
				},
				{
					"name": "\\t",
					"description": "Tab"
				},
				{
					"name": "\\v",
					"description": "Vertical tab"
				},
				{
					"name": "\\f",
					"description": "Form feed"
				},
				{
					"name": "\\xxx",
					"description": "Octal character xxx"
				},
				{
					"name": "\\xhh",
					"description": "Hex character hh"
				}
			]
		},
		{
			"name": "Groups and Ranges",
			"entries": [
				{
					"name": ".",
					"description": "Any character except new line (\\n)"
				},
				{
					"name": "(a|b)",
					"description": "a or b"
				},
				{
					"name": "(...)",
					"description": "Group"
				},
				{
					"name": "(?:...)",
					"description": "Passive (non-c­apt­uring) group"
				},
				{
					"name": "[abc]",
					"description": "Range (a or b or c)"
				},
				{
					"name": "[^abc]",
					"description": "Not a or b or c"
				},
				{
					"name": "[a-q]",
					"description": "Letter from a to q"
				},
				{
					"name": "[A-Q]",
					"description": "Upper case letter from A to Q"
				},
				{
					"name": "[0-7]",
					"description": "Digit from 0 to 7"
				},
				{
					"name": "\\n",
					"description": "nth group/­sub­pattern"
				}
			]
		},
		{
			"name": "Pattern Modifiers",
			"entries": [
				{
					"name": "g",
					"description": "Global match"
				},
				{
					"name": "i",
					"description": "Case-i­nse­nsitive"
				},
				{
					"name": "m",
					"description": "Multiple lines"
				},
				{
					"name": "s",
					"description": "Treat string as single line"
				},
				{
					"name": "x",
					"description": "Allow comments and white space in pattern"
				},
				{
					"name": "e",
					"description": "Evaluate replac­ement"
				},
				{
					"name": "U",
					"description": "Ungreedy pattern"
				}
			]
		},
		{
			"name": "String Replacement",
			"entries": [
				{
					"name": "$n",
					"description": "nth non-pa­ssive group"
				},
				{
					"name": "$2",
					"description": "\"­xyz­\" in /^(abc­(xy­z))$/"
				},
				{
					"name": "$1",
					"description": "\"­xyz­\" in /^(?:a­bc)­(xyz)$/"
				},
				{
					"name": "$`",
					"description": "Before matched string"
				},
				{
					"name": "$'",
					"description": "After matched string"
				},
				{
					"name": "$+",
					"description": "Last matched string"
				},
				{
					"name": "$&amp;",
					"description": "Entire matched string"
				}
			]
		}
	]
});