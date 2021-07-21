const text = 'Дуже цікавий Дуже?~! текст ...текст Собака пес собака';

const getWordRepetitionMap = (text) => {
    if (text === '') {
        return false;
    }
    const dividedText = text.toLowerCase().replace(/[^a-zA-Zа-яА-Яії ]+/g, "").split(' ');
    let wordsMap = new Map();
    dividedText.forEach(word => {
        if (wordsMap.has(word)) {
            wordsMap.set(word, wordsMap.get(word) + 1);
        } else {
            wordsMap.set(word, 1);
        }
    })
    return [...wordsMap];
}
export default getWordRepetitionMap;
console.log(getWordRepetitionMap(text));
