Package.describe({
	name: "danappelxx:eggjs",
	summary: "A wrapper egg.js to add easter eggs to web pages.",
	version: "1.0.0",
	git: "https://github.com/Danappelxx/meteor-eggjs.git",
	documentation: "README.md"
});

Package.onUse( function (api) {
	api.versionsFrom('1.1.0.2');

	api.addFiles([
		'egg.js'
	], 'client');

	api.export('Egg', 'client');
});
