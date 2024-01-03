// Vending Machine

// 1. buy a Snickers for a dollar
// 2. Verify the user is giving enough money for the candy

const candyArray = [
	{
		name: 'Snickers',
		price: 1,
	},
	{
		name: 'Skittles',
		price: 2,
	},
	{
		name: 'Mini M&M',
		price: 1.50,
	},
];

class VendingMachine {
	vend(candyName, price) {
		console.log(`The requested candy is : ${candyName}`);

		const requestedCandy = candyArray.filter(
			(candy) => candy.name === candyName
        );

        let change = 0

        if (price > requestedCandy[0].price) {
            change = price - requestedCandy[0].price;
			return `Dispensed: ${requestedCandy[0].name}, Change: ${change}`;
        }

		if (price === requestedCandy[0].price) {
			return `Dispensed: ${requestedCandy[0].name}`;
        }

        
        return 'Insuffecient funds'
	}
}

module.exports = { VendingMachine, candyArray };
