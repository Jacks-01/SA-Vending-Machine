const { VendingMachine, candyArray } = require('../src/index');

// it('should return the candy that is requested', () => {

// 	const vendingMachine = new VendingMachine();

//   candyArray.forEach((candy) => {
//     expect(vendingMachine.vend(candy)).toBe(`Dispensed: ${candy}`)
//   });

// });

it('only dispenses the candy if you give it the correct amount of money', () => {
	const vendingMachine = new VendingMachine();

	candyArray.forEach((candy) => {
		expect(vendingMachine.vend(candy.name, candy.price)).toBe(
			`Dispensed: ${candy.name}`
		);
	});
});

it('not enough money was inserted for the candy', () => {
	const vendingMachine = new VendingMachine();

	candyArray.forEach((candy) => {
		expect(vendingMachine.vend(candy.name, 0.5)).toBe(`Insuffecient funds`);
	});
});

it('returns candy if more money than required is inserted', () => {
	const vendingMachine = new VendingMachine();

	candyArray.forEach((candy) => {
		expect(vendingMachine.vend(candy.name, 100)).toBe(
			`Dispensed: ${candy.name}`
		);
	});
});
it('returns excess money as change', () => {
	const vendingMachine = new VendingMachine();

	candyArray.forEach((candy) => {
		let price = 3;
		expect(vendingMachine.vend(candy.name, price)).toBe(
			`Dispensed: ${candy.name}, Change: ${price - candy.price}`
		);
	});
});
