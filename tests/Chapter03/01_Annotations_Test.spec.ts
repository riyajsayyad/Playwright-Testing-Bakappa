// import the playwright module
import { test, expect } from '@playwright/test';
import { CLIENT_RENEG_LIMIT } from 'tls';

// write test case
test('Test 1', async ({ page }) => {
    console.log("Test Started")
    // launch the browser and open a new google page
    await page.goto('https://demowebshop.tricentis.com/');

    // Validate the web page title
    await expect(page).toHaveTitle('Demo Web Shop');

    console.log("Test Ended")
    await page.close();

})

// 1. Skip --> To skip the test for execution.
test.skip('Test 2', async ({ page }) => {
    console.log("Test Started")
    // launch the browser and open a new google page
    await page.goto('https://demowebshop.tricentis.com/');

    // Validate the web page title
    await expect(page).toHaveTitle('Demo Web Shop');

    console.log("Test Ended")
    await page.close();
})

// 2. only --> it will run only one test in suit 
test.only('Test 3', async ({ page }) => {
    console.log("Test Started")
    // launch the browser and open a new google page
    await page.goto('https://demowebshop.tricentis.com/');

    // Validate the web page title
    await expect(page).toHaveTitle('Demo Web Shop');

    console.log("Test Ended")
    await page.close();
})
