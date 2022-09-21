let name;
let password;
let confirmPassword;
let phonenumber;
let dataRigister=[];
function checkValidate() {
    name=document.getElementById('loginName').value;
    password=document.getElementById('passWord').value;
    confirmPassword=document.getElementById('cfPassword').value
    phonenumber=document.getElementById('inputPhone').value;
            if (name==''){
                document.getElementById('aletLogin').innerHTML=`<label style="color: #ff0000;font-size: 20px">khong de trong cac truong input</label>`
            }
}
