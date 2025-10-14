import { test, expect } from '@playwright/test';

test("Handling Dropdown List in Playwright", async ({ page }) => {

    await page.goto("https://www.facebook.com/");
    await page.getByRole("button", { name: 'Create new account' }).click();

    // Select dropdown using value
    await page.getByLabel('Month').selectOption('8');

    // Select dropdown using visibal text
    await page.getByLabel('Month').selectOption('Mar');

    // validate all the options
    await expect(page.locator('#month > option')).toHaveText(['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']);

})