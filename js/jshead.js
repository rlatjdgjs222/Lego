//signINOUT ☆☆☆☆☆☆☆☆☆☆☆☆//
let loghead = JSON.parse(localStorage.getItem("log"))
console.log(loghead)
if(loghead==22){
    $('#headerSign span').text("SIGN-OUT")
    $('#headerSign div').addClass("loging")
    $(document).on("click","#headerSign",function(){
        $('#headerMessageBox').removeClass("unview")
    })
}
if(loghead==11){
    $('#headerSign span').text("SIGN-IN")
    $('#headerSign div').removeClass("loging")
    $(document).on("click","#headerSign",function(){
        location.href='./signin.html'
    })
}

$(document).on("click",".headerMessageBoxYes", function(){
    $('#headerSign span').text("SIGN-IN")
    $('#headerSign div').removeClass("loging")
    $('#headerMessageBox').addClass("unview")
    loghead=11;
    localStorage.setItem("log", JSON.stringify(loghead))
    location.reload()
})
$(document).on("click",".headerMessageBoxNo", function(){
    
    $('#headerMessageBox').addClass("unview")
    
})


//★★★★★★★★★★★★ signINOUT //