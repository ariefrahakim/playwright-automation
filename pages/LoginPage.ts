import { expect, Page } from '@playwright/test'
import { BasePage } from './BasePage.js'
import { loginPageLocators } from '../locators/LoginPage.locator.js'
import * as dotenv from 'dotenv'

dotenv.config() // Load .env file

export class LoginPage extends BasePage {
	constructor(page: Page) {
		super(page)
	}

	locators = loginPageLocators

	async gotoLoginPage() {
		const baseUrl = process.env.BASE_URL!
		await this.page.goto(`${baseUrl}`, { waitUntil: 'networkidle' })
		await this.page.waitForSelector(this.locators.usernameField, { state: 'visible' })
	}

	async login(username: string, password: string) {
		await this.page.fill(this.locators.usernameField, username)
		await this.page.fill(this.locators.passwordField, password)
		await this.page.click(this.locators.loginButton)
	}

	async assertInventoryUrl(expectedUrl: string) {
		await expect(this.page).toHaveURL(expectedUrl)
	}
}
