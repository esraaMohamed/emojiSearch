import emojiList from '../emojiList.json';

export const filteredEmojis = (searchField: string) => {
    const usingTitle = emojiList.filter(data => data.title.toLowerCase().includes(searchField))
    const usingKeywords = emojiList.filter(data => data.keywords.toLowerCase().includes(searchField))
    const filteredData = new Set(usingTitle.concat(usingKeywords))
    return filteredData
};