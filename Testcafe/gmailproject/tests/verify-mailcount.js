import { Selector } from 'testcafe';

import LoginPage from '../pages/login-page.js';
import InboxPage from '../pages/inbox-page.js';

const loginPage = new LoginPage();
const inboxPage = new InboxPage();

fixture `Gmail Test`
    .page `https://mail.google.com`;

test('Login and verify mail count in Gmail', async t => {
    const email = 'raar78245@gmail.com';
    const password = 'testcafe';

    await loginPage.login(t, email, password);

    const emailCount = await inboxPage.getEmailCount(t);

    console.log(`Number of emails in the Primary tab: ${emailCount}`);
    
    // You can add an assertion to verify the email count, if necessary
    await t.expect(emailCount).gt(0, 'The Primary tab should have at least one email');
});
