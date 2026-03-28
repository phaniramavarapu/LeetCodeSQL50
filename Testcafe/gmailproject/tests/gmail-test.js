import { Selector } from 'testcafe';
import GmailPage from '/Users/phani/Github/Testcafe/gmailproject/pages/gmail-page.js';

fixture`Gmail Tests`
    .page`https://mail.google.com/`;

    


test('Verify Gmail Inbox Features', async t => {

    try {
        // Wait for manual login
        console.log('Please login manually to Gmail...');
        await GmailPage.waitForLogin();
        
        // Verify tabs count and text
        const tabCount = await GmailPage.getTabCount();
        const tabTexts = await GmailPage.getTabTexts();
        
        await t
            .expect(tabCount).eql(3, 'Expected 3 tabs in Gmail')
            .expect(tabTexts).contains('Primary', 'Primary tab not found')
            .expect(tabTexts).contains('Social', 'Social tab not found')
            .expect(tabTexts).contains('Promotions', 'Promotions tab not found');

        // Verify mail count
        const mailCount = await GmailPage.getUnreadMailCount();
        await t.expect(Number(mailCount)).gt(0, 'Expected unread mail count to be greater than 0');

        // Open and verify first email
        await GmailPage.openFirstEmail();
        
        const emailContent = await GmailPage.getEmailContent();
        await t
            .expect(emailContent.header).notEql('', 'Email header should not be empty')
            .expect(emailContent.body).notEql('', 'Email body should not be empty');
            
    } catch (error) {
        console.error('Test failed:', error);
        throw error;
    }
});