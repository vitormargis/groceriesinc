import React, { FC, MouseEvent } from 'react';

interface AutocompleteOptionsProps {
  active: number,
  filtered: string[],
  onMouseEnter: (e: MouseEvent) => void, 
  onClick: (e: MouseEvent) => void
}

const AutocompleteOptions: FC<AutocompleteOptionsProps> = ({active, filtered, onMouseEnter, onClick})  => {
  return filtered.length ? (
    <ul className="autocomplete-suggestions" data-cy="autocomplete-suggestions">
      {filtered.map((suggestion, index) => {
        return (
          <li 
            className={index === active ? 'active' : ''} 
            data-cy={`autocomplete-suggestion-${index}`} 
            key={suggestion} 
            onClick={onClick} 
            onMouseEnter={onMouseEnter}>
            {suggestion}
          </li>
        );
      })}
    </ul>
  ) : null
}

export default AutocompleteOptions; 