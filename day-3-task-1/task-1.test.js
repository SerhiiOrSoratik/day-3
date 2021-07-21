import getWordRepetitionMap from "./task-1";

describe('function getWordRepetitionMap', () => {
    it('return array keys and values', () => {
        const text = 'Текст та текст'
        let result = [["текст", 2], ["та", 1]];
        expect(getWordRepetitionMap(text)).toStrictEqual(result);
    });

    it('return false if text is empty', () => {
        const text = '';
        expect(getWordRepetitionMap(text)).toBe(false);
    });
});
