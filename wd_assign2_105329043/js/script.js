/*Recomendation Page*/
function recommendMovies() {

    var genre = document.getElementById("genre").value;
    var age = document.getElementById("ageGroup").value;
    var viewing = document.getElementById("viewing").value;

    var movie = "";
    var movieID = "";


    if (genre == "" || age == "" || viewing == "") {
        movie = "Please select all preferences.";

    } else if (genre == "Horror" ||
               genre == "Science Fiction") {

        if (age == "Adult") {
            movie = "MEGAN";
            movieID = "megan";
        }

    } else if (genre == "Romance") {

        if (age == "Child") {
            movie = "Tangled (Rapunzel)";
            movieID = "tangled";
        } else if (viewing == "Date Night") {
            movie = "Elemental";
            movieID = "elemental";
        } else {
            movie = "Tangled (Rapunzel)";
            movieID = "tangled";
        }

    } else if (genre == "Adventure") {

        if (age == "Child" || viewing == "Family") {
            movie = "Finding Nemo";
            movieID = "finding-nemo";
        } else {
            movie = "Tangled (Rapunzel)";
            movieID = "tangled";
        }

    } else if (genre == "Comedy") {

        if (age == "Child") {
            movie = "Toy Story";
            movieID = "toy-story";
        } else if (viewing == "Solo") {
            movie = "Inside Out";
            movieID = "inside-out";
        } else {
            movie = "Toy Story";
            movieID = "toy-story";
        }

    } else if (genre == "Animation") {

        if (age == "Child") {
            movie = "Toy Story";
            movieID = "toy-story";
        } else if (viewing == "Date Night") {
            movie = "Elemental";
            movieID = "elemental";
        } else if (viewing == "Solo") {
            movie = "Inside Out";
            movieID = "inside-out";
        } else if (age == "Teen") {
            movie = "Tangled (Rapunzel)";
            movieID = "tangled";
        } else {
            movie = "Finding Nemo";
            movieID = "finding-nemo";
        }
    }

    var title = document.getElementById("movieTitle");
    var message = document.getElementById("movieMessage");
    var bookLink = document.getElementById("bookLink");

    if (movieID == "") {

        title.textContent = "No suitable movie found.";
        message.textContent = "Please try other preferences.";
        bookLink.hidden = true;

    } else {

        title.textContent = movie;
        message.textContent =
            "This movie matches your selected preferences.";

        bookLink.href = "booking.html?movie=" + movieID;
        bookLink.hidden = false;
    }

    return false;
}


/*Register Page*/
function validateRegister() {
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var country = document.getElementById("country").value;

    var errMsg = "";


       // Username
    if (!username.match(/^[a-zA-Z0-9_]{5,}$/)) {
        errMsg += "Username must have at least 5 characters";
        errMsg += " Username must contain only letters, numbers or _.\n";
    }

    // Email
    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        errMsg += "Please enter a valid email.\n";
    }

    // Phone
    if (!phone.match(/^[0-9]{8,15}$/)) {
        errMsg += "Phone must contain 8 to 15 digits.\n";
    }


    if (password.length < 10) {
        errMsg += "Password MUST have at least 10 characters.\n";
    }

    if (!password.match(/[A-Z]/)) {
        errMsg += "Password MUST contain an Uppercase letter.\n";
    }

    if (!password.match(/[a-z]/)) {
        errMsg += "Password MUST contain a Lowercase letter.\n";
    }

    if (!password.match(/[0-9]/)) {
        errMsg += "Password MUST contain a Number.\n";
    }

    if (!password.match(/[^a-zA-Z0-9]/)) {
        errMsg += "Password MUST contain a Special Character.\n";
    }

    if (confirmPassword == "" ||
        password != confirmPassword) {
        errMsg += "Passwords do not match.\n";
    }

    var male = document.getElementById("male").checked;
    var female = document.getElementById("female").checked;
    var other = document.getElementById("other").checked;

    if (!male && !female && !other) {
        errMsg += "Please select your gender.\n";
    }

// Preferred Movie Genres
    var genres = document.getElementsByName("movieGenre");
    var genreSelected = false;

    for (var i = 0; i < genres.length; i++) {
        if (genres[i].checked) {
            genreSelected = true;
        }
    }

    if (genreSelected == false) {
        errMsg += "Please select at least one movie genre.\n";
    }

    // Country
    if (country == "") {
        errMsg += "Please select your country.\n";
    }

    // Display Errors
    if (errMsg != "") {
        document.getElementById("registerError").textContent =
            errMsg;
    } else {
        document.getElementById("registerError").textContent = "";
        alert("Registration details are valid!");
    }
    return false;
}



//Booking Page: Movie and Cost
function bookingMovie() {
    var movie = new URLSearchParams(window.location.search).get("movie");

    if (movie != null) {
        document.getElementById("movieSelect").value = movie;
    }

    calculateCost();
}


function calculateCost() {

    var movie = document.getElementById("movieSelect").value;
    var tickets = document.getElementById("ticketNumber").value;
    var type = document.getElementById("ticketType").value;

    var price = 0;


    if (movie == "elemental") {
        price = 17;
    } else if (movie == "megan") {
        price = 18;
    } else if (movie == "toy-story") {
        price = 15;
    } else if (movie == "inside-out") {
        price = 16;
    } else if (movie == "finding-nemo") {
        price = 15;
    } else if (movie == "tangled") {
        price = 16;
    }

// Ticket Type Discounts
    if (type == "Child") {
        price = price * 0.8;
    } else if (type == "Student") {
        price = price * 0.9;
    }


    document.getElementById("ticketPrice").textContent =
        price.toFixed(2);


    var total = 0;

    if (tickets > 0 && type != "") {
        total = price * tickets;
    }

    document.getElementById("totalCost").textContent =
        total.toFixed(2);
}


//Booking Page: Payment Details
function changePayment() {

    var payment =
        document.getElementById("paymentMethod").value;

    var voucher = document.getElementById("voucherDetails");
    var card = document.getElementById("cardDetails");

    if (payment == "Voucher") {
        voucher.hidden = false;
        card.hidden = true;

    } else if (payment == "Online") {
        voucher.hidden = true;
        card.hidden = false;

    } else {
        voucher.hidden = true;
        card.hidden = true;
    }
}


function copyBillingEmail() {

    var same = document.getElementById("sameEmail").checked;
    var email = document.getElementById("bookingEmail").value;

    if (same) {
        document.getElementById("billingEmail").value = email;
    } else {
        document.getElementById("billingEmail").value = "";
    }
}


function validateBooking() {

    // Customer Information
    var name = document.getElementById("fullName").value;
    var email = document.getElementById("bookingEmail").value;
    var phone = document.getElementById("bookingPhone").value;

    // Movie Details
    var movie = document.getElementById("movieSelect").value;
    var date = document.getElementById("screeningDate").value;
    var tickets = document.getElementById("ticketNumber").value;
    var type = document.getElementById("ticketType").value;
    var specialRequests =
        document.getElementById("specialRequests").value;

    // Payment Details
    var payment = document.getElementById("paymentMethod").value;
    var billing = document.getElementById("billingEmail").value;

    var errMsg = "";
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Full Name
    if (name.trim() == "") {
        errMsg += "Please enter your full name.\n";
    }

    // Email
    if (!email.match(emailPattern)) {
        errMsg += "Please enter a valid email address.\n";
    }

    // Phone Number
    if (!phone.match(/^[0-9]{10,}$/)) {
        errMsg += "Phone must contain at least 10 digits.\n";
    }

    // Movie Selection
    if (movie == "") {
        errMsg += "Please select a movie.\n";
    }

    // Screening Date and Time
    if (date == "") {
        errMsg += "Please select a screening date and time.\n";
    } else if (new Date(date) <= new Date()) {
        errMsg += "Screening date and time must be in the future.\n";
    }

    // Number of Tickets
    if (tickets == "" ||
        !Number.isInteger(Number(tickets)) ||
        Number(tickets) <= 0) {
        errMsg += "Please enter a valid number of tickets.\n";
    }

    // Ticket Type
    if (type == "") {
        errMsg += "Please select a ticket type.\n";
    }

    // Payment Method
    if (payment == "") {
        errMsg += "Please select a payment method.\n";
    }

    // Voucher Payment
    if (payment == "Voucher") {

        var voucher =
            document.getElementById("voucherCode").value;

        if (!voucher.match(/^[0-9]{12}$/)) {
            errMsg += "Voucher code must contain 12 digits.\n";
        }
    }

    // Online Payment
    if (payment == "Online") {

        var cardType =
            document.getElementById("cardType").value;

        var cardNumber =
            document.getElementById("cardNumber").value;

        if (cardType == "") {
            errMsg += "Please select a card type.\n";

        } else if (cardType == "Amex") {

            if (!cardNumber.match(/^[0-9]{15}$/)) {
                errMsg += "Amex must contain 15 digits.\n";
            }

        } else if (cardType == "Visa" ||
                   cardType == "Mastercard") {

            if (!cardNumber.match(/^[0-9]{16}$/)) {
                errMsg += "Visa/Mastercard must contain 16 digits.\n";
            }
        }
    }

    // Billing Email
    if (!billing.match(emailPattern)) {
        errMsg += "Please enter a valid billing email.\n";
    }

    // Display Error Messages
    if (errMsg != "") {
        document.getElementById("bookingError").textContent =
            errMsg;

        return false;
    }

    document.getElementById("bookingError").textContent = "";

    return true;
}



function addMovie(movie) {
    localStorage.setItem(movie, "yes");
    alert("Movie added to Watchlist!");
}


function removeMovie(movie) {
    localStorage.removeItem(movie);
    showMovies();
}


function showMovies() {

    var movies = ["elemental", "megan", "toy-story",
                  "inside-out", "finding-nemo", "tangled"];

    var empty = true;

    for (var i = 0; i < movies.length; i++) {

        var movie = movies[i];

        if (localStorage.getItem(movie) == "yes") {
            document.getElementById(movie).hidden = false;
            empty = false;
        } else {
            document.getElementById(movie).hidden = true;
        }
    }

    document.getElementById("emptyWatchlist").hidden = !empty;
}



function init() {
    // Recommendation Page
    var recommendForm = document.getElementById("recommendForm");

    if (recommendForm) {
        recommendForm.onsubmit = recommendMovies;
    }

    // Registration Page
    var registerForm = document.getElementById("registerForm");

    if (registerForm) {
        registerForm.onsubmit = validateRegister;
    }

    // Booking Page
    var bookingForm = document.getElementById("bookingForm");

    if (bookingForm) {

        bookingMovie();

        document.getElementById("movieSelect").onchange =
            calculateCost;

        document.getElementById("ticketNumber").oninput =
            calculateCost;

        document.getElementById("ticketType").onchange =
            calculateCost;

        document.getElementById("paymentMethod").onchange =
            changePayment;

        changePayment();

        document.getElementById("sameEmail").onchange =
            copyBillingEmail;

        document.getElementById("bookingEmail").oninput =
            copyBillingEmail;

        bookingForm.onsubmit = validateBooking;
    }

    // Watchlist Page
    if (document.getElementById("emptyWatchlist")) {
        showMovies();
    }
}

window.onload = init;

