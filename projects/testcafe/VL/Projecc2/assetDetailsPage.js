import {Selector, t} from 'testcafe';

export default class AssetDetailsPage {
    constructor() {
        this.selectChip = Selector('span.subscriptionChip');
        this.cancelBtn = Selector('div.cc-modal-footer button.cc-btn').nth(0);
        this.moreDrawer = Selector('span.moreLabel');
        this.moreDrawerChip = Selector('div.asset-sub-label span.subscriptionChip');
    }

async verifiedSubscriptionChip() {
        await t.wait(8000);
        await t.click(this.selectChip);
        await t.expect(this.cancelBtn.visible).ok({timeout: 10000});
        await t.hover(this.cancelBtn).click(this.cancelBtn);
        await t.click(this.moreDrawer);
        await t.click(this.moreDrawerChip);
        await t.expect(this.cancelBtn.visible).ok({timeout: 10000});
        await t.hover(this.cancelBtn).click(this.cancelBtn);          
    }
}
