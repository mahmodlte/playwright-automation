import { test, expect } from "@playwright/test";

test("Navigate through links", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/");

  await page.getByRole("link", { name: "A/B Testing" }).click();

  await expect(page.getByText("A/B")).toBeVisible();
});

test("Adding elements to the website", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/");

  await page.getByRole("link", { name: "Add/Remove Elements" }).click();

  await page.getByRole("button", { name: "Add Element" }).click();
  await expect(page.getByRole("button", { name: "Delete" })).toBeVisible();
});
