import MainPage from '../pageobjects/main';

const { expect } = require('chai');

describe('Search form on main page',() => {
    it('shows error message on empty destination', () => {
        MainPage.open();
        MainPage.search();
        MainPage.errorBanner.waitForVisible();
        expect(MainPage.errorBanner.getText()).to.contain('Please enter a destination to start searching');
    });
});