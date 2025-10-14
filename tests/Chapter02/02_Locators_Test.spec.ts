import { test, expect } from '@playwright/test';

test('Locators in Playwright', async ({ page }) => {

    await page.goto('https://github.com/riyajsayyad');

    //getByRole
    // await page.getByRole('link', { name: 'Sign In' }).click();

    // getByLabel --> aria-label="Homepage"
    // await page.getByLabel('Homepage', { exact: true }).first().click();

    //getByAltText
    // await page.getByAltText("View riyajsayyad's full-sized avatar").click();

    //getByTestId --> need setup in config file - testIdAttribute: 'data-tab-item', >> data-tab-item="overview"
    //Wen we need to use the custome attribute at that time we can use this locator
    // await page.getByTestId("projects").first().click();

    //getByText
    await page.getByText("Sign Up").first().click();

    // getByPlaceholder
    await page.getByPlaceholder("Email").fill("Hey Riyaz...");

    //Xpath
    await page.locator("//input[@name='user[password]']").fill("Hello Sayyad...");

    //CSSselector
    await page.locator('input[name="user[login]"]').fill("Ok bossss...")

})