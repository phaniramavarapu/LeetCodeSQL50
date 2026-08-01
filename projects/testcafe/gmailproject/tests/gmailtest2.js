// tests/gmail-test.js
import { Selector } from 'testcafe';
import GmailPage from '../pages/gmail-page1.js';

// Configure email and password directly in the test file
const EMAIL = 'raar78245@gmail.com';    // Replace with your email
const PASSWORD = 'testcafe';         // Replace with your password

fixture`Gmail Tests`
    .page`https://mail.google.com`;

test('Verify Gmail Inbox Features', async t => {
    try {
        // Login to Gmail
        console.log('Logging in to Gmail...');
        await GmailPage.login(EMAIL, PASSWORD);
        
        // Verify tabs
        console.log('Checking Gmail tabs...');
        const tabCount = await GmailPage.getTabCount();
        const tabTexts = await GmailPage.getTabTexts();
        
        await t
            .expect(tabCount).eql(3, 'Expected 3 tabs in Gmail')
            .expect(tabTexts).contains('Primary', 'Primary tab not found')
            .expect(tabTexts).contains('Social', 'Social tab not found')
            .expect(tabTexts).contains('Promotions', 'Promotions tab not found');

        // Verify mail count
        console.log('Checking unread mail count...');
        const mailCount = await GmailPage.getUnreadMailCount();
        await t.expect(Number(mailCount)).gte(0, 'Expected valid unread mail count');

        // Open and verify first email
        console.log('Opening first email...');
        await GmailPage.openFirstEmail();
        
        console.log('Checking email content...');
        const emailContent = await GmailPage.getEmailContent();
        await t
            .expect(emailContent.header).notEql('', 'Email header should not be empty')
            .expect(emailContent.body).notEql('', 'Email body should not be empty');
            
        console.log('Test completed successfully!');
    } catch (error) {
        console.error('Test failed:', error);
        throw error;
    }
});