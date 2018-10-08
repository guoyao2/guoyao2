$(function(){
    let alert=$(".alert")
    let yes=$(".one")
    let no=$(".two")
    let off=$(".off")
    let bangding=$(".binding")
    bangding.click(function(){
        let index=$(this).index()
        
        alert.css("display","block")
        yes.click(function(){
            
            alert.css("display","none")
           
        })
        $(this).eq(index).text("已绑定")
        no.click(function(){
            alert.css("display","none")
        })

    })
    off.click(function(){
        alert.css("display","none")
    })
    
})