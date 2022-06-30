import { test } from '@playwright/test'

import { LoginPage } from '../pages/login/login-page'

let loginPage: LoginPage

test.beforeEach(async ({page})=> {
    loginPage = new LoginPage(page)
})

test('should successfully login', async ({ page }) => {
    await loginPage.go()
    await loginPage.sigIn('standard_user', 'secret_sauce')
    await loginPage.userLoggedIn()
})

test('should fail to login', async ({ page }) => {
    await loginPage.go()
    await loginPage.sigIn('standard_user', 'wrong_password')
    await loginPage.userNotLoggedIn()
})