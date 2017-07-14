exports.config = {
	seleniumAddress: 'http://localhost:4444/wd/hub',
	specs: ['spec.js'],
	capabilities: {
		'browserName': 'chrome'
	},
	// onPrepare: function () { //Не работает на Firefox
	// 	browser.driver.manage().window().maximize();
	// },
	//поставить несколько браузеров
	// multiCapabilities: [{
	// 	browserName: 'firefox'
	// }, {
	// 	browserName: 'chrome'
	// }, {
	// 	browserName: 'internet explorer'
	// }]
	// jasmineNodeOpts: {
	// 	showColors: true,
	// }
}
