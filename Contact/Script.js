function validateForm(){
	$errorMessage = "Veuillez remplir tous les champs correctement"; 
	
	if($("#ContentContact input[name='nom']").val() == "" || $("#ContentContact input[name='nom']").val() == undefined)
	{
		alert("1");
		$("#validFormMessage").text($errorMessage);
		return false;
	}
	if(!($("#ContentContact input[name='email']").val() != undefined  && validateEmail($("#ContentContact input[name='email']").val())))
	{
		$("#validFormMessage").text($errorMessage);
		return false;
	}
	if($("#ContentContact input[name='objet']").val() == "" || $("#ContentContact input[name='objet']").val() == undefined)
	{
		alert($("#ContentContact input[name='objet']").val());
		$("#validFormMessage").text($errorMessage);
		return false;
	}
	if($("#ContentContact textarea[name='message']").val() == "" || $("#ContentContact textarea[name='message']").val() == undefined)
	{
		alert("4");
		$("#validFormMessage").text($errorMessage);
		return false;
	}
	return true; 
}

function validateEmail(email) { 
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
} 
