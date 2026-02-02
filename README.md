# TextUtils - Smart Text Processor

A powerful and user-friendly web utility built with **React.js** designed to manipulate and analyze text in real-time. Whether you need to change text casing, remove unnecessary spaces, or get instant word statistics, TextUtils provides a fast and efficient solution.

## 🚀 Live Demo
[https://text-utils-rho-seven.vercel.app/]

## ✨ Key Features
* **Text Transformation**: Convert text to Uppercase, Lowercase, and Bold/Italic styles instantly.
* **Text Cleaning**: Remove extra white spaces and clear text with a single click.
* **Smart Word Counter**: Accurate real-time word and character counting using Regex.
* **Reading Time Estimator**: Automatically calculates the average time required to read the text.
* **One-Click Copy**: Integrated Clipboard API to copy processed text easily.
* **Dark Mode**: Optimized UI with a toggleable Dark/Light theme for better readability.

## 🛠️ Tech Stack
* **Frontend**: React.js
* **Build Tool**: Vite
* **Styling**: CSS3 / Bootstrap
* **Deployment**: Vercel

## 🧩 Challenges & Solutions

### 1. Accurate Word Counting
**Problem**: Standard string splitting was counting extra spaces and new lines as words, giving incorrect statistics.
**Solution**: Implemented a filtering logic using Regular Expressions `text.split(/\s+/)` to ensure only non-empty strings are counted as valid words.

### 2. Clipboard Integration
**Problem**: Users needed a quick way to copy the transformed text without manual selection.
**Solution**: Integrated the `navigator.clipboard.writeText` API combined with a custom Alert system to provide instant feedback upon successful copying.

### 3. Extra Space Removal
**Problem**: Removing internal multiple spaces without affecting single spaces between words.
**Solution**: Used a Regex-based replace method to detect and collapse multiple consecutive spaces into a single space.

## 📥 Getting Started
1. Clone the repository:
   `git clone https://github.com/qudratullah-stack/textUtils.git`
2. Install dependencies:
   `npm install`
3. Start the application:
   `npm run dev`
