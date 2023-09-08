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

// function getBycClassName(obj,btn){
//     ojb目标元素，cls要获得的clas名
//     将目标下的所有子元素获取到
//     var element = ojb.getElementByTagName(".model_box")
//     定义一个数组，存放获取得到的classname = "cls" 的所有值
//     var result = [btn,model]
//     for (var i = 0; i < element.lengtn; i++){
//         if(element[i].className == cls){
//             result.push(element[i]);
//         }
//     }
//     return result;
// }
// 返回一个数组，接下来先获取到所有有用的标签

// var btn = document.getElementById("btn");
// var model = getByClassName(btn,"model")

// // 主要的函数
// function dianji(){
//     // 先初始化所有的model 显示为none, 利用立即调用函数为每一个绑定所有的model显示为none;
//     for (var i = 0; i < btn.lengtn; i++) {
//         (function(index){
//             btn[index].style.display = "none";
//         })(i);
//     }
//     // 在利用立即调用函数为每一个btn绑定点击事件
//     for(var i = 0; i < btn.lengtn; i++){
//         (function(value){
//             btn[value].onlick = function(){
//                 toggle(model[value]);
//             }
//         })(i);
//     }
// }
// dianji();

// // 使用toggle()函数进行判断，为每一个model添加相应的动作
// function toggle(element){
//     if(element.style.display == "none"){
//         element.style.display = "block";
//     }
//     else if(element.style.display == "block"){
//         element.style.display = "none";
//     }
//     else{
//         alert('chucuo')
//     }
// }