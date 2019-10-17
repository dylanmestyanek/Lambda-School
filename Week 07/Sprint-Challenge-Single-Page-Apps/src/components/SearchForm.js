import React, { useState, useEffect } from "react";
import styled from "styled-components";

const SearchInput = styled.input`
  padding-left: 5px;
  margin-bottom: 20px;
  border-style: none;
  border: 1px solid #97cbd8;
`;

export default function SearchForm({ 
  characters,
  setSearchResults
}) {
 const [searchTerm, setSearchTerm] = useState('')

 useEffect(() => {
    const results = characters.filter(character => character.name.toLowerCase().includes(searchTerm));
    // const results = characters.filter(character => character.name[0].toLowerCase() === searchTerm);
    searchTerm === '' 
      ? setSearchResults(characters)
      : setSearchResults(results);
 }, [searchTerm])

 const handleChange = (e) => {
   setSearchTerm(e.target.value);
 }

  return (
    <section className="search-form">
     <form>
       <SearchInput
        name="search"
        type="text"
        placeholder="Search Characters"
        value={searchTerm}
        onChange={handleChange}
       />
     </form>
    </section>
  );
}
