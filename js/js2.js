var obtn = document.querySelector(".ms");//显示的文字
var sanji = document.querySelector(".div3");//隐藏的表格
var is = true;
console.log(1111);
obtn.addEventListener("click", function () {
    if (is==true) {
        sanji.style.display = 'block';
        is = false;
    } else {
        sanji.style.display = 'none';
        is = true;
    }
});