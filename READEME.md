# Cypress Test Automation

## 📌 Project Overview
This project uses Cypress for end-to-end (E2E) testing of the SauceDemo application. The tests cover user login, product sorting, cart functionality, and checkout processes.

## 📂 Folder Structure

📦 cypress-automation
├── 📂 cypress
│   ├── 📂 e2e               # Test files
│   │   ├── 📂 login         # Login tests
│   │   ├── 📂 cart          # Cart tests
│   │   ├── 📂 sorting       # Sorting tests
│   │   ├── 📂 checkout      # Checkout tests
│   ├── 📂 fixtures          # Test data (users.json)
│
├── 📂 node_modules          # Dependencies
├── 📄 cypress.config.js      # Cypress configuration
├── 📄 package.json          # Project dependencies & scripts
├── 📄 README.md             # Project documentation
```

---

## 🚀 Installation & Setup
### 1️⃣ Prerequisites
- **Node.js** (Recommended: v18 or later)
- **npm** (Node Package Manager)
- Install dependencies:npm install


### 2️⃣ Run Cypress Tests
Run all test cases :npm run cy:run 

Open Cypress Test Runner (GUI mode) :npm run cy:open

## 🧪 Test Cases
### 1️⃣ Login Tests (`login.cy.js`)
- ✅ User can log in successfully
- ✅ Invalid login displays an error message

### 2️⃣ Cart Tests (`add-remove.cy.js`, `view-cart.cy.js`)
- ✅ User can add and remove items from the cart
- ✅ Cart updates correctly

### 3️⃣ Sorting & Filtering (`sorting-filters.cy.js`)
- ✅ Sort products by name and price
- ✅ Validate sorting order

### 4️⃣ Checkout Process (`checkout-process.cy.js`)
- ✅ User can complete checkout


## 📜 Custom Commands & Test Data
- `cypress/fixtures/users.json` stores test user credentials
- `cypress/support/commands.js` can be used for reusable Cypress commands


