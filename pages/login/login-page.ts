import { Page, expect } from '@playwright/test'

export class LoginPage {
    readonly page: Page

    constructor(page: Page) {
        this.page = page
    }

    async go() {
        await this.page.goto('https://www.saucedemo.com');
        const title = this.page.locator('h4')
        await expect(title.first()).toContainText('Accepted usernames are:')
    }

    async sigIn(user: string, password: string) {
        await this.page.fill('#user-name', user)
        await this.page.fill('#password', password)
        await this.page.click('#login-button')
    }

    async userLoggedIn() {
        const title = this.page.locator('.title')
        await expect(title).toHaveText('Products')
    }
    
    async userNotLoggedIn() {
        const title = this.page.locator('.error-message-container')
        await expect(title).toHaveText('Epic sadface: Username and password do not match any user in this service')
    }

}