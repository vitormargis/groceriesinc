import React from "react";
import AutocompleteSuggestions from './AutocompleteSuggestions';
import AutocompleteInput from './AutocompleteInput';
import useEvents from './useEvents';

const Autocomplete = ({ options }) => {
  const { onChange,
    onKeyDown,
    onClick,
    onMouseEnter,
    values: {
      searchInput,
      preInput,
      IndexSuggestion,
      filteredSuggestions 
    }
  } = useEvents();

  return (
    <div className="autocomplete-container" data-cy="autocomplete-container">
      <AutocompleteInput 
        onChange={(e) => onChange(e, options)}
        onKeyDown={onKeyDown}
        input={searchInput}
        preInput={preInput}
        options={options}
      />
      <AutocompleteSuggestions
        active={IndexSuggestion}
        filtered={filteredSuggestions}       
        onClick={onClick}
        onMouseEnter={onMouseEnter}
      />
    </div>
  );
}

export default Autocomplete;