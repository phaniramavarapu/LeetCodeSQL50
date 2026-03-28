import { Selector } from 'testcafe';

fixture `Amazon Search for phone and Add to Cart`
    .page `https://www.amazon.in/`;

test ('', async t => {});

/* test('Search for mobile phone, filter by RAM, and add to cart', async t => {
    // Elements
    const searchBox = Selector(input[id='twotabsearchtextbox']);
    const searchButton = Selector(input[id='nav-search-submit-button']);
    const filterSection = Selector('span').withText('RAM');
    const ramOption = Selector('li').withText('4 GB'); // Modify based on actual RAM option available
    const firstItem = Selector('.s-main-slot .s-result-item').nth(0);
    const addToCartButton = Selector('#add-to-cart-button');
    const cartIcon = Selector('#nav-cart');

    // Search for "mobile phone"
    await t
        .typeText(searchBox, 'mobile phone')
        .click(searchButton);

    // Filter by RAM
    await t
        .scrollIntoView(filterSection)
        .click(filterSection)
        .click(ramOption);

    // Select the first item in the list
    await t
        .click(firstItem.find('h2 a')); // Adjust if the structure of the search results changes

    // Add the item to the cart
    await t
        .click(addToCartButton);

    // Open the cart page
    await t
        .click(cartIcon);
}); */