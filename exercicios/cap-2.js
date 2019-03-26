const trianguloComLoop = () => {
  let letter = '#';

  for (let i = 0; i < 7; i++) {
    console.log(letter);
    letter += '#';
  }
}


const fizzBazz = () => {
  for (let i = 1; i <= 100; i++) {
    if ( ((i % 3) === 0) && ((i % 5) === 0) ) {
      console.log('FizzBazz');
	  continue;
    }
    if((i % 3) === 0) {
      console.log('Fizz');
      continue;
    }

    if((i % 5) === 0) {
      console.log('Bazz');
      continue;
    }

    console.log(i);
  }
}

const tabuleiroXadrez = () => {
  let letter = ' ';
  let linhasTabuleiro = [];

  for (let linha = 1; linha <= 8; linha++) {
    if ((linha % 2) === 0) {
      letter = ' ';
    } else {
      letter = '#'
    }

    linhasTabuleiro.push(letter);

    for (let coluna = 0; coluna <= 8; coluna++) {
      letter = letter === '#' ? ' ' : '#';
      linhasTabuleiro[linha - 1] += letter;
    }
  }

  linhasTabuleiro.forEach(linha => console.log(linha));
}
