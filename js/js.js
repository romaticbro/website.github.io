var obtn = document.querySelector(".ms");//显示的文字
var xiala = document.querySelector(".div3");//隐藏的表格
var iss = true;
obtn.addEventListener("click", function () {
    if (iss==true) {
        xiala.style.display = 'block';
        // obtn.innerHTML = '所有Microsoft'
        iss = false;
    } else {
        xiala.style.display = 'none';
        // obtn.innerHTML = '所有Microsoft'
        iss = true;
    }
});
var one = document.getElementById("one");