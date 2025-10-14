import { test, expect } from '@playwright/test';

test('Handling iFrames, Drag and Drop elements', async ({ page }) => {

    page.goto('https://jqueryui.com/droppable/');

    //Switch into iframe
    const iFrame = page.frameLocator('[class="demo-frame"]');
    // Drag Element, Drop Element
    const dragElement = iFrame.locator('[id="draggable"]');
    const dropElement = iFrame.locator('[id="droppable"]');

    await dragElement.dragTo(dropElement);
})