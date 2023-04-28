// let sub_btn = document.querySelector('.contact');
// sub_btn.addEventListener('submit', function(event){
//     event.preventDefault();
//     debugger;
//     let fname = document.querySelector('#name').value;
//     let email = document.querySelector('#email').value;
//     let selectElement = document.getElementById('opselection').value;
//     let phone = document.querySelector('#phone').value;
//     let message = document.querySelector('#message').value;

//     let subject ="get a quote"
//     Email.send({
//        Host : "smtp.elasticemail.com",
//        Username : "raagainfra.website@gmail.com",
//        Password : "53D36010792280C9D90A5D421B21F726B4D0",
//        To : 'priya4241honey@gmail.com',
//        From : "raagainfra.website@gmail.com",
//        Subject :"get a quote",
//        Body :"Name:"+ fname +"<br/> For email:" + email +"<br/> Subject:" + subject +"<br/> Message:"
//        + message +"<br/> phone:"+ phone + "<br/> service:"+ selectElement
//    }).then(
//      message => alert(message)
//    );
   

// })
function sending(){
    debugger
    let Name=document.contact.name.value;
    let Email=document.contact.email.value;
    let Phone=document.contact.phone.value;
    let Msg=document.contact.msg.value;
   
    console.log("Name:"+ Name +"<br/> For email:" + Email +"<br/> phone" + Phone + "<br/> Message"+Msg)
    //       
    // Email.send({
    //     Host : "smtp.elasticemail.com",
    //     Username : "username",
    //     Password : "password",
    //     To : 'them@website.com',
    //     From : "you@isp.com",
    //     Subject : "This is the subject",
    //     Body : "And this is the body"
    // }).then(
    //   message => alert(message)
    // );



}
