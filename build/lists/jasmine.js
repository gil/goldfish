// List extracted from: https://github.com/pivotal/jasmine/wiki/Matchers
Goldfish.addList({
	"name": "Jasmine",
	"groups": [
		{
			"name": "Matchers",
			"entries": [
				{
					"name": "expect(x).toEqual(y);",
					"description": "compares objects or primitives x and y and passes if they are equivalent"
				},
				{
					"name": "expect(x).toBe(y);",
					"description": "compares objects or primitives x and y and passes if they are the same object"
				},
				{
					"name": "expect(x).toMatch(pattern);",
					"description": "compares x to string or regular expression pattern and passes if they match"
				},
				{
					"name": "expect(x).toBeDefined();",
					"description": "passes if x is not undefined"
				},
				{
					"name": "expect(x).toBeUndefined();",
					"description": "passes if x is undefined"
				},
				{
					"name": "expect(x).toBeNull();",
					"description": "passes if x is null"
				},
				{
					"name": "expect(x).toBeTruthy();",
					"description": "passes if x evaluates to true"
				},
				{
					"name": "expect(x).toBeFalsy();",
					"description": "passes if x evaluates to false"
				},
				{
					"name": "expect(x).toContain(y);",
					"description": "passes if array or string x contains y"
				},
				{
					"name": "expect(x).toBeLessThan(y);",
					"description": "passes if x is less than y"
				},
				{
					"name": "expect(x).toBeGreaterThan(y);",
					"description": "passes if x is greater than y"
				},
				{
					"name": "expect(function(){fn();}).toThrow(e);",
					"description": "passes if function fn throws exception e when executed"
				},
				{
					"name": "expect(x).not.toEqual(y);",
					"description": "compares objects or primitives x and y and passes if they are not equivalent"
				}
			]
		}
	]
});