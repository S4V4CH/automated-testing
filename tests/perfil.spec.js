import { test, expect } from '@playwright/test';

test('A. Flujo de Compra Completa en JPetStore', async ({ page }) => {
  test.setTimeout(60000); 

  await page.goto('https://jpetstore.aspectran.com/');

  await page.getByText('Sign In').click();
  await page.fill('input[name="username"]', 'j2ee');
  await page.fill('input[name="password"]', 'j2ee');
  await page.click('input[name="signon"]');

  await page.click('text=My Account');


  await page.fill('input[name="account.firstName"]', 'Savach');
  await page.getByRole('button', { name: 'Save Account Information' }).waitFor();
  await page.getByRole('button', { name: 'Save Account Information' }).click();

  const successMessageLocator = page.locator('.alert p');
  await successMessageLocator.waitFor({ state: 'visible', timeout: 10000 });
  await expect(successMessageLocator).toContainText('Your account has been updated.');
});
