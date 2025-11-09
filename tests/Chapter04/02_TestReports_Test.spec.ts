// import the playwright module
import { test, expect } from '@playwright/test';

// write test case
test('Alert Popups in Playwright', async ({ page }) => {
    console.log("Test Started")
    // launch the browser and open a new google page
    await page.goto('https://www.selenium.dev/documentation/webdriver/interactions/alerts/');

    // if we want to see that popup we need to use page.once method
    // alert, popup it is auto dismiss if we want to work with the alert, popups, dialog so we need to create a function
    // need to use page.once method along with toe para 1. event name , 2. event listeners
    page.once('dialog', dialog => {
        console.log(`popup type is : ${dialog.type()}`)
        // Click the ok button
        dialog.accept();

        //Print the popup text
        console.log(`Alert popup is : ${dialog.message()}`);
    })

    await page.getByText('See an example alert', { exact: true }).click();


})

test('Confirm Popup in Playwright', async ({ page }) => {
    console.log("Test Started")
    // launch the browser and open a new google page
    await page.goto('https://www.selenium.dev/documentation/webdriver/interactions/alerts/');

    page.once('dialog', dialog => {
        console.log(`popup type is : ${dialog.type()}`)
        // Click the ok button
        dialog.accept();
        //Print the popup text
        //console.log(`Alert popup is : ${dialog.message()}`);
    })

    await page.getByText('See a sample confirm', { exact: true }).click();
})

test('Prompt Popup in Playwright', async ({ page }) => {
    console.log("Test Started")
    // launch the browser and open a new google page
    await page.goto('https://www.selenium.dev/documentation/webdriver/interactions/alerts/');


    // Here we need create a async function and use the promt
    page.once('dialog', async (dialog) => {
        console.log(`popup type is : ${dialog.type()}`)
        console.log(`Alert popup is : ${dialog.message()}`);
        await dialog.accept('Hello Playwright');
    })

    await page.getByText('See a sample prompt', { exact: true }).click();
})

test('Confirmm Popup in Playwright', async ({ page }) => {
    console.log("Test Started")
    // launch the browser and open a new google page
    await page.goto('https://www.selenium.dev/documentation/webdriver/interactions/alerts/');

    page.once('dialog', dialog => {
        console.log(`popup type is : ${dialog.type()}`)
        // Click the ok button
        dialog.accept();
        //Print the popup text
        //console.log(`Alert popup is : ${dialog.message()}`);
    })

    await page.getByText('See a sammple confirm', { exact: true }).click();
})