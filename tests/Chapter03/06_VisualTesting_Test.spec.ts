// import the playwright module
import { test, expect } from '@playwright/test';

// write test case
test('Visual Comparison in Playwright', async ({ page }) => {

    console.log("Test Started")

    await page.goto('https://github.com/login');

    await expect(page).toHaveScreenshot('GitHubLoginPage.png');

    await page.locator('#login_field').fill('riyajsayyad');
    await page.locator('#password').fill('pass@1234');

    await expect(page).toHaveScreenshot('GitHubLoginPage.png');

    console.log("Test Ended");

})

// write test case
test('Element Visual Comparison in Playwright', async ({ page }) => {

    console.log("Test Started")

    await page.goto('https://github.com/login');

    const form = page.locator('[action="/session"]');
    await page.locator('#login_field').fill('riyajsayyad');

    await expect(form).toHaveScreenshot('GitHubLoginForm.png');

    console.log("Test Ended Here");

})