describe('angularjs homepage todo list', function() {

	var findKittenLabel = element(by.xpath('//*[@id="gallery"]/section[2]/section[1]/section/ul/li[2]/h5'));

	beforeEach(() => {
		browser.get('http://www.gettyimages.com/');
	});

	describe('test', function() {
		it('go to creative page', function() {
			element(by.xpath('//*[@id="site-header"]/div[2]/nav[1]/ul/li[1]/a')).click();
			expect(browser.getTitle()).toEqual('Creative Images | Stock Photos, Illustrations, Vector Art, Photo Archives | Getty Images');
		});

		it('should have family pictures and count them', function() {
			element(by.id('search-phrase')).sendKeys('family');
			element(by.xpath('//*[@id="search-container-fancy"]/form/fieldset/button/img')).click(); //не отрабатывает клик

			expect(element.all(by.css('.mosaic-asset')).count()).toBeLessThanOrEqual(60);
			browser.sleep(3000);
		});

		it('test executors', function() {
			var el = element(By.id('logo'));
			browser.executeScript("arguments[0].style.backgroundColor = '" + "yellow" + "'", el);
			browser.sleep(3000);
		});

		it('go back and show puppies pictures', function() {
			// browser.navigate().back();
			browser.get('http://www.gettyimages.com/creative-images');
			var search = element(by.id('search-phrase')).sendKeys('puppies');
			search.sendKeys(protractor.Key.ENTER).perform;
			expect(findKittenLabel.getText()).toEqual('Related searches');
			// element(by.xpath('//*[@id="search-container-fancy"]/form/fieldset/button/img')).click();

		});
	});

});
