# 🖩 Simple JavaScript Calculator

![GitHub top language](https://img.shields.io/github/languages/top/Justin-Gomez-DEV/Simple-Calculator)
![GitHub repo size](https://img.shields.io/github/repo-size/Justin-Gomez-DEV/Simple-Calculator)

A lightweight calculator built with **HTML, CSS, and JavaScript**. Supports basic arithmetic operations and demonstrates DOM manipulation and event handling.

---

## ⚡ Features

- ➕ Addition, ➖ Subtraction, ✖️ Multiplication, ➗ Division  
- 🧹 Clear (`AC`) and ⬅️ Erase (`DEL`) functionality  
- Dynamic input update as buttons are pressed  
- Automatically resets input after pressing equal (`=`)

---

## 🛠️ Technologies Used

- **HTML** – Structure  
- **CSS** – Styling  
- **JavaScript** – Logic & DOM manipulation

---

## 🎯 How It Works

1. Buttons selected using `document.querySelectorAll`.  
2. `forEach` adds click event listeners to each button.  
3. Input updates dynamically on button clicks.  
4. `equal_pressed` boolean tracks if `=` was pressed to start a new calculation.  
5. `window.onload` clears the input when the page loads.

---

## 🚀 Usage

1. Open `index.html` in a browser  
2. Click buttons to form expressions  
3. Press `=` to calculate  
4. Use `AC` to clear or `DEL` to erase

---

## 📌 Notes

- Event-driven logic using `addEventListener`  
- Demonstrates practical use of booleans, DOM, and click events  
- Perfect for beginners learning JavaScript interactivity

