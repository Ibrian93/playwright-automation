import { PlaywrightTestConfig } from "@playwright/test"

const config : PlaywrightTestConfig= {
  timeout: 30000,
  testDir: '${pwd}/../../tests/',
  projects: [
    {
      name: 'Chrome',
      use: {
        baseURL: 'https://demoqa.com/',
        browserName: 'chromium',
        headless: true,
        actionTimeout: 0,
      }
    }
  ]
}

export default config
