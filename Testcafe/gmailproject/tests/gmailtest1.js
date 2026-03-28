import { Selector } from 'testcafe';

fixture `Gmail Login Test`
    .page `https://mail.google.com/`;

test('Login to Gmail', async t => {
    const emailInput = Selector('input#identifierId');
    const nextButtonEmail = Selector('div#identifierNext > div > button > span');
    const passwordInput = Selector('div#password > div > div > div > input');
    const nextButtonPassword = Selector('div#passwordNext > div > button > span');

    // Replace with your test credentials
    const testEmail = 'raar78245@gmail.com';
    const testPassword = 'testcafe';

    // Enter email and proceed
    await t
        .typeText(emailInput, testEmail)
        .click(nextButtonEmail)
        .wait(2000); // Wait for password field to appear (adjust if necessary)

    // Enter password and proceed
    await t
        .typeText(passwordInput, testPassword)
        .click(nextButtonPassword)
        .wait(5000); // Wait for login to complete (adjust if necessary)

    // Verify successful login by checking for a specific element (adjust as needed)
    const inboxSelector = Selector('a').withAttribute('href', /#inbox/);
    await t.expect(inboxSelector.exists).ok('Inbox link not found');
});
