# Automation Project with Playwright

In this project, we are setting up a Playwright automation framework. The main goal is to cover the main functionalities of the [demoqa](https://demoqa.com/books/) website.


## Installation
In order to launch the automation tests, it is necessary to have installed node on your local machine. If it is not that the case, please come download it [here](https://nodejs.org/en/download/)

It is also recommended after the installation to verify if node is installed correctly by executing the following command:
> `node --version`

If the command is executed correctly, then you should see the current installed version of your node.

Once the node installation has been verified, run the following commands:

> `yarn install --frozen-lockfile`

That will install the dependencies described on the `package.json` but keeping the version provided on the `yarn.lock`. 

After the dependencies have been updated, it is necessary to install the playwright browsers. In order to do that, it is compulsory to execute the following command:

> `npx playwright install`

And the last step to perform is to actually run the tests by executing the following command:
> `yarn run test`



## What it is covered?
Here it will be described briefly the main functionalities that are covered:
- Login 
- Search books
 

