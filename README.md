# 💸 ExpenseTracker - 3D Glassmorphic Finance Dashboard

A comprehensive, single-file personal finance application featuring a stunning **3D interactive background**, **Glassmorphism UI**, and deep customization options. Built with vanilla JavaScript, Tailwind CSS, and Three.js.

* **✨ Watch live demo at (snehal976.github.io/Expense-tracker/)


## ✨ Key Features

### 🎨 UI & UX
* **3D Interactive Background:** A mesmerizing particle network built with **Three.js** that reacts to mouse movement and clicks.
* **Glassmorphism Design:** Modern, translucent aesthetic with blurred backdrops and neon glow effects.
* **Responsive Layout:** Fully adaptive design that works seamlessly on desktop and mobile devices.
* **Dynamic Theming:**
    * **Dark Mode:** Default sleek interface.
    * **Light Mode:** Clean and bright interface.
    * **Neon Mode:** High-contrast cyberpunk aesthetic.
    * **Custom Theme:** Built-in color picker to customize primary colors, background, and text.

### 📊 Financial Management
* **Dashboard:** Real-time overview of total spending, monthly expenses, and category breakdowns with animated progress bars.
* **Expense Tracking:**
    * Add, Edit, and Delete expenses.
    * **Multiple Views:** Switch between **Table**, **List**, and **Calendar** views.
    * **Search & Filter:** Real-time filtering by category and search by name/notes.
* **Budget Planning:** Set monthly budgets per category and visualize "Over Budget" vs. "On Track" status.
* **Debt Tracker:** Monitor loan repayments with visual progress bars.
* **Savings Goals:** Track progress toward financial goals with deposit/withdraw functionality.

### ⚙️ Advanced Customization
* **Dynamic Schema:** Add custom data fields (Text, Number, Date) to your expense forms via the Settings panel.
* **Local Persistence:** All data is stored securely in your browser's **LocalStorage**—no server required.

---

## 🛠️ Technologies Used

This project is built as a **Single Page Application (SPA)** contained within a single HTML file.

* **Core:** HTML5, CSS3, JavaScript (ES6+)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/) (via CDN)
* **3D Graphics:** [Three.js](https://threejs.org/) (via CDN)
* **Icons:** [Lucide Icons](https://lucide.dev/)
* **Storage:** Browser LocalStorage API

---

## 🚀 Getting Started

Since this is a client-side application using CDNs, no installation or build process is required.

### Prerequisites
* A modern web browser (Chrome, Firefox, Edge, Safari).
* Internet connection (to load Tailwind, Three.js, and Lucide libraries).

### Installation
1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/yourusername/expense-tracker.git](https://github.com/yourusername/expense-tracker.git)
    ```
2.  **Open the file:**
    Simply double-click `index.html` to open it in your browser.

**OR**

1.  Download the `index.html` file.
2.  Drag and drop it into your browser window.

---

## 📖 Usage Guide

1.  **Dashboard:** View your financial health at a glance. Click the background to interact with the 3D particles!
2.  **Adding Expenses:** Click the **"+ Add"** button or use the **Expenses** tab to record transactions.
3.  **Budgets:** Go to the Budgets tab to create categories (e.g., Food, Rent) and set limits.
4.  **Settings:**
    * Change the **Theme** to match your style.
    * Use **Field Customization** to add specific details to your expenses (e.g., "Receipt URL" or "Payment Method").


---

## 🤝 Contributing

Contributions are welcome! If you have suggestions for improvements or new features:

1.  Fork the repository.
2.  Create a new branch (`git checkout -b feature/AmazingFeature`).
3.  Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4.  Push to the branch (`git push origin feature/AmazingFeature`).
5.  Open a Pull Request.

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---

<p align="center">
  Made with ❤️ using <a href="https://tailwindcss.com">Tailwind</a> & <a href="https://threejs.org">Three.js</a>
</p>
