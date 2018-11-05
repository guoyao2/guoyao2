window.onload=function(){
    let welcome=document.querySelector(".welcome")
    let zhezhao=document.querySelector(".zhezhao")
    let flag=document.querySelector(".flag")
    welcome.onclick=function(){
        zhezhao.style.display="block"
    }
    flag.onclick=function(){
        zhezhao.style.display="none"
    }
}