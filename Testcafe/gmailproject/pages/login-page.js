import { Selector } from 'testcafe';

export default class LoginPage {
    constructor() {
        this.emailInput = Selector('input#identifierId');
        this.nextButton = Selector('div#identifierNext > div > button > span');
        this.passwordInput = Selector('div#password > div > div > div > input');
        this.passwordNextButton = Selector('div#passwordNext > div > button > span');
    }

    async login(t, email, password) {
        await t
            .typeText(this.emailInput, email)
            .click(this.nextButton)
            .typeText(this.passwordInput, password)
            .click(this.passwordNextButton);
    }
}
