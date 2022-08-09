
// document.getElementById("giohang").style.display = "block|none";
function showhide() {
    var x = document.getElementById('giohang');
    // if (x.style.display == "block") {
    //     x.style.display = "none";
    // } else {
    //     x.style.display = "block";
    // }
    x.style.display = x.style.display == "block" ? "none" : "block";
}


var giohang = [];
function addcart(x) {
    var pa = x.parentNode;
    var hinh = pa.children[0].src;
    var tensp = pa.children[1].innerHTML;
    var gia = pa.children[2].children[0].innerHTML;
    console.log(hinh + " " + tensp + " " + gia);

    var soluong = 1;
    var flag = 1;

    // for (var i = 0; i < giohnag.length; i++) {
    //     var ten = giohang[i][1];
    //     if (tensp == ten) {
    //         soluong++;
    //         flag == 0;
    //         break;
    //     }
    
    //     console.log(soluong);
    // }

    if (flag == 1) {
        var item = [hinh, tensp, gia, soluong];
        giohang.push(item);
        console.log(giohang);
    }






    function showcart() {
        var kq = "";
        var tonggiatri = 0;
        for (let i = 0; i < giohang.length; i++) {
            kq += '<tr>';
            kq += '<td>' + (i + 1) + '</td>';
            kq += '<td><img src="' + giohang[i][0] + '"></td>';
            kq += '<td>' + giohang[i][1] + '</td>';
            kq += '<td>' + giohang[i][2] + '</td>';
            kq += '<td>' + soluong + '</td>';
            kq += '<td>' + (giohang[i][3] * giohang[i][2]) + '</td>';
            kq += '</tr>';
            tonggiatri += (giohang[i][3] * giohang[i][2]);
        }
        kq += '<tr>';
        kq += '<td colaspan="5">tổng giá trị:</td>';
        kq += '<td></td>';
        kq += '<td></td>';
        kq += '<td></td>';
        kq += '<td></td>';
        kq += '<td>' + tonggiatri +"<sup>đ</sup>"+ '</td>';
        kq += '</tr>';
        return kq;
    }
    document.getElementById("mycart").innerHTML = showcart();

}
