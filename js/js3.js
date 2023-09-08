window.onload=()=>{
    var changeImage = document.querySelector(".Img");
    var left = document.querySelector(".left");
    var right = document.querySelector(".right");
    var img = ["RWLN4t.jpg","RWLN4t2.jpg"]
    var allindex = 0
    var time = setInterval(change,2000);
    function change(){
       allindex++;
        if(allindex>1){
            allindex=0;
        } 
        changeImage.style.backgroundImage="url(image/" + img[allindex] + ")"
    }
    left.addEventListener("mouseenter",()=>{
        clearInterval(time)
    })
    left.addEventListener("mouseleave",()=>{
        time = setInterval(change,2000);
    })
    right.addEventListener("mouseenter",()=>{
        clearInterval(time)
    })
    right.addEventListener("mouseleave",()=>{
        time = setInterval(change,2000);
    })
    left.addEventListener("click",()=>{
        allindex--;
        if(allindex<0){
            allindex=1
        }
        changeImage.style.backgroundImage="url(image/" + img[allindex] + ")"
    })
    right.addEventListener("click",()=>{
        allindex++;
        if(allindex>1){
            allindex=0
        }
        changeImage.style.backgroundImage="url(image/" + img[allindex] + ")"
    })
}