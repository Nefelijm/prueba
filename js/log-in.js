$(document).ready(function(){
//Funcion para validar el correo electronico 

$('.email').focusout( function(){
    var PATTERNEMAIL = /^[a-zA-Z0-9\._-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,3}$/;
    var email = PATTERNEMAIL.test($(this).val())
    if (email === false) {
       alert('Ingrese correo valido');
       $(this).val('');

    }
    else{

    }

//Funcion para validar la contraseña

$('.password').on('input', function(){
   
    if ($(this).val().length > 8) {
        alert('La contraseña debe estar formada por 8 caracteres');
    } else {
       
    }

});

  



//Funcion para Registrar usuario
    
$('#register').on('click',function(event){

    var email = $('#email-log').val();
    var password = $('#password-log').val();


    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode) {
            alert('error');
        }
        // ...
    });


    

});







});