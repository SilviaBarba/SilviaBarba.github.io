function valFirstName(){ //validation of the name, must be letters and between 2-20
	var fName= document.getElementById("firstName").value;
	var re1= /^[a-zA-Z\s\'\-]{2,20}$/; 
	
	if(re1.test(fName)){
		document.getElementById("fnPrompt").style.color="green";
		document.getElementById("fnPrompt").innerHTML="<strong>Good!</strong>";
		return true;
	}
	else {
		document.getElementById("fnPrompt").style.color="red";
		document.getElementById("fnPrompt").innerHTML="<strong>Try again</strong>";
		return false;
	}
}

function valLastName(){ //validation of the name, must be letters and between 2-20
	var lName= document.getElementById("lastName").value;
	var re3= /^[a-zA-Z\s\'\-]{2,25}$/; 
	
	if(re3.test(lName)){
		document.getElementById("lnPrompt").style.color="green";
		document.getElementById("lnPrompt").innerHTML="<strong>Well done</strong>";
		return true;
	}
	else {
		document.getElementById("lnPrompt").style.color="red";
		document.getElementById("lnPrompt").innerHTML="<strong>Try again</strong>";
		return false;
	}
}

function validatePass(){ //validation of the pass, will display a message if the passwords do not match
	var pass1= document.getElementById("newPassword").value;
	var pass2= document.getElementById("confirmPassword").value;
				
	if(pass1==pass2)
	{
		return true;
	}
	else
	{
		alert("passwords do not match");
		return false;
	}
		return false;
	}


function calcData(){ // Will take all the data and show it up on the screen.
	var firstName= document.getElementById("firstName").value;
	var lastName= document.getElementById("lastName").value;
	var fullName= firstName+" "+lastName;
	var Selector= document.getElementById("idSelector").value;
	var DescReq= document.getElementById("msg").value;
	var gtype= 	document.getElementsByName("gender").value;
	var genderSelector;
		if(document.getElementById("gender1").checked){		
			var genderSelector ='Female';
		} else { 
            var genderSelector ='Male';
		}

	document.getElementById("displayResult").innerHTML = "<h2>Thank you for adding the information.</h2>";
	document.getElementById("displayResult").innerHTML += "<p>" +"Dear " + fullName.toUpperCase()  +"</p>";
	document.getElementById("displayResult").innerHTML += "<p>" +"Is nice to know that you also like sports, next time we should talk about " + Selector;
	document.getElementById("displayResult").innerHTML += "<p>" +"Your gender is: " +  genderSelector ;	
	document.getElementById("displayResult").innerHTML += "<p>Your comments: " + DescReq + "</p>";


}


