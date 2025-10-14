import { test, expect } from '@playwright/test';
import { serialize } from 'v8';

test('Performing the KeyBoard Actions', async ({ page }) => {

    await page.goto('https://demowebshop.tricentis.com/');

    const search = page.locator('[value="Search store"]');

    await search.fill('Hello Demo User');
    await page.keyboard.press('Meta+A');
    await page.keyboard.press('Delete');

})