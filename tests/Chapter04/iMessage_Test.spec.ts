// import the playwright module
import { test, expect } from '@playwright/test';

// write test case
test('Alert Popups in Playwright', async ({ page }) => {
    console.log("Test Started")
    // launch the browser and open a new google page
    await page.goto('https://qaapp.sausalitolabs.com/ ');


    const email = page.getByRole('textbox', { name: 'Enter your email' });
    await email.fill('Vijayofficealoha@gmail.com')
    const pass = page.getByRole('textbox', { name: 'Enter your password' });
    await pass.fill('Aloha@2025')
    await page.getByRole('button', { name: 'Login' }).click();
})