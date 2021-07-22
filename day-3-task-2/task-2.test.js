import {findHowOld} from "./task-2";
import {pl} from "./task-2";
import {formatDate} from "./task-2";

const birth = new Date(2000, 6, 20);
const employee = {
    name: 'Ваня Иванов',
    birthday: birth
};

describe('function findHowOld', () => {
    it('return age employee', () => {
        expect(findHowOld(employee)).toBe(21);
    });
});

describe('function pl', () => {
    it('return 21 год', () => {
        expect(pl(21)).toBe(21 + ' год')
    });

    it('return 22 года', () => {
        expect(pl(22)).toBe(22 + ' года')
    });

    it('return 25 лет', () => {
        expect(pl(25)).toBe(25 + ' лет')
    });
});

describe('function formatDate', () => {
    it('return', () => {
        expect(formatDate(birth)).toBe('July 20')
    });

});