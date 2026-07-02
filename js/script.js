document
    .getElementById("contactForm")
    .addEventListener("submit", function (event) {

        event.preventDefault();

        let name = document.getElementById("name").value;

        let email = document.getElementById("email").value;

        let phone = document.getElementById("phone").value;

        if (name == "" || email == "" || phone == "") {

            alert("Please fill all the fields.");

            return;

        }

        alert("Thank you! Your message has been submitted successfully.");

    });