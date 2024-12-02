let value = documentById("number")

function subtotal(){

    
}



function increment() {
  const counterElement = document.getElementById("counter");
  let currentValue = parseInt(counterElement.textContent); // Obtém o valor atual
  currentValue++;
  counterElement.textContent = currentValue; // Atualiza o elemento
}
function increment2() {
  const counterElement = document.getElementById("counter2");
  let currentValue = parseInt(counterElement.textContent); // Obtém o valor atual
  currentValue++; // Incrementa o valor
  counterElement.textContent = currentValue; // Atualiza o elemento
}
function increment3() {
  const counterElement = document.getElementById("counter3");
  let currentValue = parseInt(counterElement.textContent); // Obtém o valor atual
  currentValue++; // Incrementa o valor
  counterElement.textContent = currentValue; // Atualiza o elemento
}
function decrement() {
  const counterElement = document.getElementById("counter");

  let currentValue = parseInt(counterElement.textContent); // Obtém o valor atual

  if (currentValue > 0) {
    currentValue--; // Decrementa o valor
    counterElement.textContent = currentValue; // Atualiza o elemento
  }

  if (currentValue === 0) {
    alert("Faz o L, careca!"); // Mostra o alerta
  }
}
function decrement2() {
  const counterElement = document.getElementById("counter2");

  let currentValue = parseInt(counterElement.textContent); // Obtém o valor atual

  if (currentValue > 0) {
    currentValue--; // Decrementa o valor
    counterElement.textContent = currentValue; // Atualiza o elemento
  }

  if (currentValue === 0) {
    alert("Faz o L, careca!"); // Mostra o alerta
  }
}
function decrement3() {
  const counterElement = document.getElementById("counter3");

  let currentValue = parseInt(counterElement.textContent); // Obtém o valor atual

  if (currentValue > 0) {
    currentValue--; // Decrementa o valor
    counterElement.textContent = currentValue; // Atualiza o elemento
  }

  if (currentValue === 0) {
    alert("Faz o L, careca!"); // Mostra o alerta
  }
}
