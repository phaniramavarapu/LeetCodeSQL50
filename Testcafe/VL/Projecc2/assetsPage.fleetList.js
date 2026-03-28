import {Selector, t} from "testcafe";
export default class AssetsPage {
    constructor() {
        this.searchbox = Selector ('.assets-search-field.cc-table-pag-header-left input');
        this.sideNavText = Selector('.div.navitem span.nav-text');
        this.assetSelect = Selector('span.search_item_highlight-text');

    }

    async verifiedSideNavText(expected) {
        const getCount = await Selector('div.navitem span.nav-text').count;
        console.log("Count: " + getCount);

        for (let i = 0; i < getCount; i++) {
            let sideSection = await this.sideNavText.nth(i).innerText;
            await t.expect(expected[i]).eql(sideSection);
            console.log(sideSection);
            }
        }

    async searchAsset(assetInfo) {
        await t
            .typeText(this.searchbox, assetInfo)
            .click(this.assetSelect);
    }
}
