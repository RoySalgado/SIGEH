$(function () {
    $(".btn").click(function () {
        $(".form-signin").toggleClass("form-signin-left");
        $(".form-signup").toggleClass("form-signup-left");
        $(".frame").toggleClass("frame-long");
        $(".signup-inactive").toggleClass("signup-active");
        $(".signin-active").toggleClass("signin-inactive");
        $(".forgot").toggleClass("forgot-left");
        $(this).removeClass("idle").addClass("active");
    });
});


    const registro=()=>{
        $(".nav").toggleClass("nav-up");
        $(".form-signup-left").toggleClass("form-signup-down");
        $(".success").toggleClass("success-left");
        $(".frame").toggleClass("frame-short");
    }
        
    


const iniciar=()=>{
    let email = document.getElementById("email").value;
    let pass = document.getElementById("password").value;
    if(email != "" && pass != ""){
        $(".btn-animate").toggleClass("btn-animate-grow");
        $(".welcome").toggleClass("welcome-left");
        $(".cover-photo").toggleClass("cover-photo-down");
        $(".frame").toggleClass("frame-short");
        $(".profile-photo").toggleClass("profile-photo-down");
        $(".btn-goback").toggleClass("btn-goback-up");
        $(".forgot").toggleClass("forgot-fade");
    }
    
}
        
const descargar =()=>{
    let response = grecaptcha.getResponse();
    if(response.length != 0){
        console.log("Hola")
    }else{
      
            Swal.fire({
                icon: 'error',
                title: `El captcha no ha sido aceptado`,
                text: 'Deberá aceptar el captcha para continuar'
            })
        
    }
}

var dateControl = document.querySelector('input[type="date"]');
dateControl.value = '2017-06-01';