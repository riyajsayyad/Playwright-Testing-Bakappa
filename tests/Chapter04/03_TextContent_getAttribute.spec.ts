import { expect, test } from '@playwright/test'

test('Get Text and Get Attributes values in Playwright', async ({ page }) => {
    await page.goto('https://github.com/riyajsayyad');


    //Working same
    const name = await page.locator('[itemprop="name"]').innerText();
    //const name1 = await page.locator('[itemprop="name"]').textContent();
    const finalname = name?.trim();
    console.log(`Name is : ${finalname}`);

    expect(finalname).toBe("Riyaj Sayyad");


    // Getting the attribye value
    const attributevalues = await page.locator('[id="repositories-tab"]').getAttribute('data-selected-links');
    console.log(`Attribute value is : ${attributevalues}`);
})