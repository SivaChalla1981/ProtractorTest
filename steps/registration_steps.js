var chai = require('chai').use(require('chai-as-promised'));
var expect = chai.expect;
var Registration_Page = require("../pages/registraton_page.js");
var {setDefaultTimeout} = require('cucumber');
setDefaultTimeout(60 * 1200);

Given('I\'m on registration page', function () {
    Registration_Page.getPageUrl();
});

When('I add student membership course to shopping basket', function () {
    
    Registration_Page.stuMemberShipAddButtonToShoppingBasket();
});

When('I click on Shopping basket icon', function () {

   Registration_Page.shoppingBasketImage();
});

Then('I\'m ready to start the registration', function () {
    
});