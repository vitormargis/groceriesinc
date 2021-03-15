import React, { MouseEvent, KeyboardEvent, ChangeEvent } from "react";
import useSuggestions from './useSuggestions';
import useInputs from './useInputs';

export default function useEvents () {
  const { 
    onPreInput, onSearchInput, onResetPreInput, searchInput, preInput 
  } = useInputs();

  const { 
    onFilterSuggestions, onResetSuggestions, onPreselectSuggestions, filteredSuggestions, IndexSuggestion 
  } = useSuggestions();

  const onArrowNavigation = (e: KeyboardEvent, n: number) => {
    e.preventDefault();
    const suggestion = filteredSuggestions[IndexSuggestion + (n)] || ''
    onPreInput({suggestion, inputValue: searchInput});
    onPreselectSuggestions(n);
  };

  return {
    onChange: (e: ChangeEvent<HTMLInputElement>, options: string[]) => {
        const inputValue = e.currentTarget.value; 
        const suggestion = onFilterSuggestions({options, inputValue})[IndexSuggestion] || '';
        onPreInput({suggestion, inputValue});
        onSearchInput(inputValue)
    },

    onKeyDown: (e: KeyboardEvent) => {
        const suggestion = filteredSuggestions[IndexSuggestion];

        if (e.key === 'Enter') {
          onResetPreInput(suggestion)
          return onResetSuggestions();
        }

        if (e.key === 'ArrowUp') {
          return (IndexSuggestion === 0) ? e.preventDefault() : onArrowNavigation(e, -1)
        }
        
        if (e.key === 'ArrowDown') {
          return (IndexSuggestion + 1 === filteredSuggestions.length) ? e.preventDefault() : onArrowNavigation(e, 1)
        }
    },

    onMouseEnter: (e: MouseEvent<HTMLLIElement>) => {
        const newActive = filteredSuggestions.findIndex(suggestion => suggestion === e.currentTarget.innerText) 
        onPreselectSuggestions(newActive - IndexSuggestion);
        onPreInput({suggestion: filteredSuggestions[newActive], inputValue: searchInput});
    },

    onClick: (e: MouseEvent<HTMLLIElement>) => {
        onResetPreInput(e.currentTarget.innerText)
        onResetSuggestions();
    },

    values: {
      searchInput,
      preInput,
      filteredSuggestions,
      IndexSuggestion
    }
  }
}