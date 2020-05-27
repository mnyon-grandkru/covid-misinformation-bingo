const BingoCard = require('./bingo-card');

describe('bingo-card', () => {
    describe('.getNewNum', () => {
	it('returns a random number between 0 and 14', () => {
	    let result = BingoCard.getNewNum();
	    expect(result).toBeLessThan(15);
	    expect(result).toBeGreaterThan(-1);
	});
    });
});
