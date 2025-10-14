import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  await test.step('Navigate to GitHub', async () => {
    await page.goto('https://github.com/');
    await page.getByRole('link', { name: 'Sign in' }).click();
  });

  await test.step('Enter username and password', async () => {
    await page.getByRole('textbox', { name: 'Username or email address' }).click();
    await page.getByRole('textbox', { name: 'Username or email address' }).fill('Test');
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill('tets123');
  });

  await test.step('Click on sign in button', async () => {

    await page.getByRole('button', { name: 'Sign in', exact: true }).click();
  });
  await test.step('Validate the mesg', async () => {

    await expect(page.getByRole('alert')).toContainText('test Incorrect username or password.');
  });

});