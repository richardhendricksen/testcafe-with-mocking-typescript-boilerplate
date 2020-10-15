import { Selector, t } from 'testcafe';
import { waitForAngular } from 'testcafe-angular-selectors';

import { config } from '@config';

export class OverviewPage {

    static $ = new class {
        welcomeText = Selector('body');
        menu = Selector('');
    };

    static async open(product: string): Promise<void> {
        await t.navigateTo(`${config.baseUrl}/overview`);
        await waitForAngular();
        // await this.$.welcomeText.with({visibilityCheck: true})();
    }
}