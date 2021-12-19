import { test as base } from '@playwright/test';
import axios, { Axios } from 'axios';

type TestFixtures = {
    books: object;
};

const test = base.extend<TestFixtures>({
    books: async ({}, use) => {
        const host = 'https://demoqa.com';
        const endpoint = '/BookStore/v1/Books';
        const listOfAvailableBooks = await axios.get(host + endpoint);
        use(listOfAvailableBooks.data.books);
    },
});

export default test;