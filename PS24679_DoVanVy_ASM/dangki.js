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

function hienthi1() {
    if (x) {
        document.getElementById("mk1").type = "text";
        x = false;
    } else {
        document.getElementById("mk1").type = "password";
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
        thongbao += "nhập lại mật khẩu<br>";
    }

    var pass1 = document.getElementById("mk1").value;
    if (pass1.length == 0) {
        // thongbao += "nhập lại mật khẩu<br>";
    } else if (pass != pass1) {
        thongbao += "mật khẩu không trùng nhau <br>";
    }

    var sdt = document.getElementById("sdt").value;
    if (sdt.length == 0) {
        thongbao += "nhập lại số điện thoại";
    } else if (isNaN(sdt)) {
        thongbao += "số điện thoại phải là số";
    } else if (sdt.length < 10) {
        thongbao += "số điện thoại phải có 10 số";
    }

    // var sss = document.getElementsByClassName("ktr");
    // if (sss.checked == false) {
    //     thongbao += "chấp nhận các điều khoản";
    // }

    document.getElementById("kq").innerHTML = thongbao;
}

