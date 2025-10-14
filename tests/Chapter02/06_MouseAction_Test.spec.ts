import { test, expect } from '@playwright/test';

test('Performing the Mouse Actions', async ({ page }) => {

    await page.goto('https://search.brave.com/search?q=Heeriye');

    // Left button click
    // await page.getByRole('link', { name: 'Heeriye (feat. Arijit Singh) - YouTube' }).first().click({ button: 'left' });

    // Middle button click
    // await page.getByRole('link', { name: 'Heeriye (feat. Arijit Singh) - YouTube' }).first().click({ button: 'middle' });

    // Left button click
    // await page.getByRole('link', { name: 'Heeriye (feat. Arijit Singh) - YouTube' }).first().click({ button: 'right' });

    await page.getByLabel('Search').first().hover();
})