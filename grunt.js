/*global module:false*/
module.exports = function(grunt) {

	grunt.loadNpmTasks("grunt-coffee");

	// Project configuration.
	grunt.initConfig({

		pkg: "<json:package.json>",

		meta: {
			banner: "/*\n" +
					"* <%= pkg.name %> v<%= pkg.version %> - <%= grunt.template.today('yyyy-mm-dd') %> - <%= pkg.homepage %>\n" +
					"* by <%= pkg.author %>\n" +
					"*\n" +
					"* Licensed under:\n" +
					"*    <%= _.map(pkg.licenses, function(license){ return license.type + ' - ' + license.url; }).join('\n*    ') %>\n" +
					"*/"
		},

		coffee: {
			build: {
				src: ["src/*.coffee"],
				dest: "build/tmp"
			}
		},

		concat: {
			build: {
				src: [
					"<banner>",
					"build/tmp/Utils.js",
					"build/tmp/List.js",
					"build/tmp/ListManager.js",
					"build/tmp/Goldfish.js"
				],
				dest: "build/goldfish.js"
			}
		},

		watch: {
			files: "src/*.coffee",
			tasks: "default"
		}

	});

	// Default task.
	grunt.registerTask("default", "coffee concat");

};
