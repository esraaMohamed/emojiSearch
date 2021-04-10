import React, { BaseSyntheticEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { searchActions } from "../../redux/searchTerm/searchTermSlice";
import _ from "lodash";

export const SearchField: React.FC<{}> = () => {
  const dispatch = useDispatch();
  const [searchString, setSearchString] = useState("");
  const { setSearchTerm } = searchActions;

  useEffect(() => {
    dispatch(setSearchTerm(searchString));
  }, [searchString, dispatch, setSearchTerm]);

  const delayedQuery = _.debounce((query) => setSearchString(query), 2000);
  const onChange = (event: BaseSyntheticEvent) => {
    delayedQuery(event.target.value);
  };

  return (
    <div style={{display: 'flex', justifyContent: 'center', paddingTop: '20px'}}>
      <label htmlFor="searchField" style={{paddingRight: '10px'}}>Search terms: </label>
      <input
        id="searchField"
        type="text"
        placeholder="Search Term"
        onChange={onChange}
      />
    </div>
  );
};
