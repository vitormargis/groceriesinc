import { useState } from "react";

const useSuggestions = () => {
  const [IndexSuggestion, setIndexSuggestion] = useState(0);
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);

  return {
    onFilterSuggestions: ({options = [], inputValue = ''}) => {
      const inputNormalized = inputValue ? inputValue.toLowerCase() : null;
      
      const filteredMatches = options.filter(option => 
        option.toLowerCase().includes(inputNormalized));
      
      const filteredFirstLetterMatches = filteredMatches.filter(option => 
        option.toLowerCase().startsWith(inputNormalized));

      const cleanFilteredSuggestions = inputNormalized || inputNormalized !== ' '
        ? Array.from(new Set([...filteredFirstLetterMatches, ...filteredMatches])) : []

      setFilteredSuggestions(cleanFilteredSuggestions);
      setIndexSuggestion(0)

      return cleanFilteredSuggestions;
    },

    onPreselectSuggestions: (n = 0) => {
      setIndexSuggestion(IndexSuggestion + (n))
    },

    onResetSuggestions: (options = []) => {
      setFilteredSuggestions(options);
      setIndexSuggestion(0)
    },
    IndexSuggestion,
    filteredSuggestions,
  }
}

export default useSuggestions;