function meuEscopo(){
  const form = document.querySelector('form');
  
  form.addEventListener('submit', evento)

  function evento(event){
    event.preventDefault();

    const peso = Number(form.querySelector('#peso').value); 
    const altura = Number(form.querySelector('#altura').value);
    
    if (!peso) {
      exibeResultado('Peso inválido!', false);
    return;
    }
    if (!altura) {
      exibeResultado('Altura inválida!', false) 
      return
    }

    console.log(peso, altura);

    const imc = criaImc(peso, altura);
    const nivel = criaNivelImc(imc);
    const msg = `Seu imc é ${imc} (${nivel})`;


    exibeResultado(msg, true)
  }
  function criaImc(peso, altura){
    const imc = peso / (altura ** 2);
    return imc.toFixed(2)
  }

  function criaNivelImc(imc){
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

    if (imc >= 40) return 'Obesidade grau 3';
    if (imc >= 35) return 'Obesidade grau 2';
    if (imc >= 30) return 'Obesidade grau 1';
    if (imc >= 25) return 'Sobrepeso';
    if (imc >= 18.5) return 'Peso normal';
    if (imc < 18.5) return 'Abaixo do peso';
  }

  function exibeResultado(msg, valido){
    const resultado = document.querySelector('.resul');
    resultado.innerHTML = ''; 

    const p = criaParagrafo();

    if (valido){
      p.classList.add('resultado')
    } else {
      p.classList.add('erro')
    }

    p.innerHTML = msg;
    resultado.appendChild(p)
  }

  function criaParagrafo(){
    const p = document.createElement('p');
    return p  
  }

}
meuEscopo();