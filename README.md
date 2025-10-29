# 🧪 Playwright Automation Project

This project uses Playwright for end-to-end testing with environment variable support and GitHub Actions CI integration.

## 📦 Installation

### 1. Clone the Repository
```sh
git clone https://github.com/your-username/playwright-automation.git
cd playwright-automation
```

### 2. Install Dependencies
```sh
npm install
```
### 3. Environment Setup
Create a .env file in the project root directory:
```sh
BASE_URL=https://opensource-demo.orangehrmlive.com/web/index.php
USERNAME=Admin
PASSWORD=admin123
```
⚠️ Your .env file is ignored by Git via .gitignore for security reasons.

### 4. How to Run Test

Available commands in package.json:

Command	Description
```sh
npm run test	-- Run Playwright tests in headless mode
npm run test:headed	-- Run Playwright tests in headed (browser visible) mode
npm run test:report	-- Generate Playwright test report
npx playwright -- show-report
```

### Folder Structure

```sh
playwright-automation/
│
├── tests/                 # Test files
├── pages/                 # Page object models
├── locators/              # Selector Pages
├── utils/                 # Utilities and helpers
├── playwright.config.ts   # Playwright configuration
├── .env                   # Environment variables (ignored)
├── .gitignore             # Files to ignore in Git
├── .prettierrc            # Code formatting rules
├── .prettierignore        # Files ignored by Prettier
└── README.md              # Project documentation
```

### Prettier Setup

To format code consistently, this project includes .prettierrc and .prettierignore.

You can format files manually using:
```sh
npx prettier --write .
```

### ⚙️ Run in GitHub Actions

This project supports GitHub Actions CI.
In your .github/workflows/playwright.yml, set the environment variables:
```sh
env:
  BASE_URL: https://www.saucedemo.com/v1/
  USERNAME: standard_user
  PASSWORD: secret_sauce
```

### 🧾 Test Report

After test execution, open the Playwright report with:
```sh
npx playwright show-report
```

### 🧑‍💻 Author
```sh
Arief Rahman Hakim (https://www.linkedin.com/in/arief-rahman-hakim-test-engineer/)
````
