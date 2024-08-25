const form = document.querySelector("form");
const fullName = document.getElementById("userName");
const email = document.getElementById("Email");
const subject = document.getElementById("subject");
const mess = document.getElementById("message");
function sendEmail() {
  const bodyMessage = `Full Name:  ${fullName.value} <br> Email: ${email.value} <br> Message: ${mess.value}`;

  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "ammar.basaidouelhadj@gmail.com",
    Password: "1AD0F54EE37C7D77B31ACD2A70A6DB2040B7",
    To: "ammar.basaidouelhadj@gmail.com",
    From: "bsdammar70@gmail.com",
    Subject: subject.value,
    Body: bodyMessage,
  }).then(
    message => {
        if(message == "OK"){
            Swal.fire({
                title: "Success!",
                text: "Message sent succcessfully!",
                icon: "success"
              });
        }
    });
}
form.addEventListener("submit", (e) => {
  e.preventDefault();
  sendEmail();
});

$(document).ready(function () {
  //Owl
  $(".hero-slider").owlCarousel({
    loop: true,
    margin: 0,
    items: 1,
    dots: false,
    navText: ["PREV", "NEXT"],
    smartSpeed: 1000,
    autoplay: true,
    autoplayTimeout: 7000,
    responsive: {
      0: {
        nav: false,
      },
      768: {
        nav: true,
      },
    },
  });

  $("#projects-slider").owlCarousel({
    loop: true,
    nav: false,
    items: 2,
    dots: true,
    smartSpeed: 600,
    center: true,
    autoplay: true,
    autoplayTimeout: 4000,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
        margin: 8,
      },
    },
  });

  $(".reviews-slider").owlCarousel({
    loop: true,
    nav: false,
    dots: true,
    smartSpeed: 900,
    items: 1,
    margin: 24,
    autoplay: true,
    autoplayTimeout: 4000,
  });
});
