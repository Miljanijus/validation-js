
function loging(){
    var name = document.querySelector('.username');
    var password = document.querySelector('.password');
    var text = document.querySelector('.txtUser');
    var text1 = document.querySelector('.txtPass');
    var userCorrect = document.querySelector('.check-user');
    var userIncorrect = document.querySelector('.incorrect-user');
    var passCorrect = document.querySelector('.check-pass');
    var passIncorrect = document.querySelector('.incorrect-pass');

    if(name.value == "" || name.value == null){
        text.innerHTML = "*please, enter username";
        userIncorrect.style.display = "block";
        name.style.border = "1px solid red";
        
    }else if(name.value != "new_user"){
        text.innerHTML = "*please, enter valid username"
        userIncorrect.style.display = "block";
        name.style.border = "1px solid red";
    }else if(name.value === "new_user"){
        text.innerHTML = "";
        userIncorrect.style.display = "none";
        userCorrect.style.display = "block";
        name.style.border = "1px solid green";
    }

    if(password.value == "" || password.value == null){
        text1.innerHTML = "*please, enter password";
        passIncorrect.style.display = "block";
        password.style.border = "1px solid red";
    }else if(password.value != "123456789"){
        text1.innerHTML = "*please, enter valid password";
        passIncorrect.style.display = "block";
        password.style.border = "1px solid red";   
    }else if(password.value === "123456789"){
        text1.innerHTML = "";
        passIncorrect.style.display = "none";
        passCorrect.style.display = "block";
        password.style.border = "1px solid green";
    }
    
}