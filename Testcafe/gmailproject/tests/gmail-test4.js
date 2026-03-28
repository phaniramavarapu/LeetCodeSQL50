import { Selector } from 'testcafe';
import LoginPage from '../pages/login-page.js';
import InboxPage from '../pages/inbox-page.js';

const loginPage = new LoginPage();
const inboxPage = new InboxPage();

fixture `Gmail Test`
    .page `https://mail.google.com`;

test('Login and count tabs in Gmail', async t => {
    const email = 'raar78245@gmail.com';
    const password = 'testcafe';

    await loginPage.login(t, email, password);

    const { primaryCount, socialCount, promotionsCount } = await inboxPage.countTabs(t);

    console.log(`Primary tab count: ${primaryCount}`);
    console.log(`Social tab count: ${socialCount}`);
    console.log(`Promotions tab count: ${promotionsCount}`);
});
