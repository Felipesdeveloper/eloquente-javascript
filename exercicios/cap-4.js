// A soma de um intervalo

function range(start, end, increment = 1) {
	let numbers = [];

	if ((start > end) && !(increment < 0)) {
		throw new Error('Incremento Invalido');
	}

	if (increment > 0) {
		for (let i = start; i <= end; i += increment) {
			numbers.push(i);
		}
	}

	if (incremento < 0) {
		for (let i = start; i >= end; i += increment) {
			numbers.push(i);
		}
	}

	return numbers;
}

console.log(range(1, 10));

function sum(numbers) {
	var result = 0;

	for (let i = 0; i < numbers.length; i++) {
		result += numbers[i];
	}

	return result;
}

console.log(sum(range(1, 10)));

// Invertendo um array

function reverseArray(array) {
	var arrayReverse = [];

	for (let i = array.length; i > 0; i--) {
		arrayReverse.push(array[i - 1]);
	}

	return arrayReverse;
}

console.log(reverseArray(['A', 'B', 'C']));

function reverseArrayInPlace(array) {
	var temp = '';
	// metade do array
	var limitLoop = Math.floor((array.length - 1) / 2);

	// percorre até a metade pq já estamos alterando o primeiro e o ultima
	for (let i = array.length - 1; i >= limitLoop; i--) {
		temp = array[array.length - 1  - i];
		array[array.length - 1 - i] = array[i];
		array[i] = temp;
	}

	return array;
}

var arrayReverse = ['D', 'E', 'F'];
console.log(reverseArrayInPlace(arrayReverse));
console.log('Reverse', arrayReverse);

// A lista

/**
 * Transforma um array em lista (Objeto)
 * @param {Array} array
 */
function arrayToList(array) {
	var list = null;

	for (let i = array.length - 1; i >= 0; i--) {
		list = {
			value: array[i],
			rest: list,
		}
	}

	return list;
}

console.log(arrayToList([1,2,3]));

/**
 * transforma a lista em array
 * @param {Object} object: {value: 9, rest: {value: 10, rest: null}}
 */
function listToArray(object) {
	var array = [];

	// percore cada item da lista sendo o interador a proxima lista
	// executa o loop até não existe mais proximas listas
	for (var node = object; node; node = node.rest) {
		array.push(node.value);
	}

	return array;
}

console.log(listToArray({value: 10, rest: {value: 20, rest: null}}));
console.log(listToArray(arrayToList([10, 20, 30])));


/**
 * Adiciona um item no começo da lista
 * @param {Number} value
 * @param {Object} list: {value: 9, rest: {value: 10, rest: null}}
 */
function prepend(value, list) {
	if (!list) {
		throw new Error('Deve ser informando uma lista');
	}

	list =  {
		value: value,
		rest: list
	}

	return list;
}

console.log(prepend(10, prepend(20, null)));

function nth(list, position) {
	var arrayList = listToArray(list);

	return arrayList[position];
}

// Comparação "profunda"

function deepEqual(value1, value2) {
	// se não for objeto comparação simples
	if (
		(typeof value1 != 'object' || value1 === null) ||
		(typeof value2 != 'object' || value2 === null)
	) {
		return value1 === value2;
	}

	// se for um objeto comparação pronfunda com recursividade
	if (
		(typeof value1 === 'object' && value1 != null) &&
		(typeof value2 === 'object' && value2 != null)
	) {
		if(!deepEqual(Object.keys(value1).length, Object.keys(value2).length)) {
			return false;
		}

		for (const key in value1) {
			if(!deepEqual(value1[key], value2[key])) {
				return false;
			}
		}
	}

	return true;
}
