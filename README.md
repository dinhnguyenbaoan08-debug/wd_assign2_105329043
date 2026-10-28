The Ormond Movie Theatre
COS10005 – Web Development
Assignment 2

1. Website Structure
My website is called The Ormond Movie Theatre. Users can explore movies, receive movie recommendations, book tickets, and save their favorite films.

1.1 The website consists of six pages:

index.html: The homepage, containing information about the movie theatre.

movies.html: Displays six movies, ticket prices, and showtimes.

recommendations.html: Provides movie recommendations based on user preferences.

register.html: A registration form that includes data validation.

booking.html: A ticket booking form with an automatic price calculation feature.

watchlist.html: A section for saving and removing favorite movies.

1.2 Other files:

css/style.css: Manages colors, layout, and responsive design.

js/script.js: Contains JavaScript functions.

images/: Stores movie posters and images.


2. GitHub Repository Link
https://github.com/dinhnguyenbaoan08-debug/wd_assign2_105329043 

3. JavaScript Data Validation Logic

Registration Form:

3.1 JavaScript validates the following criteria:

The username must be at least 5 characters long.

The email address and phone number must follow the correct format.

The password must be at least 10 characters long and include an uppercase letter, a lowercase letter, a digit, and a special character.

The confirmation password must match the entered password.

The user must select a gender, movie genre, and country.

If any information is invalid, an error message will be displayed. Ticket Booking Form:

JavaScript performs the following validation checks:

Users must provide their name, email address, and phone number.

Users must select a movie, a screening date (which must be a future date), a ticket type, and the number of tickets.

The number of tickets must be a positive integer.

Payment and billing information must be valid.

If the information is invalid, the form will not be submitted.

3.2 Other JavaScript Features:

A movie recommendation feature utilizes `if/else` conditional statements.

Ticket prices are calculated automatically.

A "watchlist" (favorite movies list) uses `localStorage` to store data within the browser.

The booking page has the capability to automatically select a movie.

4. Known Issues or Limitations

The website does not utilize a database.

The registration process does not create an actual user account.

The online payment feature is for illustrative purposes only.

The watchlist is stored locally within the user's browser. Movie recommendations are based on simple, predefined rules.

The booking form does not verify actual movie screening times.

5. References

W3Schools. (2019). JavaScript tutorial. W3schools. https://www.w3schools.com/Js/

File system API - web APIs | MDN. (2023, October 25). Developer.Mozilla.Org. https://developer.mozilla.org/en-US/docs/Web/API/File_System_API
