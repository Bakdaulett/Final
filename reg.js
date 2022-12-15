const container = document.querySelector(".container"),
    passwordHideShow = document.querySelectorAll(".showHidePw"),
    passwordFields = document.querySelectorAll(".password"),
    signUp = document.querySelector(".signup-link"),
    login = document.querySelector(".login-link");

passwordHideShow.forEach(eyeIcon => {
    eyeIcon.addEventListener("click", () => {
        passwordFields.forEach(pwField => {
            if (pwField.type === "password") {
                pwField.type = "text";
                passwordHideShow.forEach(icon => {
                    icon.classList.replace("uil-eye-slash", "uil-eye");
                })
            } else {
                pwField.type = "password";
                passwordHideShow.forEach(icon => {
                    icon.classList.replace("uil-eye", "uil-eye-slash");
                })
            }
        })
    })
})

signUp.addEventListener("click", () => {
    container.classList.add("active");
});
login.addEventListener("click", () => {
    container.classList.remove("active");
});

// function check() {
//     let x1 = document.getElementById("p1").value;
//     let x2 = document.getElementById("p2").value;
//     if (x1===x2 && x1.length >= 8) {
//         window.alert("Congratulations! You logged in successfully!");
//     } else {
//         document.getElementById("p1").value = "";
//         document.getElementById("p2").value = "";
//     }
// }


function log_php(lastEmail, lastPassword) {
    // var link = document.createElement("a")
    // link.href = "index.html";
    // link.target = "_blank";
    $.ajax({
        url: 'log.php',
        type: 'POST',
        data: {email: lastEmail, password: lastPassword},
        success: function (result) {
            console.log(result);
            if (result == "Logged IN!") {
                alert("fasfafs")
                window.open("index.html", "_self")
            } else window.alert("Wrong login or password")
        },
        error: function () {
            console.log('error');
            window.alert("Error!");
        }
    });
}

function reg_php(email, pass, pass2, username) {
    if (pass == pass2) {
        $.ajax({
            url: 'reg.php',
            type: 'POST',
            data: {email: email, password: pass, username: username},
            success: function (result) {
                console.log(result);
                if (result === "Success!")
                    window.alert("Success");
                else window.alert("Wrong input");
            },
            error: function () {
                console.log("Error");
            }
        });
    } else {
        alert("different password inputs!");
    }
}

function onClicking(element) {
    var a = element;

}

function registration() {
    var link = document.createElement("a")
    link.href = "registration.html";
    link.target = "_self";
    link.click()
}
