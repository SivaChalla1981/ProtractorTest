
var Registration_Page = function(){

    this.getPageUrl =function() {

        browser.get("https://prototypes.aws.aat.org.uk/register");
    }

    this.stuMemberShipAddButtonToShoppingBasket = async function() {
       var elem = element(by.xpath("/html/body/app-root/app-courses/div[2]/div/div[2]/div[1]/div/div/div[2]/fab-button-primary/a/span"));
        var until = protractor.ExpectedConditions;
        browser.wait(until.presenceOf(elem), 5000, 'Element taking too long to appear in the DOM');
        await elem.click();
    }

    this.heading =  async function() {
      await element(by.xpath('/html/body/app-root/app-courses/div[1]/h1'));
     
    }

    this.shoppingBasketImage = async function() {
        var elem1 = element(by.xpath("/html/body/app-root/app-courses/app-simple-header/div/div[2]/div[1]/span/span[1]/img"))
        var until = protractor.ExpectedConditions;
        browser.wait(until.presenceOf(elem1), 10000, 'Element taking too long to appear in the DOM');
        await elem1.click();
    }

    registerButton = function(){

        element(by.xpath("/html/body/app-root/app-basket/div[2]/div/div[5]/div[6]/fab-button-primary/a/span"));
    }

}
module.exports = new Registration_Page();