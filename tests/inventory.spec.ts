import { test } from "@playwright/test";

import { InventoryPage } from "../pages/inventory/inventory-page";

test("should access the inventory page", async ({ browser }) => {
  const context = await browser.newContext({ storageState: "auth.json" });
  const page = await context.newPage();
  const inventoryPage = new InventoryPage(page);
  
  await inventoryPage.go();
});
