Package.describe({
	name: "danappelxx:eggjs",
	summary: "A wrapper for a library to add easter eggs to web pages.",
	version: "0.6.3",
	git: "https://github.com/danappelxx/meteor-eggjs.git",
	documentation: "README.md"
});

Package.onUse( function (api) {
	api.versionsFrom('1.1.0.2');

	api.addFiles([
		'egg.js'
	], 'client');

	api.export('Egg', 'client');
});
