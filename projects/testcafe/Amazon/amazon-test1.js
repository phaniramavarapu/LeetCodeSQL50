import { Selector } from 'testcafe';

fixture `Amazon Search Test`
    .page `https://www.amazon.in`;

test('Search for a product', async t => {
    // Define the search box using ID selector
    const searchBox = Selector(`#twotabsearchtextbox`);
    const ramFilter = Selector(`span.a-size-base.a-color-base`).withText('4 to 5.9 GB');
    const addToCartButton = Selector(`#a-autoid-1-announce`);

    await t
        // Wait for the element to be visible
        .expect(searchBox.exists).ok()
        // Type text into the search box
        .typeText(searchBox, 'mobile phone')
        // Press enter to submit the search
        .pressKey('enter');

        //wait for filters to load
        await t.wait(3000);

        //click on the RAM filter
        await t.click(ramFilter);

        await t.wait(1000);
//        t.debug();
        //click on the first product
        await t.click(addToCartButton);
        await t.wait(2000);


});