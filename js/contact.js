

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
    let name = document.contact-form.name.value;
    let user_email = document.contact-form.email.value;
    let phone = document.contact-form.phone.value;
    
    let subg = document.contact-form.subj.value;
    let msg = document.contact-form.msg.value;
  
    
//  console.log("Name:"+  Name +"<br/> For email:" +  Email +"<br/> phone:" + Phone +"<br/> Message:" + Message);
Email.send({
    Host: "smtp.elasticemail.com",
    Username: "karumanchiassociatesloans@gmail.com",
    Password: "703C8A0AC36F17B02C2D1101AA20AEBD8DF8",
    To: 'honeypriya6741@gmail.com',
    From: "karumanchiassociatesloans@gmail.com",
    Subject: "subg",
    Body: "Name:"+  name +"<br/> For email:" +  user_email +"<br/> phone:" + phone +"<br/> Message:" + msg
}).then(
  alert("sending successfull")
);
 

}
