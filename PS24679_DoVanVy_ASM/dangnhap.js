var x = true;
function hienthi() {
    if (x) {
        document.getElementById("mk").type = "text";
        x = false;
    } else {
        document.getElementById("mk").type = "password";
        x = true;
    }
}

function kiemtra() {
    var thongbao = " ";

    var ten = document.getElementById("tendn").value;
    if (ten.length == 0) {
        thongbao += "nhập lại tên.<br>";
    }
    var pass = document.getElementById("mk").value;
    if (pass.length == 0) {
        thongbao += "nhập lại mật khẩu";
    }
    document.getElementById("kq").innerHTML = thongbao;
}