// @ts-check
import { test, expect } from "@playwright/test";

test("Test 1 - Google Title", async ({ page }) => {
  await page.goto("https://www.google.com/");
  await page.waitForTimeout(2000);
  const title = await page.title();
  console.log("The title is ", title);
  await expect(page).toHaveTitle("Google");
  console.log("Test 1 Passed");
});
test("Navigate to Wikipedia", async ({ page }) => {
  await page.goto("https://www.wikipedia.org");
  await page.click("text=English");
  await expect(page).toHaveURL(/en.wikipedia.org/);
  console.log("Test 2 Passed");
});
test("Test 3 Search Wikipedia", async ({ page }) => {
  await page.goto("https://www.wikipedia.org");
  await page.fill('input[name="search"]', "Playwright");
  await page.click('button[type="submit"]');
  await page.waitForLoadState("networkidle");
  await expect(page.locator("h1")).toContainText("Playwright");
  console.log("Test 3 passed");
});
