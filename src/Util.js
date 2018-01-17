Util = {};

/**
 * Calcule la factorielle d'un nombre n. Exp : 5! = 5 * 4 * 3 * 2 * 1
 * @param {number} n
 * @returns {number}
 */
Util.factorial = function(n) {
	if(!Number.isInteger(n)) throw "n should be an integer";
	if(n < 0) throw "n should be positive";
	var fact = 1;
	for( i = 1 ; i <= n ; i++) fact *= i;
	return fact;
};

/**
 * Calcule la disposition ordonnée de r éléments dans un ensemble de n elements.
 * Formule: Util.arrangement(n, r) = n! / (n - r)!
 * @param {number} n
 * @param {number} r
 * @returns {number}
 */
Util.arrangement = function(n, r) {
	if(n < r) throw "r should be less or equal to n";
	return Util.factorial(n)/Util.factorial(n - r);
};

/**
 * Calcule la disposition non ordonnée de r éléments dans un ensemble de n elements.
 * Formule: Util.combination(n, r) = n! / (n - r)!r!
 * @param {number} n
 * @param {number} r
 * @returns {number}
 */
Util.combination = function(n, r) {
	return Util.arrangement(n, r)/Util.factorial(r);
};

/**
 * Détermine si n est un nombre premier.
 * Util.isPrime(5) => false
 * Util.isPrime(6) => true
 *
 * @param {number} n
 * @returns {boolean}
 */
Util.isPrime = function(n) {
	if(!Number.isInteger(n)) throw "n should be an integer";
	if(n < 0) throw "n should be positive";
	for( i = 2 ; i < n ; i++) if( ( n % i ) === 0) return false;
	if( ( n % 1 ) === 0 ) return true;
	return false;
};


/**
 * Additionne l'ensemble des nombres PREMIERS de 2 à n
 *
 * Util.sumPrime(6) = 2 + 3 + 5 = 10
 * Util.sumPrime(8) = 2 + 3 + 5 + 7 = 17
 *
 * @param {number} n
 * @returns {number}
 */
Util.sumPrime = function(n) {
	if(!Number.isInteger(n)) throw "n should be an integer";
	if(n < 0) throw "n should be positive";
	var sum = 0;
	for( i = 2 ; i < n ; i++) if(Util.isPrime(i)) sum += i;
	return sum;
};

/**
 * Cette méthode doit retourner un tableau de 1 à n tel que:
 * - Pour les nombres multiples de 3, les remplacer par "Fizz"
 * - Pour les nombres multiples de 5, les remplacer par "Buzz"
 * - Pour les nombres multiples de 3 et 5, les remplacer par "FizzBuzz"
 *
 * Exp :
 * Util.fizzBuzz(15) => [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"]
 *
 * @param {number} n
 * @returns {array}
 */
Util.fizzBuzz = function(n) {
	if(!Number.isInteger(n)) throw "n should be an integer";
	if(n < 0) throw "n should be positive";
	var tab = new Array();
	for( i = 1 ; i <= n ; i++){
		if(i%3 === 0 && i%5 === 0) tab.push("FizzBuzz");
		else if(i%3 === 0) tab.push("Fizz");
		else if(i%3 === 0) tab.push("Buzz");
		else tab.push(i);
	}
	return tab;
};

/**
 * Chiffre une phrase selon la règle suivante : Les A deviennent des B, les B des C, etc.
 *
 * Exp :
 * Util.cipher("Test Unitaire") => "Uftu Vojubjsf"
 *
 * @param phrase
 * @returns {string}
 */
Util.cipher = function (phrase) {
	var cryptedPhrase = "";
	for( i = 0 ; i < phrase.length ; i++){
		if(phrase[i] === ' ') cryptedPhrase += " ";
		else if(phrase[i] === 'Z') cryptedPhrase += "A";
		else if(phrase[i] === 'z') cryptedPhrase += "a"; 
		else cryptedPhrase += String.fromCharCode(phrase[i].charCodeAt(0) + 1);
	}
	return cryptedPhrase;
};
