//---modal---register------
$('#exampleModal3').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget) // Button that triggered the modal
    var recipient = button.data('whatever')
    var modal = $(this)
    modal.find('.modal-title').text('Register ')
    modal.find('.modal-body input').val()
})
//------modal--------login-------
$('#exampleModal2').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget) // Button that triggered the modal
    var recipient = button.data('whatever')
    var modal = $(this)
    modal.find('.modal-title').text('Login ')
    modal.find('.modal-body input').val()
})
let Adminn = new User(1, 'pham thanh', 'thanhpham@gmail.com', 'thanhpc', 'lieungo')
let reName;
let reEmail;
let idLogin;
let pass;
let cFpass;
let dataUser = [];
dataUser.push(Adminn)
window.localStorage.setItem('List_data', JSON.stringify(dataUser));
let checkRegister=0;
let getListdata;

function CheckRegister() {
    getListdata = JSON.parse(window.localStorage.getItem('List_data'));
    reName = document.getElementById('reName').value;
    reEmail = document.getElementById('reMail').value;
    idLogin = document.getElementById('reNamelogin').value;
    pass = document.getElementById('rePass').value;
    cFpass = document.getElementById('reCfPass').value;
    for (let i = 0; i < getListdata.length; i++) {
        if (reName == '') {
            document.getElementById('alertName').innerHTML = `<lable style="color: red">*Không để trống*</lable>`
        } else {
            document.getElementById('alertName').innerHTML = `<lable style="color: #0033ff">Full name: </lable>`
        }
        if (reEmail == getListdata[i].email) {
            document.getElementById('alertMail').innerHTML = `<lable style="color: red">*Email đã tồn tại*</lable>`
        } else {
            if (reEmail == '') {
                document.getElementById('alertMail').innerHTML = `<lable style="color: red">*Không để trống*</lable>`
            } else {
                if (reEmail.search('@') != -1) {
                    document.getElementById('alertMail').innerHTML = `<lable style="color: #0033ff">Email: </lable>`
                } else {
                    document.getElementById('alertMail').innerHTML = `<lable style="color: red">*Sai định dạng*</lable>`
                }
            }
        }
        if (idLogin==getListdata[i].username){
            document.getElementById('alertNamelogin').innerHTML = `<lable style="color: red">*ID login đã tồn tại*</lable>`
        }else{
            if (idLogin == '') {
                document.getElementById('alertNamelogin').innerHTML = `<lable style="color: red">*Không để trống*</lable>`
            } else {
                document.getElementById('alertNamelogin').innerHTML = `<lable style="color: #0033ff">ID Login: </lable>`
            }
        }
        if (pass == '') {
            document.getElementById('alertPassword').innerHTML = `<lable style="color: red">*Không để trống*</lable>`
        } else {
            if (idLogin == pass) {
                document.getElementById('alertPassword').innerHTML = `<lable style="color: red">*Không được trùng với ID login*</lable>`

            } else {
                document.getElementById('alertPassword').innerHTML = `<lable style="color: #0033ff">Password: </lable>`
            }
        }
        if (cFpass == '') {
            document.getElementById('alertCfPass').innerHTML = `<lable style="color: red">*Không để trống*</lable>`
        } else {
            if (pass != cFpass) {
                document.getElementById('alertCfPass').innerHTML = `<lable style="color: red">*Không trùng khớp với Password *</lable>`

            } else {
                document.getElementById('alertCfPass').innerHTML = `<lable style="color: #0033ff">Confirm password: </lable>`
            }
        }
    }
}

function registerNew() {

    let id;
    if (dataUser == null) {
        dataUser = []
        id = 1;
    } else {
        dataUser = JSON.parse(window.localStorage.getItem('List_data'));
        id = dataUser[dataUser.length - 1].iduser + 1
    }
    if (reName == '' && reEmail == '' && idLogin == '' && pass == '' && cFpass == '') {
        document.getElementById('exampleModalLabel3').innerHTML = `<h5 style="color: red">Đăng kí không thành công nhân !</h5>`
    } else {
        if (reName == '' || reEmail == '' || idLogin == '' || pass == '' || cFpass == '' || pass != cFpass || reEmail.search('@') == -1) {
            document.getElementById('exampleModalLabel3').innerHTML = `<h5 style="color: red">Đăng kí không thành công !</h5>`
        } else {
            document.getElementById('exampleModalLabel3').innerHTML = `<h5 style="color: red">Đăng kí thành công nhân !</h5>`
            let newUser = new User(id, reName, reEmail, idLogin, pass)
            dataUser.push(newUser)
            window.localStorage.setItem('List_data', JSON.stringify(dataUser))
        }
    }
}
let namelogin;
let passlogin;
function loginHome() {
    getListdata = JSON.parse(window.localStorage.getItem('List_data'));
    namelogin=document.getElementById('nameLogin').value;
    passlogin=document.getElementById('passLogin').value;
    for ( let i=0;i<getListdata.length;i++){
        if (namelogin!=getListdata[i].username|| passlogin!=getListdata[i].password||namelogin==''||passlogin==''){
            document.getElementById('alertLogin').innerHTML=`<label style="color: #fa0000" >*ID login hoặc password không tồn tại*</label>`
        }else {
            document.getElementById('alertLogin').innerHTML=`<label style="color: #fa0000" >*ok*</label>`
            window.location.href='/'
        }
    }
}
