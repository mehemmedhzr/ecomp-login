$(function() {
	'use strict';

	
  $('.form-control').on('input', function() {
	  var $field = $(this).closest('.form-group');
	  if (this.value) {
	    $field.addClass('field--not-empty');
	  } else {
	    $field.removeClass('field--not-empty');
	  }
	});

});

function togglePasswordVisibility() {
	const passwordInput = document.getElementById("password");
	const passwordToggle = document.querySelector(".password-toggle");
  
	if (passwordInput.type === "password") {
	  passwordInput.type = "text";
	  passwordToggle.innerHTML = '<i class="fa fa-eye" aria-hidden="true"></i>';
	} else {
	  passwordInput.type = "password";
	  passwordToggle.innerHTML = '<i class="fa fa-eye-slash" aria-hidden="true"></i>';
	}
  }