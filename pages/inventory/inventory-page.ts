import { Page, expect } from "@playwright/test";

export class InventoryPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async go() {
    await this.page.goto("https://www.saucedemo.com/inventory.html");
    const title = this.page.locator(".title");
    await expect(title).toHaveText("Products");
  }
}
