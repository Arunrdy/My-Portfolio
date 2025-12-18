# My Portfolio

This repository contains the source code for my personal portfolio website built using Python and Flask. The application serves as a central place to present my work, skills, and background through a simple web interface.

---

## Project Overview

The portfolio is a Flask-based web application that renders static and dynamic content using HTML templates. It is designed to run locally and can be extended or deployed easily. The structure follows a standard Flask pattern, making it easy to understand, modify, and maintain.

The website includes sections for personal information, project highlights, and external links. Styling and client-side behavior are handled using static assets such as CSS and JavaScript.

---

## Project Structure

My-Portfolio/
├── app.py
├── requirements.txt
├── static/
│   ├── style.css
│   ├── script.js
│   └── Arun_IT_Resume.pdf
├── templates/
│   ├── base.html
│   ├── index.html
│   ├── certifications.html
│   ├── contact.html
│   ├── project.html
│   └── skills.html
└── README.md





---

## Technologies Used

Python  
Flask  
HTML  
CSS  
JavaScript  
Git & GitHub  

---

## How the Application Works

- The Flask application is initialized in `app.py`
- Routes are defined to render HTML templates
- HTML files are stored in the `templates` directory
- Static assets such as stylesheets, scripts, and images are served from the `static` directory
- The application runs on a local development server

---

## Local Setup Instructions

Clone the repository:

git clone https://github.com/Arunrdy/My-Portfolio.git

Navigate to the project directory:

cd My-Portfolio

(Optional) Create and activate a virtual environment:

python -m venv venv  
venv\Scripts\activate

Install dependencies:

pip install -r requirements.txt

Run the application:

python app.py

Open the application in your browser:

http://127.0.0.1:5000

---

## Purpose of This Repository

This repository demonstrates the use of Flask for building a structured web application and serves as a base for showcasing projects and skills. It can be customized further by adding new pages, improving styles, or deploying it to a hosting platform.

---

⭐ If you find this portfolio useful, feel free to star the repository and share feedback.
