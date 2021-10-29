import { test as base } from '@playwright/test';

type TestFixtures = {
    user: object;
} 

const test = base.extend<TestFixtures>({
    user: async({}, use) => {
        const userCredentials = {'username': 'ibrian93', 'password': 'MyTesting83!'};
        use(userCredentials);
    }
});

export default test;