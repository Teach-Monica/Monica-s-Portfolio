// projects logic
var url = window.location.href;
var params = new URLSearchParams(window.location.search);

var param1 = params.get("contact");
if(param1) {
  scrollToDiv();
}




var $conteudoGeral = document.querySelector(".conteudo-geral");
var $conteudoEmArray = [].slice.call(document.querySelectorAll(".componente"));
var $botoesDeFechar = [].slice.call(
  document.querySelectorAll(".componente-botao-fechar")
);

setTimeout(function () {
  $conteudoGeral.classList.remove("js-conteudo-geral");
}, 200);

$conteudoEmArray.forEach(function ($componente) {
  $componente.addEventListener("click", function () {
    if (this.classList.contains("caixa-conteudo-ativo")) return;
    $conteudoGeral.classList.add("caixa--componente-ativo");
    this.classList.add("caixa-conteudo-ativo");
  });
});

$botoesDeFechar.forEach(function ($btn) {
  $btn.addEventListener("click", function (e) {
    e.stopPropagation();
    $conteudoGeral.classList.remove("caixa--componente-ativo");
    document
      .querySelector(".componente.caixa-conteudo-ativo")
      .classList.remove("caixa-conteudo-ativo");
  });
});


function generateMailtoLink() {
  var subject = document.getElementById("subjectTextField");
  var body = document.getElementById("bodyTextField");
  var recipientEmail = "monica.krpatel@email.com";
  var emailSubject = subject.value;
  var emailBody = body.value;
  
  var mailtoLink = "mailto:" + recipientEmail + "?subject=" + emailSubject + "&body=" + emailBody;
  
  return mailtoLink;
}


var sendEmailLink = document.getElementById("send-email");
sendEmailLink.addEventListener("click", function() {
  window.open(generateMailtoLink());
});

// navbar mobile
var menuButton = document.getElementById("menu-button");

menuButton.addEventListener("click", myFunction);

function myFunction() {
  menuButton.classList.toggle("active");
  document.getElementById("line-1").classList.toggle("active");
  document.getElementById("line-2").classList.toggle("active");
  document.getElementById("line-3").classList.toggle("active");
  document.getElementById("menu").classList.toggle("active");
};



function scrollToDiv() {
  var contactNav = document.getElementById("contact-nav");
  contactNav.style.color="#f0d47c";
  contactNav.style.textDecoration="underline";
  contactNav.style.fontWeight="bold";
  var workNav = document.getElementById("workNav");
  workNav.style.color="white";
  workNav.style.fontWeight="100";
  workNav.style.textDecoration="none";
  var element = document.getElementById("contact-mee");
  element.scrollIntoView({ behavior: "smooth", block: "start" });
}

let about=document.getElementById("navAbout");
// console.log(about)
about.addEventListener=("click", samFunction);
 
function samFunction(){
  // console.log("working")
  window.open(abo)
}


