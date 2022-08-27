const inputAltura = document.querySelector(".input-altura");
const inputPeso = document.querySelector(".input-peso");
const botao = document.querySelector(".enviar");

function calcularImc(evento) {
  evento.preventDefault();
  const valorAltura = +inputAltura.value;
  const valorPeso = +inputPeso.value;
  const imc = valorPeso / valorAltura ** 2;
  const selecionarDivImg = document.querySelector(".imagem-grau");
  const selecionarValor = document.querySelector(".valor");
  if (imc < 18.5) {
    selecionarDivImg.innerHTML =
      "<img src='./assets/imgs/abaixo.svg' width='200px' height='300px'>";
    selecionarValor.innerText = `O seu peso é de ${valorPeso} e o seu IMC é de ${imc.toFixed(
      3
    )}`;
  } else if ((imc >= 18.5) & (imc < 24.9)) {
    selecionarDivImg.innerHTML =
      "<img src='./assets/imgs/Normal.svg' width='400px' height='300px'>";
  } else if ((imc >= 24.9) & (imc < 29.9)) {
    selecionarDivImg.innerHTML =
      "<img src='./assets/imgs/Sobrepeso.svg' width='400px' height='300px'>";
  } else if ((imc >= 30) & (imc < 35)) {
    selecionarDivImg.innerHTML =
      "<img src='./assets/imgs/Obeso.svg' width='400px' height='300px'>";
  } else if (imc > 35) {
    selecionarDivImg.innerHTML =
      "<img src='./assets/imgs/ObesidadeMorbida.svg' width='400px' height='300px'>";
  }
}

botao.addEventListener("click", calcularImc);
