import sequence from './task.js';

describe('sequence', ()=> {
    test('it should have 5 length if first parameter is 5', () => {
        expect(sequence(5,0).length).toBe(5);
    });
    test('it should output correct sequence', () => {
        expect(sequence(10,1).toString()).toBe("1,4,10,22,46,94,190,382,766,1534")
    });
})
