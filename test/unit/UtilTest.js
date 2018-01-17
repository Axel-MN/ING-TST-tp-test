// Test factorielle
describe("Validation factorielle", function(){

	// Données de test
	var testCases = [
		{ 
			n: 0,
			fact: 1
		},
		{ 
			n: 1,
			fact: 1
		},
		{ 
			n: 2,
			fact: 2
		},
		{ 
			n: 3,
			fact: 6
		},
		{
			n: 10,
			fact: 3628800
		}
	];

	testCases.forEach(function(testCase){
		it("Fact(" + testCase.n + ") doit retourner " + testCase.fact, function(){
			var result = Util.factorial(testCase.n);
			expect(result).toBe(testCase.fact);
		});
	});

	it("Fact(10.5) doit retourner l'erreur 'n should be an integer'", function(){
		var result = Util.factorial.bind(null, 10.5);
		expect(result).toThrow("n should be an integer");
	});

	it("Fact(abc) doit retourner l'erreur 'n should be an integer'", function(){
		var result = Util.factorial.bind(null, "abc");
		expect(result).toThrow("n should be an integer");
	});

	it("Fact(-2) doit retourner l'erreur 'n should be positive'", function(){
		var result = Util.factorial.bind(null, -5);
		expect(result).toThrow("n should be positive");
	});

});

// Test arrangement
describe("Validation arrangement", function(){

	// Données de test
	var testCases = [
		{ 
			n: 0,
			r: 0,
			arr: 1
		},
		{ 
			n: 10,
			r: 1,
			arr: 10
		},
		{ 
			n: 20,
			r: 3,
			arr: 6840
		},
	];

	testCases.forEach(function(testCase){
		it("Arr(" + testCase.n + ", " + testCase.r + ") doit retourner " + testCase.arr, function(){
			var result = Util.arrangement(testCase.n, testCase.r);
			expect(result).toBe(testCase.arr);
		});
	});

	it("Arr(10, 15) doit retourner l'erreur 'r should be less or equal to n'", function(){
		var result = Util.arrangement.bind(null, 10, 15);
		expect(result).toThrow("r should be less or equal to n");
	});

});

// Test combinaison
describe("Validation combinaison", function(){

	// Données de test
	var testCases = [
		{ 
			n: 0,
			r: 0,
			comb: 1
		},
		{ 
			n: 5,
			r: 2,
			comb: 10
		},
		{ 
			n: 20,
			r: 10,
			comb: 184756
		}
	];

	testCases.forEach(function(testCase){
		it("Comb(" + testCase.n + ", " + testCase.r + ") doit retourner " + testCase.comb, function(){
			var result = Util.combination(testCase.n, testCase.r);
			expect(result).toBe(testCase.comb);
		});
	});

});

// Test nombre premier
describe("Validation nombre premier", function(){

	// Données de test
	var testCases = [
		{ 
			n: 1,
			isPrime: true
		},
		{ 
			n: 3,
			isPrime: true
		},
		{ 
			n: 5,
			isPrime: true
		}
	];

	testCases.forEach(function(testCase){
		it("isPrime(" + testCase.n + ", " + testCase.r + ") doit retourner " + testCase.comb, function(){
			var result = Util.isPrime(testCase.n);
			expect(result).toBe(testCase.isPrime);
		});
	});

	it("isPrime(6) doit retourner false", function(){
		var result = Util.isPrime(6);
		expect(result).toBe(false);
	});

	it("isPrime(abc) doit retourner l'erreur 'n should be an integer'", function(){
		var result = Util.isPrime.bind(null, "abc");
		expect(result).toThrow("n should be an integer");
	});

	it("isPrime(-5) doit retourner l'erreur 'n should be positive'", function(){
		var result = Util.isPrime.bind(null, -5);
		expect(result).toThrow("n should be positive");
	});

});

// Test somme nombres premiers
/*describe("Validation sumPrime", function(){

	it("sumPrime(6) doit retourner false", function(){
		var result = Util.sumPrime(6);
		expect(result).toBe(10);
	});

	it("sumPrime(6) doit retourner false", function(){
		var result = Util.sumPrime(8);
		expect(result).toBe(17);
	});

	it("sumPrime(abc) doit retourner l'erreur 'n should be an integer'", function(){
		var result = Util.sumPrime.bind(null, "abc");
		expect(result).toThrow("n should be an integer");
	});

	it("sumPrime(-5) doit retourner l'erreur 'n should be positive'", function(){
		var result = Util.sumPrime.bind(null, -5);
		expect(result).toThrow("n should be positive");
	});

});*/

// Test fizzBuzz
/*describe("Validation fizzBuzz", function(){

	it("sumPrime(6) doit retourner false", function(){
		var result = Util.sumPrime(6);
		expect(result).toBe(10);
	});

	it("sumPrime(6) doit retourner false", function(){
		var result = Util.sumPrime(8);
		expect(result).toBe(17);
	});

	it("sumPrime(abc) doit retourner l'erreur 'n should be an integer'", function(){
		var result = Util.sumPrime.bind(null, "abc");
		expect(result).toThrow("n should be an integer");
	});

	it("sumPrime(-5) doit retourner l'erreur 'n should be positive'", function(){
		var result = Util.sumPrime.bind(null, -5);
		expect(result).toThrow("n should be positive");
	});

});*/

// Test cipher
describe("Validation cipher", function(){

	it("cipher(\"Test Unitaire\") doit retourner \"Uftu Tojubjsf\"", function(){
		var result = Util.cipher("Test Unitaire");
		expect(result).toBe("Uftu Vojubjsf");
	});

});