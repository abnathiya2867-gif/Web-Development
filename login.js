function loginUser() {

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    // Empty fields
    if (username === "" || password === "") {
        alert("Please fill all fields!");
    }

    // Correct login
    else if (username === "nathi" && password === "1234") {

        alert("Login Successful ✅");

        window.location.href = "index.html";
    }

    // Wrong password
    else if (username === "admin" && password !== "1234") {

        alert("Incorrect Password ❌");
    }

    // Wrong username
    else {

        alert("Username Not Found ❌");
    }
}