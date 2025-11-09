import { test, chromium } from '@playwright/test';

test('Iterating matching element in Playright', async ({ page }) => {

    // const browser = await chromium.launch({ headless: false });
    // const page = await browser.newPage();
    await page.goto('https://github.com/riyajsayyad');

    // it will identify the any single element
    //await page.locator('.repo');

    // it will identify the multiple element
    const repoLinks = await page.$$('.repo');

    for (const repoLink of repoLinks) {
        const text = await repoLink.textContent();
        const finalText = await text?.trim();
        console.log(`Text from for of loop : ${finalText}`);
    }

    console.log(`-------------------------------`);

    for (let i = 0; i < repoLinks.length; i++) {
        const text = await repoLinks[i].textContent();
        const finalText = await text?.trim();
        console.log(`Text from for loop : ${finalText}`);
    }


    console.log(`-------------------------------`);

    // it will identify the single elemet by using nth method
    const repoLinks2 = await page.locator('.repo');
    const cnt = await repoLinks2.count();
    console.log(cnt);
    for (let index = 0; index < cnt; index++) {
        const text = await repoLinks2.nth(index).textContent();
        const finaltext = text?.trim();
        console.log(`Text from for loop using nth method : ${finaltext}`);
    }

})