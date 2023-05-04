

(function ($) {
    // USE STRICT
    "use strict";

    $(document).ready(function () {

        var contactForm = $('#contact-form');

        contactForm.validator();

        /*$('#contactBtn').addClass("disabled");*/

        contactForm.on('submit', function (e) {
            window.setTimeout(function () {
                var errors = $('.has-error');
                if (errors.length) {
                    $('html, body').animate({scrollTop: 150}, 500);
                }
            }, 0);

            // if the validator does not prevent form submit
            if (!e.isDefaultPrevented()) {
                var url = "includes/contact-form.php";

                // POST values in the background the the script URL
                $.ajax({
                    type: "POST",
                    url: url,
                    data: $(this).serialize(),
                    success: function (data)
                    {
                        // data = JSON object that contact.php returns
                        var result = JSON.parse(data);
                        console.log(result);

                        // we recieve the type of the message: success x danger and apply it to the
                        var messageAlert = 'alert-' + result.type;
                        var messageText = result.message;

                        // let's compose Bootstrap alert box HTML
                        var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';

                        // If we have messageAlert and messageText
                        if (messageAlert && messageText) {
                            // inject the alert to .messages div in our form
                            $('.messages').html(alertBox);
                            // empty the form
                            contactForm[0].reset();
                        }
                    }
                });
                return false;
            }
        });

    });

})(jQuery);



function sending(){
    debugger
    let name = document.myform.name.value;
    let x = document.myform.email.value;
    let phone = document.myform.phone.value;
    
    let subg = document.myform.subj.value;
    let msg = document.myform.msg.value;
 
    
//  console.log("Name:"+  Name +"<br/> For email:" +  Email +"<br/> phone:" + Phone +"<br/> Message:" + Message);
Email.send({
    Host: "smtp.elasticemail.com",
    Username: "karumanchiassociatesloans@gmail.com",
    Password: "703C8A0AC36F17B02C2D1101AA20AEBD8DF8",
    To: 'honeypriya6741@gmail.com',
    From: "karumanchiassociatesloans@gmail.com",
    Subject: "subg",
    Body: "Name:"+  name +"<br/> For email:" + x +"<br/> phone:" + phone+"<br/> Message:" + msg
}).then(
  alert("sending successfull")
     
);
 

}
function sendi(){
     debugger
     var name = document.myform.name.value;
   
     var phone = document.myform.phone.value;
    
     var subg = document.myform.subj.value;
     var option = document.myform.optio.value;
//     alert("hello")
 
    
//  console.log("Name:"+  Name +"<br/> Phone:" +  phone);
Email.send({
    Host: "smtp.elasticemail.com",
    Username: "karumanchiassociatesloans@gmail.com",
    Password: "703C8A0AC36F17B02C2D1101AA20AEBD8DF8",
    To: 'honeypriya6741@gmail.com',
    From: "karumanchiassociatesloans@gmail.com",
    Subject: "subg",
    Body: "Name:"+  name +"<br/>how can we help:" + option + "<br/> phone:" + phone
}).then(
  alert("sending successfull")
     
);
 

}
// function formvalidation(){
//     debugger

//       var Name=document.myform.name.value;
//       var Phone=document.myform.phone.value;
//       var option=document.myform.selection.value;
//       alert("hello");


//     // if (Name==""||Name==null){
//     //     document.getElementById("demo1").innerHTML="please fill the name filled";
//     //     return false;
//     // }
// }
function sended(){
    debugger
    var name = document.myform.name.value;
  
    var phone = document.myform.phone.value;
   
    // var subg = document.myform.subj.value;
    // var option = document.myform.optio.value;
    alert("hello")

   
// //  console.log("Name:"+  Name +"<br/> Phone:" +  phone);
// Email.send({
//    Host: "smtp.elasticemail.com",
//    Username: "karumanchiassociatesloans@gmail.com",
//    Password: "703C8A0AC36F17B02C2D1101AA20AEBD8DF8",
//    To: 'honeypriya6741@gmail.com',
//    From: "karumanchiassociatesloans@gmail.com",
//    Subject: "subg",
//    Body: "Name:"+  name +"<br/>how can we help:" + option + "<br/> phone:" + phone
// }).then(
//  alert("sending successfull")
    
// );


}
