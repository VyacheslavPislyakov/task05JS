describe('angularjs homepage todo list', function() {

	const URL = 'http://www.gettyimages.com/';
	var findKittenLabel = element(by.xpath('//*[@id="gallery"]/section[2]/section[1]/section/ul/li[2]/h5'));
	var title = 'Creative Images | Stock Photos, Illustrations, Vector Art, Photo Archives | Getty Images';
	var creativeElement = element(by.xpath('//*[@id="site-header"]/div[2]/nav[1]/ul/li[1]/a'));
	var searchButton = element(by.xpath('//*[@id="search-container-fancy"]/form/fieldset/button/img'));
	var amountOfPictures = 60;
	var theLogo = element(By.id('logo'));
	var searchLine = element(by.id('search-phrase'));
	var urlCreativePage = 'http://www.gettyimages.com/creative-images';
	var TooBarElements = element.all(by.css('div.tabs > a'));
	var firstActiveInfoTab = element(by.css('#tab1 > div > h3'));
	var mosaicOfPictures = element.all(by.css('.mosaic-asset'));


	beforeEach(() => {
		browser.get(URL);
	});

	describe('test', function() {
		it('go to creative page', function() {
			creativeElement.click();
			expect(browser.getTitle()).toEqual(title);
		});

		it('should have family pictures and count them', function() {
			searchLine.sendKeys('family');
			browser.executeScript('arguments[0].click()', searchButton);
			expect((mosaicOfPictures).count()).toBeLessThanOrEqual(amountOfPictures);
		});

		it('should highlight the logo', function() {
			browser.executeScript("arguments[0].style.backgroundColor = '" + "red" + "'", theLogo);
			browser.sleep(3000);
		});

		it('go back and show puppies pictures', function() {
			browser.get(urlCreativePage);
			searchLine.sendKeys('puppies');
			browser.actions().sendKeys(protractor.Key.ENTER).perform();
			expect(findKittenLabel.getText()).toEqual('Related searches');
		});

		it('imitation moving of mouse ', function () {
			browser.actions().mouseMove(TooBarElements.get(0)).click().perform();
			expect(firstActiveInfoTab.isDisplayed()).toBeTruthy();
		});

	});

});
