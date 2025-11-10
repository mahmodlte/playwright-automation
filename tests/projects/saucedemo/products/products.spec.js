import { test, expect } from "@playwright/test";
import { log } from "console";

test("Check that the produts are visible", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");
  await page.getByPlaceholder("Username").fill("standard_user");
  await page.getByPlaceholder("Password").fill("secret_sauce");
  await page.getByRole("button", { name: "Login" }).click();
  const products = await page.locator(".inventory_item_description");
  expect(products).toHaveCount(6);
});

test("Add Item to cart and check if it's added ", async ({ page }) => {
  await page.goto("https://saucedemo.com/");
  await page.getByPlaceholder("Username").fill("standard_user");
  await page.getByPlaceholder("Password").fill("secret_sauce");
  await page.getByRole("button", { name: "Login" }).click();
  await page.getByRole("button", { name: "Add to cart" }).nth(0).click();
  await page.locator(".shopping_cart_link").click();
  await expect(page.locator(".cart_item")).toHaveCount(1);
});
