var username, email,message;
const emailcheck = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

document.getElementById("submit").onclick = function () {
    username = document.getElementById("name").value;
    email = document.getElementById("email").value;
    message= document.getElementById("message").value;

    if (!username) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Please fill in your name.",
        });
    } else if (!email) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "You forgot to enter the email.",
        });
    } else if (!emailCheck.test(email)) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Invalid email format! Please enter a valid email.",
        });
    } else if (!message) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "No offence, but it would be useless to submit it without a message.",
        });
    } else {
        Swal.fire({
            title: "Good job!",
            text: "You clicked the button!",
            icon: "success",
            timer: 10000,
        });
    }
};
