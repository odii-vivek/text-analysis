# Real-Time Text Analysis and String Replacement

## Project Overview

This project is a **React** application that enables users to input text and receive real-time statistics, such as the count of unique words and the number of characters (excluding spaces and punctuation). Additionally, users can perform string replacement within the input text by entering the string they want to find and the string they want to replace.

### Features

1. **Text Input**  
   - A large `textarea` component where users can type or paste text.
   - The text input field updates in real time, providing word and character statistics.

2. **Unique Word Count**  
   - The application counts the number of unique words in the `textarea`.
   - Words are treated case-insensitively (e.g., "Hello" and "hello" are considered the same word).

3. **Character Count (Excluding Spaces and Punctuation)**  
   - Displays the number of characters, excluding spaces and punctuation (only letters and numbers are counted).

4. **String Replacement**  
   - Users can input a string to find and replace it with another string.
   - When the "Replace All" button is clicked, all occurrences of the search string are replaced with the replacement string in the `textarea`.

5. **Real-Time Statistics Visualization**  
   - A dynamic bar chart is used to visualize real-time statistics, such as the unique word count and character count.
   - The bar chart updates in real-time as the user types or performs string replacements, providing an intuitive representation of the data.

### How to Run the Project

#### Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/)

#### Steps to Run Locally

1. **Clone the Repository**
   Begin by cloning the project from the GitHub repository using the following command:
   ```bash
   git clone https://github.com/odii-vivek/text-analysis

2. **Navigate into the Project Directory**
    Change your working directory to the newly cloned project by running:
    ```bash
    cd text-analysis
3. **Install Project Dependencies**
    Install the necessary dependencies for the project using npm (Node Package Manager). This can be done with the following command:
    ```bash
    npm install
4. **Run the Development Server**
    To start the project and run it locally, use the command:
    ```bash
    npm run dev


OR 

**Click on below to link to view deployement for the application**
```bash
    https://text-analysis-seven.vercel.app/

