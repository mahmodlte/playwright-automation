import { test, expect } from "@playwright/test";
test("Hover test", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/");
  await page.getByRole("link", { name: "Hovers" }).click();
  await page.hover(".figure");
  await expect(page.getByRole("heading", { name: "name" })).toBeVisible();
});
