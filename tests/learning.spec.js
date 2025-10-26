import { test, expect } from "@playwright/test";

test("Test Playwright.dev website", async ({ page }) => {
  await page.goto("https://playwright.dev/");
  await expect(page).toHaveTitle(/Playwright/);
});

test("Portfolio has title", async ({ page }) => {
  await page.goto("https://mah-codes.vercel.app/");
  await expect(page).toHaveTitle(/Mahmoud Mansour/);
});
