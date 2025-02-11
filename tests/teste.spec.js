const { chromium } = require('playwright');
const { test } = require('@playwright/test');

test('basic test', async () => {
    const browser = await chromium.launch({headless:true})
    const context = await browser.newContext();
    const page = await context.newPage()

    await page.goto('https://react-redux.realworld.io/#/login')

    await page.fill('input[type = "email"]', 'alanvoigt@yahoo.com.br')
    await page.press('input[type = "email"]', 'Tab')
    await page.type('input[type = "password"]', 'test123')
    await page.click("button[type='submit']")

    const html = await page.innerHTML('.navbar-brand')

    // Screenshot
    await page.screenshot({path: 'SignIng.png', fullPage: true})

    await browser.close()
})