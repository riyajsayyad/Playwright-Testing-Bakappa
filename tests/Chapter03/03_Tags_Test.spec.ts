// import the playwright module
import { test, expect } from '@playwright/test';



// To run this code for functionality wise
// cmd --> npx playwright test --grep '@SmokeTesting'


test('Test 1', { tag: ['@SmokeTesting'] }, async ({ page }) => {
    console.log("Test Started")
    // launch the browser and open a new google page
    await page.goto('https://demowebshop.tricentis.com/');

    // Validate the web page 
    await expect(page).toHaveTitle('Demo Web Shop');

    console.log("Test Ended")
    await page.close();
})

test('Test 2', { tag: ['@SmokeTesting', '@RegressionTesting'] }, async ({ page }) => {
    console.log("Test Started")
    // launch the browser and open a new google page
    await page.goto('https://demowebshop.tricentis.com/');

    // Validate the web page title
    await expect(page).toHaveTitle('Demo Web Shop');

    console.log("Test Ended")
    await page.close();
})

test('Test 3', { tag: ['@RegressionTesting'] }, async ({ page }) => {
    console.log("Test Started")
    // launch the browser and open a new google page
    await page.goto('https://demowebshop.tricentis.com/');

    // Validate the web page title
    await expect(page).toHaveTitle('Demo Web Shop');

    console.log("Test Ended")
    await page.close();
})