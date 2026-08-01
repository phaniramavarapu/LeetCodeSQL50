import { Selector } from 'testcafe';

export default class LoginPage {
    constructor() {
        this.usernameInput = Selector('input.input');
        this.continueButton = Selector('div button#next');
        this.passwordInput = Selector('input#password');
        this.signInButton = Selector('button#next');
        this.pagevlLogo = Selector('span.cc-top-nav-logo.cc-top-navLogo-Associated img').withAttribute('src', '../assets/images/vision-link-logo.svg');
    }

    async login(t, username, password) {
        await t
            .typeText(this.usernameInput, username)
            .click(this.continueButton)
            .typeText(this.passwordInput, password)
            .click(this.signInButton);
    }
}