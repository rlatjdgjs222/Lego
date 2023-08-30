// signUpButtonBack = $('#signUpButtonBack');
let falseBox = [false, false, false, false, false, false]
let signUpFormStatus = $(".signUpFormStatus")
let allFine = false;
let allFine2 = false;
let imageValue = "";
$(document).on("click", '#signUpButton', function () {
    // console.log($(document.activeElement).attr('id'))
    let buttonRec = $(document.activeElement).attr('id')
    switch (buttonRec) {
        case "signUpButtonBack":
            location.href = './index.html'
            //go to index


            break;
        case "signUpButtonClear":
            // console.log(buttonRec)
            clearInfobox()

            break;
        case "signUpButtonDone":
            checkingValueInfobox()
            checkingValueEmail()

            //need to show complete
            if (allFine == true) {
                checkName()
                if (allFine2 == true) {
                    takeShot()
                    allFine2 = false
                    allFine = false
                }
                // location.href='./signin.html'
            }
            break;
    }
})

//form check ☆☆☆☆☆☆☆☆☆☆☆☆//
function checkingValueInfobox() {
    $('.infovalue').each(function (index) {
        if (!$(this).val()) {
            $(this).addClass("infoError")
            $(this).removeClass("infoDone")


            falseBox[index] = true
            // $(`.signUpFormStatus li:eq(${index})`).addClass("infoError")
            // $(`.signUpFormStatus li:eq(${index})`).removeClass("infoDone")
        }
        else {
            $(this).removeClass("infoError")
            $(this).addClass("infoDone")
            console.log(index)

            falseBox[index] = false
            // $(`.signUpFormStatus li:eq(${index})`).removeClass("infoError")
            // $(`.signUpFormStatus li:eq(${index})`).addClass("infoDone")
        }


    })
    console.log(falseBox)
}
function checkingValueEmail() {
    if (!falseBox[2]) {
        let tempBox = $('#signUpFormEmail').val()
        let tempSource = 0;

        tempSource += tempBox.indexOf('@')
        tempSource += tempBox.indexOf('.')
        if (tempSource < 0) {
            // $(`.signUpFormStatus li:eq(2)`).addClass("infoError")
            // $(`.signUpFormStatus li:eq(2)`).removeClass("infoDone")
            // $('.emailcheck').addClass("infoError")
            // $('.emailcheck').removeClass("infoDone")
            $('#signUpFormEmail').addClass("infoError")
            $('#signUpFormEmail').removeClass("infoDone")
            allFine = false;
            $('#emailerror').delay(200).fadeIn()
            $(document).on("click", "tbody", function () {
                $('#emailerror').delay(100).fadeOut()

            })
        } else {
            // $('.emailcheck').removeClass("infoError")
            // $('.emailcheck').addClass("infoDone")
            // $(`.signUpFormStatus li:eq(2)`).removeClass("infoError")
            // $(`.signUpFormStatus li:eq(2)`).addClass("infoDone")
            $('#signUpFormEmail').removeClass("infoError")
            $('#signUpFormEmail').addClass("infoDone")
            allFine = true;
        }

    }
}
function checkName() {
    let infoList2 = JSON.parse(localStorage.getItem("signupdata")) || [];
    let namebox = infoList2.filter(val => val.id == $('#signUpFormName').val())
    let emailbox = infoList2.filter(val => val.email == $('#signUpFormEmail').val())
    if (namebox.length == 0 && emailbox.length == 0) {
        allFine2 = true;

    }
    else {
        if (namebox.length == 0 && emailbox.length !== 0) {
            //only email same

            $('#signUpGoHome').addClass("show1")
        }
        if (namebox.length !== 0 && emailbox.length == 0) {
            //only name same

            $('#signUpGoHome').addClass("show2")
        }
        if (namebox.length !== 0 && emailbox.length !== 0) {
            //only name same

            $('#signUpGoHome').addClass("show3")
        }

    }

}
//★★★★★★★★★★★★ form check //

//clear ☆☆☆☆☆☆☆☆☆☆☆☆//
function clearInfobox() {
    $("td input").each(function () {
        $(this).val("")
        allFine = false;
    })
}
//★★★★★★★★★★★★ clear //

//go link ☆☆☆☆☆☆☆☆☆☆☆☆//
function makeInfoListonLocal() {
    let infoes = {
        id: $('#signUpFormName').val(),
        password: $('#signUpFormPassword').val(),
        email: $('#signUpFormEmail').val(),
        phone: $('#signUpFormPhone').val(),

        picture: imageValue
    }
    console.log(infoes)
    let infoList = JSON.parse(localStorage.getItem("signupdata")) || [];
    infoList.push()
}
function takeShot() {
    var node = document.querySelector('#body');

    domtoimage.toPng(node).then(function (dataUrl) {
        var img = new Image();
        img.src = dataUrl;

        imageValue = img.src

        let infoes = {
            id: $('#signUpFormName').val(),
            password: $('#signUpFormPassword').val(),
            email: $('#signUpFormEmail').val(),
            phone: $('#signUpFormPhone').val(),
            picture: imageValue
        }

        let infoList = JSON.parse(localStorage.getItem("signupdata")) || [];
        infoList.push(infoes);
        localStorage.setItem("signupdata", JSON.stringify(infoList))
        console.log("sdfas")
        sessionStorage.removeItem("logname")
        let loghead = 11;
        sessionStorage.setItem("log", JSON.stringify(loghead))
        $('#signUpGoHome').addClass("show4")
    }).catch(function (error) {
        console.error('oops, something went wrong!', error);
    });
}


//★★★★★★★★★★★★ go link //
$(document).on('click', '#signUpGoHome', function () {
    
    if($(this).hasClass("show4")){
        $(this).removeClass()
        location.reload()
        location.href = './signin.html'
    }
    $(this).removeClass()
})


//input modify ☆☆☆☆☆☆☆☆☆☆☆☆//
function isNumber(evt) { //<input type="text" onkeypress="return isNumber(event)>
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
}
$('#signUpFormName').bind('keyup blur', function () {
    $(this).val($(this).val().replace(/[^A-Za-z0-9]/g, ''))
});
$('input[type="password"]').bind('keyup blur', function () {
    $(this).val($(this).val().replace(/[^A-Za-z0-9]/g, ''))
});
// $('#signUpFormGender').bind('keyup blur', function () {
//     $(this).val($(this).val().replace(/[^A-Za-z]/g, ''))
// });
$('#signUpFormPhone').bind('keyup blur', function () {
    $(this).val($(this).val().replace(/[^0-9]/g, ''))
});
$('#signUpFormEmail').bind('keyup blur', function () {
    $(this).val($(this).val().replace(/[^A-Za-z0-9^@^.]/g, ''))
});


//★★★★★★★★★★★★ input modify//