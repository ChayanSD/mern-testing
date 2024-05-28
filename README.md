# Simple testing using jest and vitest.

## Installation & configuration of jest
1. Install jest using npm
 ```npm install --save-dev ts-jest  @jest/globals```
2. Create a jest.config.js file in the root directory
 ```npx ts-jest config:init```
3.Create a tests folder in the root directory and add files with the .test.ts extension


# How to test an express application using jest
      follow all the steps above.
        1. Install supertest
        ```npm install supertest @types/supertest```
        2. Create a test file in the tests folder with the .test.ts extension
        3. Write your test cases
        4. Run the test using the command
        ```npm run test```