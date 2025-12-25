## Full-Stack E-Commerce Web App

### MADE BY ADITHYA URAVAKONDA

This project uses a React (TypeScript) frontend, a .NET (C#) backend, and data storage using SQLite.

## Requirements
### 1. Software & Tools
* **Operating System:** macOS (M1/M2/M3/M4), Windows 10/11, or Linux.
* **IDE:** [JetBrains Rider](https://www.jetbrains.com/rider/) (Recommended) or VS Code.
* **.NET SDK:** Version **8.0** or above (Required for C# backend).
* **Node.js:** Version **18.0 (LTS)** or higher (Required for React frontend).
* **Database Tool:** [DB Browser for SQLite](https://sqlitebrowser.org/) (for viewing the database file).

### 2. Tech Stack Definition
* **Frontend:** React (Vite), TypeScript, CSS.
* **Backend:** ASP.NET Core Web API (C#).
* **Database:** SQLite (Relational SQL Database managed via Entity Framework Core).
* **ORM:** Entity Framework Core.

## Architecture Explained
### 1. MVC Architecture (Model-View-Controller)
This project utilises a **decoupled MVC** pattern. This project separates the "View" entirely from the "Model" and "Controller."

* **Model (The Data):**
    * Located in: `ecommerceapi/Models` (`Product.cs`, `Order.cs`).
    * **Role:** Defines the structure of the data (e.g., a Product must have a Name, Price, and ImageUrl) and represents the SQL database tables.
* **Controller (The Logic):**
    * Located in: `ecommerceapi/Controllers` (e.g., `ProductsController.cs`).
    * **Role:** It receives requests, processes logic (like saving an order), and talks to the database. It returns raw data (JSON).
* **View (The Interface):**
    * Located in: `client/src/pages` (e.g., `Home.tsx`, `Cart.tsx`).
    * **Role:** Built with **React**. It takes the JSON data from the Controller and renders the user interface. It manages the presentation layer independently of the server.

### 2. REST APIs
The application relies on **REST (Representational State Transfer)** APIs for communication between the Frontend (React) and Backend (.NET).
* **How it works:** The frontend sends a HTTP request to a specific URL (Endpoint), and the backend responds with data in JSON format.
* **Key Endpoints in this Project:**
    * `GET /api/products`: Used by the Home page to read the list of products from the database.
    * `GET /api/products/{id}`: Used to fetch details for a single item.
    * `POST /api/orders`: Used by the Checkout page to create (write) a new order in the database containing the customer's details and cart items.

## How to Run the Project

Uses **JetBrains Rider** and terminal.

### Step 1: Start the Backend (.NET API)

1.  Open **JetBrains Rider**.
2.  Select **Open** and navigate to `ecommerceapi` folder (or the solution file `.sln` if present).
3.  Wait for Rider to restore NuGet packages.
4.  **Database Setup (First Run Only):**
    * Open the "Terminal" tab at the bottom of Rider.
    * Run: `dotnet ef database update`
    * *This creates the `ecommerce.db` file and seeds it with the initial 4 products.*
5.  **Run the Server:**
    * At the top right of Rider, ensure the run configuration is set to `http` or `https`.
    * Click the green **Run** button.
    * Note the Port Number in the console (e.g., `Now listening on: http://localhost:5010`).

### Step 2: Start the Frontend (React Client)

1.  Open **System Terminal** (or a separate terminal tab in Rider).
2.  Navigate to the client folder:
    ```bash
    cd client
    ```
3.  Install dependencies (if not done yet):
    ```bash
    npm install
    ```
4.  Start the development server:
    ```bash
    npm run dev
    ```
5.  The terminal will show a local URL, usually `http://localhost:5173`.

### Step 3: View the Application

1.  Open a web browser like Chrome, Safari, etc.
2.  Go to `http://localhost:5173` (or the port shown in the client frontend terminal).
3.  You should see the **Homepage** with product cards loaded from the database.
