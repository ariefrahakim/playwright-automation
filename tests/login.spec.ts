import { test } from '@playwright/test'
import { LoginPage } from '../pages/LoginPage.js'
import * as dotenv from 'dotenv'

dotenv.config()

test('Valid login should navigate to dashboard', async ({ page }) => {
	const loginPage = new LoginPage(page)

	await loginPage.gotoLoginPage()
	await loginPage.login(process.env.USERNAME!, process.env.PASSWORD!)
	await loginPage.assertInventoryUrl(`${process.env.BASE_URL}/dashboard/index`)
})
