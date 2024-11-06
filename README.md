Tipulator

Overview
The Tipulator is a web-based tip calculator designed to make it easy to calculate tips based on service quality, split costs among diners, and provide transparency on the final total each person pays. This project combines JavaScript calculations with a simple, accessible user interface, allowing users to enter the bill, rate the service, and specify the number of people sharing the cost.

How I Built It

HTML Layout:

I created a straightforward HTML layout, structuring sections for input fields, feedback, and results.
The form includes fields for the initial bill total, a service rating, and the number of people sharing the bill, making it easy to collect the data needed for tip calculation.

Form Validation and Interaction:

I included validation on each input, requiring positive numbers for bill and people count, ensuring accurate calculations.
The service rating input expects descriptors like "poor," "good," or "excellent," which the JavaScript uses to apply different tip percentages.
JavaScript for Calculations:

A JavaScript function (handleForm in script.js) captures form input and calculates both the total amount with the tip and the cost per person.
Dynamic elements on the page display the calculated total and per-person cost in real time after the form is submitted, providing instant feedback.

UI Controls for Enhanced Usability:

I added control buttons (rightButton, leftButton, closeButton) to allow movement of the results section within the interface and an option to close the display, providing flexibility in viewing results.

CSS Styling:

The styling in style.css gives the application a clean, friendly look, making it easy to use across various devices and screen sizes.
Key elements like headings, input labels, and result displays are formatted to improve readability and user experience.

This project was an excellent opportunity to enhance my skills in JavaScript-based interactivity, form validation, and user-centric design, resulting in a simple yet highly functional tool for daily use.
