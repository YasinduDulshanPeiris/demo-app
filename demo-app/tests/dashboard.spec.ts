import { test, expect } from '@playwright/test';

test('Dashboard interactions', async ({ page }) => {
  await page.goto('http://localhost:3000');

  // Test borrower selection
  await page.click('text=Sarah Dunn');
  await expect(page.locator('text=Sarah Dunn').first()).toBeVisible();
  await expect(page.locator('text=sarah.dunn@example.com')).toBeVisible();

  // Test accordion
  await page.click('text=Income Inconsistent with Bank statements');
  await expect(page.locator('text=Additional details about the issue.')).toBeVisible();

  // Test button clicks
  await page.click('text=Request Documents');
  await page.click('text=Send to Valuer');
  await page.click('text=Approve');
  await page.click('text=Escalate to Credit Committee');
});