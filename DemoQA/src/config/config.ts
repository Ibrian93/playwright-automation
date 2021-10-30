import { PlaywrightTestConfig } from "@playwright/test"

const config : PlaywrightTestConfig= {
  timeout: 30000,
  testDir: '${pwd}/../../../tests/',
  projects: [
    {
      name: 'Chrome',
      use: {
        baseURL: 'https://demoqa.com/books',
        browserName: 'chromium',
        headless: false,
        actionTimeout: 0,
      }
    }
  ]
}

export default config
