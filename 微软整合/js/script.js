// window.onload = function(){
//     var showModelBtn = document.querySelector(".btn");
//     var modelBox = document.querySelector(".model_box");

//     showModelBtn.addEventListener("click",function(){
//         modelBox.style.display = "block";
//     })
// }

// window.onload = function(){
//     var btn = document.querySelector(".btn_ul");
//     var model = document.querySelector(".model_box_ul");

//     btn.addEventListener("click",function(){
//         model.style.display = "block";
//     })
// }



// var showModelBtn = document.querySelector(".btn");
// var modelBox = document.querySelector(".model_box");
// showModelBtn.onclick = function(){
//     if (modelBox.style.dispay = "none"){
//         modelBox.style.dispay = "block";
//     }else{
//         modelBox.style.dispay = "none";
//     }
// }


function Show_Hidden(obj){
    if(obj.style.display=="block"){
        obj.style.display='none';
     }else{
        obj.style.display='block';
    }
}
window.onload=function(){
    var olink=document.querySelector(".btn");
    var odiv=document.querySelector(".model_box");
    olink.onclick=function(){
        Show_Hidden(odiv);
        return false;
    }
}

