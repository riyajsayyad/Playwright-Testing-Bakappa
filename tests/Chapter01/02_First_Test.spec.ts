// import the playwright module
import { test, expect } from '@playwright/test';
import { CLIENT_RENEG_LIMIT } from 'tls';

// write test case
test('Validating the page title', async ({ page }) => {
    // launch the browser and open a new google page
    await page.goto('https://demowebshop.tricentis.com/');

    // Validate the web page title
    await expect(page).toHaveTitle('Demo Web Shop');

    console.log("Test Ended")

})
