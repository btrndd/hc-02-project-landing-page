//Créditos countdown function: https://pt.stackoverflow.com/questions/472661/criar-countdown-timer-no-javascript

function timer() {
  var tempoEmMinutos = 43000;
  var date = new Date();
  var expiracao = new Date(date.getTime() + tempoEmMinutos * 60000);
  var contador = window.setInterval(function(){
    var faltam = expiracao - new Date;
    if (faltam <= 0){
    	window.clearInterval(contador);
    }  
  var horas = Math.floor(faltam / 3600000) - 708;  
  var minutos = Math.floor(faltam / 60000) - 42960;
  var segundos = faltam % 60000;
  var tempoRestante = `FALTAM APENAS 0${horas}:${minutos}:${segundos.toString().substr(0,2)}`;
  document.getElementById('timer').innerText = tempoRestante;
}, 1000);
}

timer();

function saveInfo() {
  const nome = document.getElementById('nameInput');
  const email = document.getElementById('mailInput');
  JSON.stringify(localStorage.setItem('email', email.value));
  JSON.stringify(localStorage.setItem('nome', nome.value));
}

const saveButton = document.getElementById('btn-yellow');
saveButton.addEventListener('click', saveInfo);



