import { Selector } from 'testcafe';

export default class LoginPage {
    constructor() {
        // Define selectors
        this.signInButton = Selector('a').withAttribute('aria-label', 'Sign In').withExactText('Sign In');
        this.usernameInput = Selector('input').withAttribute('id', 'signInName').withAttribute('placeholder', 'Username'); // Replace '#username' with the actual selector
        this.continueButton = Selector('button')
    .withAttribute('id', 'next')
    .withText('Continue');
        this.passwordInput = Selector('input')
        .withAttribute('id', 'password')
        .withAttribute('placeholder', 'Password'); // Replace '#password' with the actual selector
        this.loginButton = Selector('button')
        .withAttribute('id', 'next')
        .withText('Sign In');// Replace '#login' with the actual selector
        //this.errorMessage = Selector('.error'); // Optional: For error message validation
        this.pageLoader = Selector('img')
        .withAttribute('alt', 'vision link')
        .withAttribute('src', '../assets/images/vision-link-logo.svg');
    }

    // Define actions
    async login(t, username, password) {
        await t
            .click(this.signInButton)
            .typeText(this.usernameInput, username)
            .click(this.continueButton)
            .typeText(this.passwordInput, password)
            .click(this.loginButton)
            .expect(this.pageLoader.exists).notOk({ timeout: 20000 });
    }
}