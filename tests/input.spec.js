import { test, expect } from "@playwright/test";

test("Test input", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/");
  await page.getByText("Inputs").click();
  await page.fill('input[type="number"]', "12345");
  const value = await page.inputValue('input[type="number"]');
  expect(value).toBe("12345");
});
