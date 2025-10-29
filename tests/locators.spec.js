import { test, expect } from "@playwright/test";

test("Auth Test", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/");
  await page.getByRole("link", { name: "Form Authentication" }).click();
  await page.fill("#username", "tomsmith");
  await page.fill("#password", "SuperSecretPassword!");
  await page.click('button[type="submit"]');
  await expect(page.locator(".flash")).toContainText("You logged into");
  console.log("Test Passed");
});
