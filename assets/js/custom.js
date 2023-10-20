
$(document).ready(function(){
	"use strict";


    // 1. Scroll To Top 
		$(window).on('scroll',function () {
			if ($(this).scrollTop() > 600) {
				$('.return-to-top').fadeIn();
			} else {
				$('.return-to-top').fadeOut();
			}
		});
		$('.return-to-top').on('click',function(){
				$('html, body').animate({
				scrollTop: 0
			}, 1500);
			return false;
		});
	

	// 6. animation support

        $(window).load(function(){

            $(".single-slide-item-content h2, .single-slide-item-content p").removeClass("animated fadeInUp").css({'opacity':'0'});
            $(".single-slide-item-content button").removeClass("animated fadeInLeft").css({'opacity':'0'});
        });

        $(window).load(function(){

            $(".single-slide-item-content h2, .single-slide-item-content p").addClass("animated fadeInUp").css({'opacity':'0'});
            $(".single-slide-item-content button").addClass("animated fadeInLeft").css({'opacity':'0'});

        });
		
});	

// ********** fixed navbar ************

const navbar = document.getElementById("menu");

window.addEventListener("scroll", function () {
const scrollHeight = window.pageYOffset;
const navHeight = navbar.getBoundingClientRect().height;
if (scrollHeight > navHeight) {
    navbar.classList.add("fixed-nav");
} else {
    navbar.classList.remove("fixed-nav");
}

});

// ********** fixed navbar ************

function success(){
    swal({
          title: "Well done!",
          text: "Your message has been sent successfully!",
          icon: "success",
          button: "Ok",
    });
}

function error(){
    swal({
          title: "Oops...!",
          text: "Something went wrong, message could not be sent!",
          icon: "error",
          button: "Ok",
    });
}

function inputEmpty(){
    swal({
          title: "Oops...!",
          text: "Please, fill all fields!",
          icon: "error",
          button: "Ok",
    });
}

function firstname(){
    swal({
          title: "Oops...!",
          text: "First name must be min 3 and max 15 characters!",
          icon: "error",
          button: "Ok",
    });
}

function lastname(){
    swal({
          title: "Oops...!",
          text: "Last name must be min 3 and max 15 characters!",
          icon: "error",
          button: "Ok",
    });
}

function phoneError(){
    swal({
          title: "Oops...!",
          text: "Please, fill in a valid phone number!",
          icon: "error",
          button: "Ok",
    });
}

function message(){
    swal({
          title: "Oops...!",
          text: "Message must be min 10 and max 500 characters!",
          icon: "error",
          button: "Ok",
    });
}

function emailError(){
    swal({
          title: "Oops...!",
          text: "Please, fill in a valid email address!",
          icon: "error",
          button: "Ok",
    });
}


const form= document.getElementById('create-account-form');
const firstnameInput = document.querySelector('#firstname');
const lastnameInput = document.querySelector('#lastname');
const phoneInput = document.querySelector('#phone');
const emailInput = document.querySelector('#email');
const commentInput = document.querySelector('#comment');

let regPattern = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4}$/;

// let regPattern = /^[+]?[\s./0-9]*[(]?[0-9]{1,4}[)]?[-\s./0-9]{8,15}$/g;

function validate() {
    submit.addEventListener("click", (e) => {
        e.preventDefault();

        if (firstnameInput.value == "" || lastnameInput.value =="" || emailInput.value == "" || phoneInput.value == "" || commentInput.value == ""){
            inputEmpty();
        }
        else if(firstnameInput.value.trim().length <3 || firstnameInput.value.trim().length > 30){
            firstname();
        }
        else if(lastnameInput.value.trim().length <3 || lastnameInput.value.trim().length > 30){
            lastname();
        }
        else if(!(phoneInput.value.match(regPattern))){
            phoneError();
        }
        else if(!isEmailValid){
            emailError();
        }
        else if(commentInput.value.trim().length <5 || lastnameInput.value.trim().length > 500) {
            message();
        }
        else {
            sendmail(firstnameInput.value, lastnameInput.value,phoneInput.value , emailInput.value,commentInput.value);
            firstnameInput.value = '';
            lastnameInput.value = '';
            phoneInput.value = '';
            emailInput.value = ''; 
            commentInput.value = ''; 
            success();    
        }
    })
}

validate();

const serviceID = "service_ubjs7nq";
const templateID = "template_7710479";

function sendmail(fname, lname, phone, email, comment) {
    emailjs.send(serviceID, templateID, {
        from_name: fname + " " + lname,
        to_name: email + " with phone number " + phone,
        message: comment,
    })
}

function isEmailValid(email){
    const reg =/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    return reg.test(email);
}