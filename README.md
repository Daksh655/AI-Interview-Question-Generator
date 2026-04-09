# AI Interview Question Generator

AI-powered web application that generates role-based technical interview questions using Large Language Model (LLM) API integration.

This project focuses on demonstrating AI integration, prompt engineering, and backend communication with an LLM.
The current UI is minimal and built for functional demonstration. UI improvements and additional features are planned.

---

## Features
- Role-based interview question generation  
- Prompt engineering for structured output  
- Node.js backend for secure API calls  
- LLM API integration (OpenRouter)  
- Dynamic response rendering  
- Error handling for API limits  

---

## Tech Stack
- HTML  
- CSS  
- JavaScript  
- Node.js  
- Express.js  
- OpenRouter LLM API  

---

## Project Architecture
Frontend → Node.js Backend → LLM API → Response → UI

---

## How to Run Locally

### 1. Clone repository
https://github.com/Daksh655/AI-Interview-Question-Generator.git

### 2. Install dependencies
npm install

### 3. Add API Key
Open `server.js` and replace: const API_KEY = "YOUR_API_KEY"; 
you have to create your own API_KEY with OpenRouter API key

### 4. Run server
node server.js

### 5. Open application
Open `index.html` in browser.

## Example Usage
Input:
Java Developer

Output:
Explain JVM architecture
What is Spring Boot
HashMap vs ConcurrentHashMap and more

## Future Improvements
- Improved UI/UX  
- Dropdown role selection  
- Export questions as PDF  
- Interview difficulty levels  
- Chat-based interface  

---

## Purpose
This project demonstrates AI API integration, prompt engineering, and backend-based LLM interaction for real-world AI applications.
