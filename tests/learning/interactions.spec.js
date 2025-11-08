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

test("Checking and unchacking the checkboxes", async ({ page }) => {
  // Navigate to the website

  await page.goto("https://the-internet.herokuapp.com/");

  await page.getByRole("link", { name: "Checkboxes" }).click();

  const checkboxes = await page.getByRole("checkbox");

  await expect(checkboxes).toHaveCount(2);

  await checkboxes.nth(0).check();
  await expect(checkboxes.nth(0)).toBeChecked();

  await checkboxes.nth(1).uncheck();
  await expect(checkboxes.nth(1)).not.toBeChecked();
});

test("Selecting from an options menu", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/");
  await page.getByRole("link", { name: "Dropdown" }).click();
  await page.selectOption("select#dropdown", "Option 1");
  const option1 = await page.locator("select#dropdown").inputValue();
  expect(option1).toBe("1");
  await page.selectOption("select#dropdown", "Option 2");
  const option2 = await page.locator("select#dropdown").inputValue();
  expect(option2).toBe("2");
});
