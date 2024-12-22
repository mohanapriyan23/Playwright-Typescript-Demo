# Playwright-Demo

This repository contains a demo project using Playwright for end-to-end testing.

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