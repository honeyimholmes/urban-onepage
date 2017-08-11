document.addEventListener("DOMContentLoaded", function () {
    
    var myForm = document.querySelector("form");
	var allInputs = document.querySelectorAll("input");
		  
	myForm.addEventListener("submit", function(event) {
		event.preventDefault();
		
		var name = allInputs[0].value;
		var surname = allInputs[1].value;
		var email1 = allInputs[2].value;
		var email2 = allInputs[3].value;
		var errorMessage = document.querySelector(".error-message");
		  
		if (name.length < 4) {
            errorMessage.style.display = "block";
			errorMessage.innerHTML = "Podane imię jest zbyt krótkie";
			return false;		  
		}

		if (email1 !== email2) {
            errorMessage.style.display = "block";
			errorMessage.innerHTML = "Podane adresy e-mail nie są identyczne";
			return false;		  
		}
        
        if (email1.indexOf('@') <= 0 || email2.indexOf('@') <= 0) {
            errorMessage.style.display = "block";
			errorMessage.innerHTML = "Adres e-mail nie jest poprawny";
			return false;
        }
		
		  
		myForm.submit();
	});	
    
    var hamburger = document.querySelector(".hamburger");
    var responsiveMenu = document.querySelector(".responsive-menu");
    
    hamburger.addEventListener("click", function() {
        responsiveMenu.classList.toggle("display");
    })
    
});