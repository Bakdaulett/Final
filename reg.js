//index js

$(document).ready(function(){

    $("#tagline-container > div").removeClass("opaque");

    $(document).mousemove(function(event){
        $(".cursor1").css({
            "top": event.pageY,
            "left": event.pageX
        });
    });



    $(".mouse-bulge").mouseenter(function(){
        $(".cursor1, .cursor2").animate({
            opacity: "0.5",
            height: "45px",
            width: "45px"
        }, 50);
    }).mouseleave(function(){
        $(".cursor1, .cursor2").animate({
            opacity: "0.7",
            height: "25px",
            width: "25px"
        }, 50);
    });


    //console.log($("#overlay-navbar").height());



    $("#overlay-trigger").click(function(){
        $(this).toggleClass("open");

        //$("#overlay-navbar").css("height", "100%");

        if($("#overlay-navbar").height() == 0){
            $("#overlay-navbar").animate({
                height: '100%'
            }, 300);

            $(".cursor1").addClass("hidden");
            $(".cursor2").removeClass("hidden");

            $(document).mousemove(function(event2){
                $(".cursor2").css({
                    "top": event2.pageY,
                    "left": event2.pageX
                });
            });

        } else {
            $("#overlay-navbar").animate({
                height:'0'
            }, 300);

            $(".cursor2").addClass("hidden");
            $(".cursor1").removeClass("hidden");

        }
    });

    $(window).scroll(function(){
        $(".show-me").each(function(raju){
            var base_of_object = $(this).offset().top + $(this).outerHeight();
            var base_of_window = $(window).scrollTop() + $(window).height();

            if(base_of_window > base_of_object){
                $(this).animate({'opacity':'1'},1000);
            }
        })
    });

    $("#left-angle").click(function(){

        $("#services-list").animate({
            scrollLeft: $("#services-list").scrollLeft()-810
        }, 300);

    });

    $("#right-angle").click(function(){
        $("#services-list").animate({
            scrollLeft: $("#services-list").scrollLeft()+810
        }, 300);
    });

    $("#down").click(function(e){

        if(this.hash !== ""){
            e.preventDefault();
        }

        var hash = this.hash;

        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 300, function(){
            window.location.hash = hash;
        });

    });

});


// registration
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

function check() {
    let x1 = document.getElementById("pass").value;
    let x2 = document.getElementById("pass2").value;
    if (x1===x2 && x1.length >= 8) {
        window.alert("Congratulations! You logged in successfully!");
    } else {
        document.getElementById("pass").value = "";
        document.getElementById("pass2").value = "";
    }
}

document.querySelector("form").addEventListener('submit',(event)=>{
    event.preventDefault();
})
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
            if (result === "login") {
                window.open("/Final/INDEX/index.html", "_self")
            } else window.alert("Wrong login or password")
        },
        error: function () {
            console.log('error');
            window.alert("Error!");
        }
    });
}


function reg_php(email, pass, pass2, username) {
    if (pass === pass2) {
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

// function onClicking(element) {
//     var a = element;
//
// }


