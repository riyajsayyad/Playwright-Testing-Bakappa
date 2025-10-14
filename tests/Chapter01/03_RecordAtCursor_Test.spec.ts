// import the playwright module
import { test, expect } from '@playwright/test';

test('Record at Cursor Test', async ({ page }) => {
    // launch the browser and open a new google page
    await page.goto('https://demowebshop.tricentis.com/');

    // Validate the web page title
    await expect(page).toHaveTitle('Demo Web Shop');

    // Add extra specific validation or test steps using record cursor test
    await expect(page.getByRole('link', { name: 'Register' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Log in' })).toBeVisible();
    await page.getByRole('link', { name: 'Log in' }).click();
    await page.getByRole('textbox', { name: 'Email:' }).fill('Admin01@gmail.com');
    await page.getByRole('textbox', { name: 'Password:' }).fill('aadmin01');
    await page.getByRole('checkbox', { name: 'Remember me?' }).check();
    await page.getByRole('button', { name: 'Log in' }).click();

    await expect(page.getByRole('link', { name: 'admin01@gmail.com' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Log out' })).toBeVisible();
})
