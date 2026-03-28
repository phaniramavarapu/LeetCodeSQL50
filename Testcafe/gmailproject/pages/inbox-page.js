import { Selector } from 'testcafe';

/* export default class InboxPage {
    constructor() {
        this.primaryTab = Selector('div#:1v');
        this.socialTab = Selector('div#:1x');
        this.promotionsTab = Selector('div#:1w');
    }

    async countTabs(t) {
        const primaryCount = await this.primaryTab.count;
        const socialCount = await this.socialTab.count;
        const promotionsCount = await this.promotionsTab.count;
        
        return { primaryCount, socialCount, promotionsCount };
    }
} */



    export default class InboxPage {
        constructor() {
            this.primaryTab = Selector('div#:1v');
            this.emailList = Selector('tr#:2a');
        }
    
        async getEmailCount(t) {
            return await this.emailList.count;
        }
    }
    
