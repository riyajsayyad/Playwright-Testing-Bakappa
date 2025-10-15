// import the playwright module
import { test, expect } from '@playwright/test';

// write test case
test('Validating the page title', async ({ page }) => {
    console.log("Test Started")
    // launch the browser and open a new google page
    await page.goto('https://demowebshop.tricentis.com/');

    // Validate the web page title
    await expect(page).toHaveTitle('Demo Web Shop');

    await page.locator('[class="ico-login"]').click();
    await page.locator('.email').fill('admin01@gmail.com');
    await page.locator('.password').fill('admin01');
    await page.locator('[value="Log in"]').click();
    await page.locator('.ico-logoutt').click();
    await page.close();

    console.log("Test Ended");

})