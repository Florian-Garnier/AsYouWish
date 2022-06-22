const fs = require('fs')

function getConfig() {
	let config = {}
	try {
		config = require('../config.json')
	} catch (e) {
		fs.writeFileSync("./config.json", JSON.stringify(config), null, 2, (e) => e && console.log(e));
	}
	return config;
}

function saveConfig(config) {
	fs.writeFileSync("./config.json", JSON.stringify(config), null, 2, (e) => e && console.log(e));
}

module.exports = {
	getConfig,
	saveConfig
}