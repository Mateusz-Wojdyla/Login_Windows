document.getElementById("register").addEventListener("click", function () {
    var loginBox = document.querySelector(".box-Login");
    var registerBox = document.querySelector(".register");

    // Sprawdzamy, czy loginBox jest aktualnie widoczny
    var isLoginVisible = window.getComputedStyle(loginBox).display !== "none";

    // Jeśli loginBox jest widoczny, ukrywamy go i pokazujemy registerBox, a vice versa
    if (isLoginVisible) {
        loginBox.style.display = "none";
        registerBox.style.display = "flex";
    } else {
        loginBox.style.display = "flex";
        registerBox.style.display = "none";
    }
});

// Dodajemy obsługę kliknięcia na przycisk "Exit"
document.getElementById("exit-btn").addEventListener("click", function () {
    var loginBox = document.querySelector(".box-Login");
    var registerBox = document.querySelector(".register");

    // Zamykamy stronę i powracamy do widoku loginBox
    window.location.reload(); // Możesz także użyć window.location.href = "adres-strony";
    // lub history.back(); aby wrócić do poprzedniej strony w historii
});