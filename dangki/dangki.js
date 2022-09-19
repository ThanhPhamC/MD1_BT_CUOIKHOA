let name;
let password;
let confirmPassword;
let email;
let phonenumber;

function checkValidate() {
    name=document.getElementById('loginName').value;
    password=document.getElementById('password').value;
    confirmPassword=document.getElementById('password').value
    email=document.getElementById('email').value;
    phonenumber=document.getElementById('phone').value;
    if (name===""){
        document.getElementById('hienThi').innerHTML= `<label style="color:red;"> Không để trống</label>>`

    
}
function register() {

}