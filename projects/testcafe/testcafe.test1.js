import { Selector } from 'testcafe';

fixture `Getting Started` // Name of the test suite
    .page `https://google.com`; // URL of the application under test

test('My first test', async t => {
    // Select an element
    const heading = Selector('h1');

    // Test assertions
    await t
        .expect(heading.innerText).eql('Welcome to Google')
        .click('a'); // Click a link
});