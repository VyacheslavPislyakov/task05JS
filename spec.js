describe('angularjs homepage todo list', function() {

	var findKittenLabel = element(by.xpath('//*[@id="gallery"]/section[2]/section[1]/section/ul/li[2]/h5'));
	browser.get('http://www.gettyimages.com/');

	it('go to creative page', function() {
		// browser.get('http://www.gettyimages.com/');
		element(by.xpath('//*[@id="site-header"]/div[2]/nav[1]/ul/li[1]/a')).click();
	});

	it('should have a page title', function () {
		expect(browser.getTitle()).toEqual('Creative Images | Stock Photos, Illustrations, Vector Art, Photo Archives | Getty Images');
	});

	it('should have family pictures and count them', function () {
		element(by.id('search-phrase')).sendKeys('family');
		element(by.xpath('//*[@id="search-container-fancy"]/form/fieldset/button/img')).click();
		expect(element.all(by.css('.mosaic-asset')).count()).toEqual(60);
	});

	it('go back and show puppies pictures', function () {
		browser.navigate().back();
		element(by.id('search-phrase')).sendKeys('puppies');
		element(by.xpath('//*[@id="search-container-fancy"]/form/fieldset/button/img')).click();

	});

	it('should have Related searches', function () {
		expect(findKittenLabel.getText()).toEqual('Related searches');
	});


});
