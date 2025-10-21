// import the playwright module
import { test, expect } from '@playwright/test';

// write test case
test('Timeout in Playwright', async ({ page }) => {

    console.log("Test Started")

    await page.goto('https://github.com/login');

    await expect(page).toHaveScreenshot('GitHubLoginPage.png');

    await page.locator('#login_field').fill('riyajsayyad');
    await page.locator('#password').fill('pass@1234');

    await expect(page).toHaveScreenshot('GitHubLoginPage.png');

    console.log("Test Ended");
    console.log("Added new main branch line");
    console.log("Added on feature1 branch");

})