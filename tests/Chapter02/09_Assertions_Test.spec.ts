import { test, expect } from '@playwright/test';

test('Assertions in Playwright', async ({ page }) => {
    await page.goto('https://demowebshop.tricentis.com/');


    // Visible, editable, enabled, empty
    await expect(page.locator('[id="small-searchterms"]')).toBeVisible();
    await expect(page.locator('[value="Search"]')).toBeEditable();

})