import { Selector, t } from 'testcafe';
class GmailPage {
    constructor() {

        const inboxContainer = Selector('div#:3z > div > div:nth-of-type(2) > span > a')
   // Based on unique classes

        //Tab selectors
        this.primaryTab = Selector('[data-tooltip="Person-to-person conversations and messages that don\'t appear in other tabs."]');
        this.socialTab = Selector('[id=":2r"][class="aAy aKe-aLe J-KU-KO"]');
        this.promotionsTab = Selector('[id=":2r"][class="aAy aKe-aLe"]');
        this.tabList = Selector('[role="tablist"][class="aAA J-KU-Jg J-KU-Jg-K9"]').find('[role="tab"]');

        //Mail selectors
        this.mailCount = Selector('.bsU');
        this.firstEmail = Selector('tr[role="gridcell"][class="yX xY"]').nth(0);
        this.emailHeader = Selector('[data-message-id]').find('.ha h2');
        this.emailBody = Selector('.a3s.aiL');
    }

    async waitForLogin() {
        try {
            await t
                .expect(this.inboxContainer.exists).ok({timeout: 60000})
                .expect(this.inboxContainer.visible).ok({timeout: 60000});

            console.log('Logged in successfully');

        } catch (error) {
            throw new Error('Login timeout: please complete manual login within 60 seconds');
        }
    }

    
    async getTabCount() {
        try{
            return await this.tabList.count;
        } catch(error) {
            throw new Error('Failed to get tab count: ' + error);
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
            return await this.mailCount.innerText;
        } catch (error) {
            throw new Error(`Failed to get unread mail count: ${error.message}`);
        }
    }

    async openFirstEmail() {
        try {
            await t.click(this.firstEmail);
        } catch (error) {
            throw new Error(`Failed to open first email: ${error.message}`);
        }
    }

    async getEmailContent() {
        try {
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