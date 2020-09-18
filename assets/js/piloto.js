 function validar(){

             	var name = document.getElementById("name");
             	var email = document.getElementById("email");
             	var message = document.getElementById("message");

             	if (name.value == ""){
             		alert("Nome não informado");
             		name.focus();
             		return;
             	}
             	if (email.value == ""){
             		alert("Email não informado");
             		email.focus();
             		return;
             	}
             	if (message.value == ""){
             		alert("Mensagem não informada");
             		message.focus();
             		return;
             	} else {
             		alert("Mensagem enviada");
             	}
                  
                  
             }
