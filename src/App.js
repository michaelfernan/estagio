import React, { useState } from 'react';
import './App.css';

// Fibonacci
const Fibonacci = () => {
  const [number, setNumber] = useState('');
  const [message, setMessage] = useState('');

  const fibonacci = (n) => {
    let a = 0, b = 1;
    let fibSequence = [a, b];
    while (b < n) {
      let temp = b;
      b = a + b;
      a = temp;
      fibSequence.push(b);
    }
    return fibSequence.includes(n) 
      ? `O número ${n} pertence à sequência de Fibonacci.` 
      : `O número ${n} não pertence à sequência de Fibonacci.`;
  };

  const handleCheckFibonacci = () => {
    const num = parseInt(number, 10);
    setMessage(fibonacci(num));
  };

  return (
    <div>
      <h2>Fibonacci Checker</h2>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        placeholder="Informe um número"
      />
      <button onClick={handleCheckFibonacci}>Verificar</button>
      <p>{message}</p>
    </div>
  );
};

// Verificar 'a'
const ContarA = () => {
  const [text, setText] = useState('');
  const [result, setResult] = useState('');

  const contarA = (str) => {
    const count = str.toLowerCase().split('a').length - 1;
    return count > 0 
      ? `A letra 'a' aparece ${count} vez(es) na string.` 
      : "A letra 'a' não aparece na string.";
  };

  const handleCheckString = () => {
    setResult(contarA(text));
  };

  return (
    <div>
      <h2>Contagem de 'A'</h2>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Informe uma string"
      />
      <button onClick={handleCheckString}>Verificar</button>
      <p>{result}</p>
    </div>
  );
};

// Resultado
const SomaResultado = () => {
  let INDICE = 12;
  let SOMA = 0;
  let K = 1;

  while (K < INDICE) {
    K = K + 1;
    SOMA = SOMA + K;
  }

  return (
    <div>
      <h2>Resultado da SOMA</h2>
      <p>SOMA = {SOMA}</p>
    </div>
  );
};

// Função para calcular o próximo.
const calcularProximaSequencia = (sequencia) => {
  switch (sequencia) {
    case 'a':
      return [1, 3, 5, 7, 9];
    case 'b':
      return [2, 4, 8, 16, 32, 64, 128];
    case 'c':
      return [0, 1, 4, 9, 16, 25, 36, 49];
    case 'd':
      return [4, 16, 36, 64, 100];
    case 'e':
      return [1, 1, 2, 3, 5, 8, 13];
    case 'f':
      return [2, 10, 12, 16, 17, 18, 19, 20];
    default:
      return [];
  }
};

// Sequências
const Sequencias = () => {
  const sequenciaA = calcularProximaSequencia('a');
  const sequenciaB = calcularProximaSequencia('b');
  const sequenciaC = calcularProximaSequencia('c');
  const sequenciaD = calcularProximaSequencia('d');
  const sequenciaE = calcularProximaSequencia('e');
  const sequenciaF = calcularProximaSequencia('f');

  return (
    <div>
      <h2>Sequências e o próximo elemento</h2>
      <p>a) {sequenciaA.join(', ')}</p>
      <p>b) {sequenciaB.join(', ')}</p>
      <p>c) {sequenciaC.join(', ')}</p>
      <p>d) {sequenciaD.join(', ')}</p>
      <p>e) {sequenciaE.join(', ')}</p>
      <p>f) {sequenciaF.join(', ')}</p>
    </div>
  );
};

// Enigma
const Interruptores = () => {
  return (
    <div>
      <h2>Enigma dos Interruptores</h2>
      <p>
        1. Ligue o primeiro interruptor e deixe ligado por alguns minutos.
        <br />
        2. Desligue o primeiro interruptor e ligue o segundo.
        <br />
        3. Vá até a sala das lâmpadas:
        <br />
        - A lâmpada acesa pertence ao segundo interruptor.
        <br />
        - A lâmpada quente (mas apagada) pertence ao primeiro interruptor.
        <br />
        - A lâmpada fria e apagada pertence ao terceiro interruptor.
      </p>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Desafios Técnicos</h1>
      </header>
      <div className="content">
        <Fibonacci />
        <ContarA />
        <SomaResultado />
        <Sequencias />
        <Interruptores />
      </div>
    </div>
  );
}

export default App;
