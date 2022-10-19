function validate(){
    var username=document.getElementById('username').value
    var email=document.getElementById('email').value
    var password=document.getElementById('password').value
    var cpassword=document.getElementById('cpassword').value
    checkusername(username)
    checkemail(email)
    checkpassword(password)
    passwordsmatch(password,cpassword)
}

function checkusername(username){
    if(username.length>7){
        document.getElementById('username').classList.add('success')
        document.getElementById('username').classList.replace('error','success')
        document.getElementById('username_error').innerText=''
    }
    else{
        document.getElementById('username').classList.add('error')
        document.getElementById('username_error').innerText='username must be 8 characters long'
    }
}

function checkemail(email){
    if(email.length>7 && email.includes('@') && email.includes('.')){
        document.getElementById('email').classList.add('success')
        document.getElementById('email').classList.replace('error','success')
        document.getElementById('email_error').innerText=''
    }
    else{
        document.getElementById('email').classList.add('error')
        document.getElementById('email_error').innerText='Enter valid email'
    }
}

function checkpassword(password){
    if(password.length>7 && password.includes('.')){
        document.getElementById('password').classList.add('success')
        document.getElementById('password').classList.replace('error','success')
        document.getElementById('password_error').innerText=''
    }
    else{
        document.getElementById('password').classList.add('error')
        document.getElementById('password_error').innerText='Password must be 8 letters long'
    }
}

function passwordsmatch(password, cpassword){
    if(password==cpassword && password!='' && password.includes('.')){
        document.getElementById('cpassword').classList.add('success')
        document.getElementById('cpassword').classList.replace('error','success')
        document.getElementById('cpassword_error').innerText=''
    }
    else{
        document.getElementById('cpassword').classList.add('error')
        document.getElementById('cpassword_error').innerText='Passwords not match'
    }
}