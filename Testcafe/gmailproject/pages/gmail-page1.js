// pages/gmail-page.js
import { Selector, t } from 'testcafe';

class GmailPage {
    constructor() {
        // Login selectors
        this.emailInput = Selector('input#identifierId');
        this.nextButton = Selector('div#identifierNext > div > button > span');
        this.passwordInput = Selector('div#password > div > div > div > input');
        this.passwordNextButton = Selector('div#passwordNext > div > button > span');
        
        // Gmail inbox selectors
        this.inboxElement = Selector('div#:3z > div > div:nth-of-type(2)');
        this.tabList = Selector('div[role="tab"]');
        this.mailCount = Selector('div.bsU');
        this.firstEmail = Selector('tr[role="row"]').nth(0);
        this.emailHeader = Selector('h2.hP');
        this.emailBody = Selector('div.a3s.aiL');
    }

    async login(email, password) {
        try {
            // Enter email
            await t
                .typeText(this.emailInput, email, { paste: true })
                .expect(this.nextButton.exists).ok({ timeout: 5000 })
                .click(this.nextButton)
                .wait(3000);  // Wait for password field to appear

            // Enter password
            await t
                .expect(this.passwordInput.exists).ok({ timeout: 5000 })
                .typeText(this.passwordInput, password, { paste: true })
                .expect(this.passwordNextButton.exists).ok({ timeout: 5000 })
                .click(this.passwordNextButton)
                .wait(8000);  // Wait for inbox to load
                
            // Verify login success
            await t.expect(this.inboxElement.exists).ok({ timeout: 15000 });
            
        } catch (error) {
            throw new Error(`Login failed: ${error.message}`);
        }
    }

    async getTabCount() {
        try {
            await t.expect(this.tabList.exists).ok({ timeout: 10000 });
            return await this.tabList.count;
        } catch (error) {
            throw new Error(`Failed to get tab count: ${error.message}`);
        }
    }

    async getTabTexts() {
        try {
            const count = await this.getTabCount();
            const texts = [];
            
            for (let i = 0; i < count; i++) {
                texts.push(await this.tabList.nth(i).innerText);
            }
            
            return texts;
        } catch (error) {
            throw new Error(`Failed to get tab texts: ${error.message}`);
        }
    }

    async getUnreadMailCount() {
        try {
            await t.expect(this.mailCount.exists).ok({ timeout: 10000 });
            return await this.mailCount.innerText;
        } catch (error) {
            throw new Error(`Failed to get unread mail count: ${error.message}`);
        }
    }

    async openFirstEmail() {
        try {
            await t
                .expect(this.firstEmail.exists).ok({ timeout: 10000 })
                .click(this.firstEmail);
        } catch (error) {
            throw new Error(`Failed to open first email: ${error.message}`);
        }
    }

    async getEmailContent() {
        try {
            await t
                .expect(this.emailHeader.exists).ok({ timeout: 10000 })
                .expect(this.emailBody.exists).ok({ timeout: 10000 });

            return {
                header: await this.emailHeader.innerText,
                body: await this.emailBody.innerText
            };
        } catch (error) {
            throw new Error(`Failed to get email content: ${error.message}`);
        }
    }
}

export default new GmailPage();