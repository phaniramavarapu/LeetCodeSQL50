import AssetDetailsPage from "./assetDetailsPage";
import AssetsPage from "./assetsPage.fleetList";
import LoginPage from "./loginPage";

const loginPage = new LoginPage();
const assetsPageComponent = new AssetsPage();
const assetDetailsPage = new AssetDetailsPage();

fixture `Login tests`
    .page`https://int-vl.cat.com/assets`;

test('testCafe Action', async t => {
    let username = 'vltrailblazers@gmail.com';
    let password = 'Password@410';
    await loginPage.login(t, username, password);
    await t.setNativeDialogHandler(() => true);
    await t.debug();

    const expected = ['Home', 'Needs Review', 'Assets', 'Map', 'Tasks', 'Service', 'Service Requests', 'Health', 'Fault Codes'];
    await assetsPageComponent.verifiedSideNavText(expected);
    let assetInfo = 'DDT00615';
    await assetsPageComponent.searchAsset(assetInfo);
    await assetDetailsPage.verifiedSubscriptionChip();
})