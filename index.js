const submit = document.getElementById('submit');
const userName = document.getElementById('username');
const passWord = document.getElementById('password');

submit.onclick = function() {
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
  if (Boolean(username) == false || Boolean(password) == false) {
    window.alert('Vui lòng không để trống.')
  }
  else if (username == '1' && password == '1') {
    window.location.href = 'quantri.html';
  } else {
    window.alert(`Tài khoản hoặc mật khẩu không chính xác!`)
  }
}