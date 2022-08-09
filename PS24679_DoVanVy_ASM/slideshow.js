
var i = 0;
var arr = new Array("xxxbanner1.jpg", "xxxbanner2.jpg", "xxxbanner3.jpg", "xxxbanner4.jpg");

function back() {
    if (i > 0) {
        i--;
    } else {
        i = arr.length - 1;
    }
    document.getElementById("hinh").src = "hinh/xxxbanner" + (i + 1) + ".webp";
}

function next() {
    if (i < arr.length - 1) {
        i++;
    } else {
        i = 0;
    }
    document.getElementById("hinh").src = "hinh/xxxbanner" + (i + 1) + ".webp";
}

