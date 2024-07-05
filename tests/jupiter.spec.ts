import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:5173');
});


test('> 0', async ({ page }) => {
    await page.locator('#lune').fill("-1");
    await expect(page.locator('#lune')).toHaveValue("1");
});
test('< 3', async ({ page }) => {
    await page.locator('#lune').fill("3");
    await expect(page.locator('#lune')).toHaveValue("1");
});
test('no input => no btn', async ({ page }) => {
    await page.locator('#lune').fill("");
    await expect(page.locator('#lune')).toHaveValue("2");
    await expect(page.locator('#btn_show')).toBeVisible();
});
test('btn clicked => text', async ({ page }) => {
    await page.locator('#btn_show').click();
    await expect(page.locator('.heure_value')).toBeVisible();
});
