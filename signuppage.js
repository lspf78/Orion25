function checkInputs(){
    let username = document.getElementById("uname").value;
    let password1 = document.getElementById("pass1").value;
    let password2 = document.getElementById("pass2").value;
    if (username == "" || password1 == "" || password2 == ""){
        alert("Please fill in all fields!");
    } else if (password1 != password2){
        alert("Passwords don't match");
    }
}