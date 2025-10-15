// Import playwright module
import { test, expect } from '@playwright/test';

const searchKeywords = ['test@qabrains.com', 'practice@qabrains.com', 'student@qabrains.com'];

for (const searchKeyword of searchKeywords) {

    test(`Parameterize Tests in Playwright ${searchKeyword}`, async ({ page }) => {
        // Go to URL
        await page.goto('https://practice.qabrains.com/ecommerce/login');

        // Search with keywords
        await page.locator('#email').fill(searchKeyword);
        await page.locator('#password').fill('Password123');
        await page.locator('[type="submit"]').click();


        await expect(page.getByRole('heading', { name: 'Products' })).toBeVisible();
        await expect(page.getByText('Order by')).toBeVisible();

        await page.locator('[class="caret font-bold"]').click();
        await page.getByRole('button', { name: 'Log out' }).click();
        await page.getByRole('button', { name: 'Logout' }).click();


    });
}