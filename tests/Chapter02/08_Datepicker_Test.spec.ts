import { test, expect } from '@playwright/test';
import { serialize } from 'v8';

test('Date Picker in Playwright', async ({ page }) => {

    await page.goto('https://jqueryui.com/datepicker/');

    // Hardcoded date
    const iframe = page.frameLocator('[class="demo-frame"]');
    // await iframe.locator('[id="datepicker"]').fill('10/11/2025');

    // Selecting dynaming date
    // await iframe.locator('[id="datepicker"]').click();
    // await iframe.locator('.ui-datepicker-today').click();

    // Selecting Previous date
    // await iframe.locator('[id="datepicker"]').click();
    // await iframe.locator('[title="Prev"]').click();

    // Selecting 10 months prev using loop
    // for (let i = 0; i < 10; i++) {
    //     await iframe.locator('[title="Prev"]').click();
    //     await page.waitForTimeout(1000);
    // }
    // await iframe.locator('text=14').click();

    await iframe.locator('[id="datepicker"]').click();
    for (let i = 0; i < 10; i++) {
        await iframe.locator('[title="Next"]').click();
        await page.waitForTimeout(1000);
    }
    await iframe.locator('text=01').click();

})