// Scroll animation simples para elementos com fade-in
function revealOnScroll() {
    const elements = document.querySelectorAll('.fade-in');
    const windowBottom = window.innerHeight;
  
    elements.forEach(el => {
      const elementTop = el.getBoundingClientRect().top;
  
      if (elementTop < windowBottom - 50) {
        el.classList.add('visible');
      }
    });
  }
  
  window.addEventListener('scroll', revealOnScroll);
  window.addEventListener('load', revealOnScroll);

  // Data do evento - 26 de julho de 2025, às 00:00:00
var countdownDate = new Date("July 26, 2025 00:00:00").getTime();

// Atualiza a contagem regressiva a cada 1 segundo
var x = setInterval(function() {

  // Pega a data e hora atual
  var now = new Date().getTime();

  // Calcula a distância entre a data do evento e o momento atual
  var distance = countdownDate - now;

  // Calcula dias, horas, minutos e segundos
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Exibe a contagem regressiva no elemento com id "contador"
  document.getElementById("contador").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

  // Se a contagem terminar, exibe uma mensagem
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("contador").innerHTML = "O evento começou!";
  }
}, 1000);
