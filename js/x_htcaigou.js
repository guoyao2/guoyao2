$(function(){
    // 添加采购员
    let add = $(".s_add")
    let add_page = $(".add_cgy")
    let a_esc = $(".add_cgy .esc")
    add.click(function(){
        add_page.css("display","block")
        $("body").css("overflow","hidden")
    })
    a_esc.click(function(){
        add_page.css("display","none")
        $("body").css("overflow","")
    })

    // 删除采购员
    let remove = $(".controls .icon-icon--")
    let re_page = $(".remove_cgy")
    let r_esc = $(".remove_cgy .esc")
    remove.each(function(i,d){
        // console.log(index,d)
        $(d).click(function(){
            re_page.css("display","block")
            $("body").css("overflow","hidden")
        })
        r_esc.click(function(){
            re_page.css("display","none")
            $("body").css("overflow","")
        })

    })





})