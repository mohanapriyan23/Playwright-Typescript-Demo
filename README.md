# Playwright-Demo

This repository contains a demo project using Playwright for end-to-end testing.

The website https://neal.fun/absurd-trolley-problems/ offers a collection of thought-provoking and humorous trolley problem scenarios. While automating this site can be an engaging way to practice writing tests with Playwright, it's also worth noting that the scenarios are just plain fun to explore! Users are encouraged to try them manually to fully experience the humor and moral dilemmas they present.

## Project Structure

- `playwright.config.ts`: Configuration file for Playwright.
- `tests/`: Directory containing test files.
- `test-results/`: Directory where test results are stored.
- `playwright-report/`: Directory where Playwright reports are generated.

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/your-username/playwright-demo.git
    cd playwright-demo
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

### Running Tests

To run the tests in UI mode with only Chromium, use the following command:
```sh
npx playwright test --headed --project=chromium
