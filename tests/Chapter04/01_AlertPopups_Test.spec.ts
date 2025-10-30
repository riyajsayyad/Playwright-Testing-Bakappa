// import the playwright module
import { test, expect } from '@playwright/test';

// write test case
test('Alert Popups in Playwright', async ({ page }) => {
    console.log("Test Started")
    // launch the browser and open a new google page
    await page.goto('https://www.selenium.dev/documentation/webdriver/interactions/alerts/');

    await page.getByText('See an example alert', { exact: true }).click();

    console.log("Added new file on feature1");

    console.log("Pushed new code");

})