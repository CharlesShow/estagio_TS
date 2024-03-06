const readline = require("readline-sync");

/* 1) */ {
  const indice = 13;
  let soma = 0;
  let k = 0;
  while (k < indice) {
    k = k + 1;
    soma = soma + k;
  }
  console.log(`Valor de soma é: ${soma}`); // soma = 91;
}

/* 2) */ {
  let n = readline.questionInt("\nDigite um numero inteiro:\n");

  const fibonacci = [0, 1];
  for (let i = fibonacci.length; i < 15; i++) {
    fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
  }

  const acharNumero = fibonacci.find((x) => x === n);

  if (!acharNumero) {
    console.log("\nSequência fibonacci: \n" + fibonacci + "\n");
    console.log("Seu número não está na sequência!");
  } else {
    console.log("\nSequência fibonacci: \n" + fibonacci + "\n");
    console.log(`${acharNumero} está na sequência`);
  }
}

/*3)
    a) 1, 2, 3, 5, 7, 9
    b) 2, 4, 8, 16, 32, 64, 128
    c) 0, 1, 4, 9, 16, 25, 36, 49
    d) 4, 16, 36, 64, 100 
    e) 1, 1, 2, 3, 5, 8, 13
    f) 2,10, 12, 16, 17, 18, 19, 20 */

/* 4) Pelo o que entendi, estou em uma sala com interruptores que controlam 3 lâmpadas, e as 3 lâmpadas estão em uma sala diferente da minha mas estão todas em uma sala. Com apenas duas visitas a sala diferente para entender qual interruptor liga qual lâmpada.
    
Nesse caso eu utilizaria os interruptores deixando 1 das 3 lâmpadas desligadas e visitaria a sala das lâmpadas, como há apenas 1 lâmpada desligada e 1 interruptor destoando dos outros. Descobriria qual interruptor é responsável por aquela lâmpada. Agora tenho 2 interruptores para descobrir, desses dois 2 interruptores eu desligo 1 dos 2 e faria minnha ultima visita a sala com as lâmpadas. Vendo qual seria a nova lâmpada que se apagou sei que ela é responsável pelo ultimo interruptor que mexi e a acessa é responsável pelo interruptor que escolhi em deixar ligado. */

/* 5) */ {
  let palavra = readline.question("\nDigite uma palavra:\n");
  palavra = palavra.split("");
  let palavraInversa = [];
  for (i = 0, x = 1; i < palavra.length; i++, x++) {
    palavraInversa.push(palavra[palavra.length - x]);
  }
  console.log("\nA palavra ao contrario fica: " + palavraInversa.join(""));
}
