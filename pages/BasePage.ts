import type { Page } from '@playwright/test'
import { expect } from '@playwright/test'

export class BasePage {
	protected page: Page

	constructor(page: Page) {
		this.page = page
	}

	async navigateTo(path: string = '/') {
		await this.page.goto(path)
	}

	async getTitle() {
		return this.page.title()
	}

	async waitForElement(selector: string) {
		await this.page.waitForSelector(selector, { state: 'visible' })
	}
}
