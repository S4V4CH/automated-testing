import { test, expect } from '@playwright/test';

test('A. Flujo de Compra Completa en JPetStore', async ({ page }) => {
    await page.goto('https://jpetstore.aspectran.com/');
    await page.getByText('Sign In').click();
    await page.locator('#username').fill('j2ee');
    await page.locator('#password').fill('j2ee');
    await page.getByRole('button', { name: 'Login' }).click();
    await page.locator('#SidebarContent').getByRole('link', { name: 'Cats' }).click();
    await page.getByRole('link', { name: 'FL-DLH-02' }).click();
    await page.getByRole('link', { name: 'EST-16' }).click();
    await page.getByRole('link', { name: 'Add to Cart' }).click();
    await page.getByRole('link', { name: 'Proceed to Checkout' }).click();
    await page.selectOption('select[name="cardType"]', { label: 'Visa' });
    await page.locator('input[name="creditCard"]').fill('1234567891011');
    await page.locator('input[name="expiryDate"]').fill('5/13/2008');
    await page.locator('input[name="billToFirstName"]').fill('Santiago');
    await page.locator('input[name="billToLastName"]').fill('Chavarria');
    await page.locator('input[name="billAddress1"]').fill('carrera 23# 26-21');
    await page.locator('input[name="billCity"]').fill('Medellin');
    await page.locator('input[name="billState"]').fill('Antioquia');
    await page.locator('input[name="billZip"]').fill('123456');
    await page.locator('input[name="billCountry"]').fill('Colombia');
    await page.getByRole('button', { name: 'Continue' }).click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    const successMessageLocator = page.locator('.alert p');
    await expect(successMessageLocator).toContainText('Thank you, your order has been submitted.');
});