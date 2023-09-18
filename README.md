# Contact List Web Application Test Plan

## Project Name and Description

**Project Name:** Final_project

**Description:** This comprehensive test plan is designed to ensure the quality and reliability of the Contact List web application.

**Goals:**
- Ensure Requirement Compliance: Validate that the Contact List web application aligns with the specified requirements, ensuring that it functions as intended.
- Assess Functionality: Verify the application's functionality to guarantee that users can efficiently manage their contacts.
- Evaluate Performance: Measure the application's performance, identifying bottlenecks, if any, and ensuring that it meets performance expectations.
- Enhance Security: Assess the application's security measures to safeguard user data and privacy.
- Defect Identification: Identify and report any defects or issues that may compromise the application's functionality, performance, or security.

## Prerequisites

Before you begin testing, ensure that you have the following prerequisites installed on your system:

- Node.js
- Cypress

## Installation Steps

### Installing Node.js

**For Windows:**

1. **Download Node.js:**
   - Open your web browser and go to the official Node.js website: [https://nodejs.org/](https://nodejs.org/)
   - Click on the "LTS" download button to download the installer for the LTS version.

2. **Run the Installer:**
   - Double-click on the downloaded file to run it.
   - Follow the installer's on-screen instructions.

3. **Verify Installation:**
   - Open a Command Prompt or PowerShell window and run the following commands:
     ```bash
     node -v
     npm -v
     ```

**For macOS:**

1. **Download Node.js:**
   - Open your web browser and go to the official Node.js website: [https://nodejs.org/](https://nodejs.org/)
   - Click on the "LTS" download button to download the installer for the LTS version.

2. **Run the Installer:**
   - Double-click on the downloaded file to run it.
   - Follow the installer's on-screen instructions.

3. **Verify Installation:**
   - Open the Terminal application and run the following commands:
     ```bash
     node -v
     npm -v
     ```

**For Linux (Ubuntu/Debian-based systems):**

1. **Open a Terminal:**
   - Open a terminal window on your Linux system.

2. **Update Package Lists:**
   - Update the package lists for upgrades and new package installations:
     ```bash
     sudo apt update
     ```

3. **Install Node.js and npm:**
   - Install Node.js and npm using the following command:
     ```bash
     sudo apt install nodejs npm
     ```

4. **Verify Installation:**
   - To verify that Node.js and npm were installed successfully, run the following commands:
     ```bash
     node -v
     npm -v
     ```

### Installing Cypress

To install Cypress, follow these steps:

1. **Create a New Project (Optional):**
   - If you're setting up Cypress for an existing project, navigate to your project's directory using the terminal. If you're starting a new project, create a new directory and navigate into it:
     ```bash
     mkdir my-cypress-project
     cd my-cypress-project
     ```

2. **Initialize a New Node.js Project (If Needed):**
   - If you're creating a new project, initialize a new Node.js project by running the following command and following the prompts:
     ```bash
     npm init -y
     ```

3. **Install Cypress as a Development Dependency:**
   - Use npm to install Cypress as a development dependency in your project:
     ```bash
     npm install cypress --save-dev
     ```

4. **Open Cypress (Optional):**
   - You can open Cypress to run tests by running the following command:
     ```bash
     npx cypress open
     ```
   - This opens the Cypress Test Runner for interactive testing.

5. **Add a Test Script (Optional):**
   - To run Cypress tests from the command line or in CI/CD pipelines, add the following script to your `package.json` file:
     ```json
     "scripts": {
       "cypress:open": "cypress open",
       "cypress:run": "cypress run"
     }
     ```
   - Save the file.

6. **Run Cypress Tests (Optional):**
   - You can run Cypress tests using the following command:
     ```bash
     npm run cypress:open
     ```
     Or, for headless mode (for CI/CD):
     ```bash
     npm run cypress:run
     ```

## Running Tests

1. **API Tests:**
   - Use a testing framework like **Postman**, **Cypress**, to run API tests.

2. **UI Tests:**
   - Use tools like **Cypress**, **Selenium**, **Puppeteer**, or **WebDriverIO** for UI tests.

3. **Non-Functional Tests:**
   - Use specialized tools and configurations for non-functional tests like performance, security, and scalability.

4. **Page Load Time Tests:**
   - Automated page load time tests can be set up using tools integrated with Google Chrome.

5. **Scalability Tests:**
   - Utilize tools like **Apache JMeter** or custom scripts to simulate high user loads.

6. **Usability Testing:**
   - Conduct usability testing manually with real users.


