import { Selector, t } from 'testcafe';

class GmailPage {
    constructor() {
        // Login selectors
        this.emailInput = Selector('input#identifierId');
        this.nextButton = Selector('div#identifierNext > div > button > span');
        this.passwordInput = Selector('div#password > div > div > div > input');
        this.passwordNextButton = Selector('div#passwordNext > div > button > span');
        
        // Tab selectors - updated for better precision
        this.primaryTab = Selector('div#:1v');
        this.socialTab = Selector('div#:1x');
        this.promotionsTab = Selector('div#:1w');
        this.allTabs = Selector('div#:1 > div > div > div:nth-of-type(5) > table > tbody > tr');  // Selector for all tabs
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
                
        } catch (error) {
            throw new Error(`Login failed: ${error.message}`);
        }
    }
    async getTabCount() {
        try {
            // Wait for tabs to be visible
            await t.expect(this.allTabs.exists).ok({ timeout: 10000 });
            
            // Get count of tabs
            const count = await this.allTabs.count;
            
            // Log the count for verification
            console.log(`Found ${count} tabs`);
            
            // Return the count
            return count;
        } catch (error) {
            throw new Error(`Failed to get tab count: ${error.message}`);
        }
    }

    async getTabTexts() {
        try {
            const count = await this.getTabCount();
            const texts = [];
            
            // Get text from each tab
            for (let i = 0; i < count; i++) {
                const tabText = await this.allTabs.nth(i).innerText;
                texts.push(tabText.trim());
                console.log(`Tab ${i + 1}: ${tabText.trim()}`);
            }
            
            return texts;
        } catch (error) {
            throw new Error(`Failed to get tab texts: ${error.message}`);
        }
    }
}

export default new GmailPage();