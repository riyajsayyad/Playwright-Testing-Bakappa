import { test, expect } from '@playwright/test';


test.beforeAll(async () => {
    console.log(`Runnig before all test`);
})

test.beforeEach(async ({ page }) => {
    console.log(`Runnig before Each test`);
    await page.goto('https://demowebshop.tricentis.com/');
})

test.afterAll(async () => {
    console.log(`Runnig After Each test`);
})

test.afterAll(async () => {
    console.log(`Runnig after all test`);
})

// write test case
test('Test 1', async ({ page }) => {

    console.log("Executing test 1");
    // launch the browser and open a new google page
    // await page.goto('https://demowebshop.tricentis.com/');

    // Validate the web page title
    await expect(page).toHaveTitle('Demo Web Shop');
    await page.locator(".ico-login").click();
    const loginButton = await page.locator("[value='Log in']");
    await expect(loginButton).toBeVisible();

})

// write test case
test('Test 2', async ({ page }) => {
    console.log("Executing test 2");
    // launch the browser and open a new google page
    // await page.goto('https://demowebshop.tricentis.com/');

    // Validate the web page title
    await expect(page).toHaveTitle('Demo Web Shop');
    await page.locator(".ico-login").click();
    const loginButton = await page.locator("[value='Log in']");
    await expect(loginButton).toBeVisible();

})