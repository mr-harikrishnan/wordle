Got it! Here's a `README.md` article that **describes only your code**, broken down into understandable sections—without including the actual code itself.

---

# 🟩 Simple Wordle Clone – JavaScript Project

This project is a simple **Wordle-like game** built entirely with **vanilla JavaScript**, using no external libraries or HTML/CSS files. The entire structure and styling are handled directly in JavaScript, making it lightweight and easy to run in any modern browser.

---

## 🔧 How It Works

### 1. **Grid Creation**

- The game creates a 6x5 grid using nested loops.
- Each row represents a guess, and each box in the row represents a letter slot.
- The grid is styled using JavaScript to look like traditional Wordle tiles.

### 2. **Word Selection**

- A predefined array of 100 five-letter words (all uppercase and with no duplicate letters) serves as the word bank.
- A random word is chosen from this list when the game loads.

### 3. **User Input Handling**

- The app listens for keyboard events:
  - **Letter keys (A-Z)** populate the current row.
  - **Backspace** removes the last entered letter.
  - **Enter** submits the current guess when 5 letters are filled.

### 4. **Guess Validation and Coloring**

- Upon pressing Enter:
  - Each letter is compared to the target word.
  - Matching letters in the correct position turn **green**.
  - Correct letters in the wrong position turn **yellow**.
  - Incorrect letters turn **grey**.
- The background color of each tile updates accordingly.

### 5. **Game Flow Control**

- The player has a maximum of 6 guesses (rows).
- After each valid guess, the game moves to the next row.
- If the player fails to guess the word in 6 attempts, the correct word is displayed at the top of the page.

---

## 📌 Key Features

- Dynamic DOM creation (no HTML needed)
- Keyboard-only interaction
- Color-coded feedback for each guess
- 100 unique, five-letter word list
- Displays answer after final attempt

---

## 🏁 Running the Game

To play:
1. Copy the code into an `.html` file.
2. Open the file in your browser.
3. Start typing your guesses using your keyboard.

No setup or installation required.

