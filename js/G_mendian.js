window.onload=function(){
    let lis=document.querySelectorAll(".xxka li")
    let list_box=document.querySelectorAll(".content .list_box")
    console.log(lis,list_box)
    for(let i=0;i<lis.length;i++){
        lis[i].onclick=function(){
            for(let j=0;j<lis.length;j++){
                list_box[j].style.zIndex='5';
                lis[j].classList.remove("hot")
            }
            lis[i].classList.add("hot")
            list_box[i].style.zIndex='10';
        }
    }

















}