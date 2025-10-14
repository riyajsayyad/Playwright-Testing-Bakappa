import { test, expect } from '@playwright/test';

test('Capture Screenshot in Playwright', async ({ page }) => {

    // Go to the page
    await page.goto('https://demowebshop.tricentis.com/');

    // Capture element screenshot
    await page.locator("[class='header-logo']").screenshot({ path: './screenshots/ElementScreenshot.png' });
    await page.locator("#nivo-slider").screenshot({ path: './screenshots/ElementScreenshot1.png' });

    // Capture the currunt page screenshot
    await page.screenshot({ path: './screenshots/PageScreenshot.png' });

    // Capture the Full page screenshot --> need to add one extra parameter
    await page.screenshot({ path: './screenshots/FullPageScreenshot.png', fullPage: true });

})