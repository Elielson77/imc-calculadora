function meuEscopo() {
  const form = document.querySelector('form');
  const resul = document.querySelector('.resul');


  function evento(event) {
    event.preventDefault();

    const altura = Number(form.querySelector('#altura').value);
    const peso = Number(form.querySelector('#peso').value);

    const reset = () => resul.innerHTML = '';
    reset();
    let imc = peso / (altura * altura);

    if (!peso) {
      resul.innerHTML += `<span class="erro">Peso inválido!</span>`;
    } else if (!altura) {
      resul.innerHTML += `<span class="erro">Altura inválida!</span>`;
    } else if (imc < 18.5) {
      resul.innerHTML += `<span class="imc">Seu imc é ${imc.toFixed(1)}</span><br>
      <span class="resultado">Você está abaixo do peso</span>`;

    } else if (imc >= 18.5 && imc <= 24.9) {
      resul.innerHTML += `<span class="imc">Seu imc é ${imc.toFixed(1)}</span><br>
        <span class="resultado">Você está com peso normal!</span>`;
    } else if (imc >= 25 && imc <= 29.9) {
      resul.innerHTML += `<span class="imc">Seu imc é ${imc.toFixed(1)}</span><br>
        <span class="resultado">Você está com sobrepeso!</span>`;
    } else if (imc >= 30 && imc <= 34.9) {
      resul.innerHTML += `<span class="imc">Seu imc é ${imc.toFixed(1)}</span><br>
        <span class="resultado">Você está com Obesidade Grau 1!</span>`;
    } else if (imc >= 35 && imc <= 39.9) {
      resul.innerHTML += `<span class="imc">Seu imc é ${imc.toFixed(1)}</span><br>
        <span class="resultado">Você está com Obesidade Grau 2!</span>`;
    } else {
      resul.innerHTML += `<span class="imc">Seu imc é ${imc.toFixed(1)}</span><br>
        <span class="resultado">Você está com Obesidade Grau 3!</span>`;
    }


    console.log(peso);
    console.log(altura);
    console.log(`imc ${imc.toFixed(2)}`)
    console.log(typeof imc)
  }

  form.addEventListener('submit', evento)

}
meuEscopo();