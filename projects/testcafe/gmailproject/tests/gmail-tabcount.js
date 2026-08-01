// tests/gmail-test.js
import { Selector } from 'testcafe';
import GmailPage from '../pages/gmail-page2.js';

const EMAIL = 'raar78245@gmail.com';    // Replace with your email
const PASSWORD = 'testcafe';         // Replace with your password

fixture`Gmail Tests`
    .page`https://mail.google.com`;

test('Verify Gmail Tabs', async t => {
    try {
        // Login to Gmail
        console.log('Logging in to Gmail...');
        await GmailPage.login(EMAIL, PASSWORD);
        
        // Wait for page to load completely
        await t.wait(5000);
        
        // Get and verify tab count
        console.log('Checking Gmail tabs...');
        const tabCount = await GmailPage.getTabCount();
        console.log(`Total number of tabs: ${tabCount}`);
        
        // Get and verify tab texts
        const tabTexts = await GmailPage.getTabTexts();
        console.log('Tab names:', tabTexts);
        
        // Verify the tabs
        await t
            .expect(tabCount).eql(3, 'Expected 3 tabs in Gmail')
            .expect(tabTexts).contains('Primary', 'Primary tab not found')
            .expect(tabTexts).contains('Social', 'Social tab not found')
            .expect(tabTexts).contains('Promotions', 'Promotions tab not found');
            
        console.log('Tab verification completed successfully!');
    } catch (error) {
        console.error('Test failed:', error);
        throw error;
    }
});