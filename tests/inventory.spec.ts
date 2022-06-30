import { test } from "@playwright/test";

import { LoginPage } from "../pages/login/login-page";
import { InventoryPage } from "../pages/inventory/inventory-page";

let loginPage: LoginPage;
let inventoryPage: InventoryPage;

test.beforeEach(async ({ page }) => {
  loginPage = new LoginPage(page);
  inventoryPage = new InventoryPage(page);
});

test.beforeEach(async ({ page }) => {
  await loginPage.go()
  await loginPage.sigIn("standard_user", "secret_sauce");
});

test("should access the inventory page", async ({ page }) => {
  await inventoryPage.go();
});
