import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./App.css";
import { SearchField } from "./components/SearchField/SearchField";
import { getSearchTerm } from "./redux/searchTerm/searchTermSlice";
import { filteredEmojis } from "./utils/filter";

interface EMOJI {
  title: string;
  keywords: string;
  symbol: string;
}
const App = () => {
  const searchTerm = useSelector(getSearchTerm);
  const [filteredList, setFilteredList] = useState<Set<EMOJI>>(new Set());

  useEffect(() => {
    setFilteredList(filteredEmojis(searchTerm));
  }, [searchTerm, setFilteredList]);

  return (
    <div className="App">
      <SearchField />
      <div style={{display: 'flex', justifyContent: 'center', paddingTop: '50px'}}>
      {searchTerm && filteredList.size > 0 && (
        <table style={{border: '1px solid black'}}>
          <tbody >
            <tr >
              <th style={{borderBottom: '1px solid black'}}>Title</th>
              <th style={{borderBottom: '1px solid black'}}>Keywords</th>
              <th style={{borderBottom: '1px solid black'}}>Symbol</th>
            </tr>
            {Array.from(filteredList).map(
              ({ title, keywords, symbol }: EMOJI, index: number) => {
                return (
                  <tr  key={`tr-${index}`}>
                    <td key={`td-${title}`}>{title}</td>
                    <td key={`td-${keywords}`}>{keywords}</td>
                    <td key={`td-${symbol}`}>{symbol}</td>
                  </tr>
                );
              }
            )}
          </tbody>
        </table>
      )}
      </div>
    </div>
  );
};

export default App;
