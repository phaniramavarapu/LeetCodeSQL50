import { Selector } from 'testcafe';
import LoginPage from '/Users/phani/Github/Testcafe/VL/loginpage.js';

const loginPage = new LoginPage();

fixture `Login Tests`
    .page `https://int-vl.cat.com/visionlink?ui_locales=en-US`; // Replace with your login page URL

test('Successful Login', async t => {
    await loginPage.login(t, 'vltrailblazers@gmail.com', 'Password@410');

   // Wait for the main page to load (example: check a known element exists)
   await t.expect(Selector('img')
   .withAttribute('alt', 'vision link')
   .withAttribute('src', '../assets/images/vision-link-logo.svg').exists).ok({ timeout: 20000 }); // Replace '#dashboard' with an element on the loaded page
});

