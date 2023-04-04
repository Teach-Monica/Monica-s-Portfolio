// projects logic

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