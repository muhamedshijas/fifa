var emailError=document.getElementById('email-error');

function submitHandle(){
    alert('YOUR EMAIL SENT');
}

function validteEmail(){
    var email=document.getElementById('contact-email').value;
    var validRegex =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
   if (email.match(validRegex)) {
    document.getElementById('email-error').innerText="valid"
    document.getElementById('email-error').style.color="green"
       return true;
    } else {
        console.log("Invalid email address!");
        document.getElementById('email-error').innerText="invalid"
    document.getElementById('email-error').style.color="red"

    return false;
  }
}



