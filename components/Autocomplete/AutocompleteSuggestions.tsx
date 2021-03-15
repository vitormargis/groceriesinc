import React, { FC, MouseEvent } from 'react';
import styles from './Autocomplete.module.css'

interface AutocompleteOptionsProps {
  active: number,
  filtered: string[],
  onMouseEnter: (e: MouseEvent) => void, 
  onClick: (e: MouseEvent) => void
}

const AutocompleteOptions: FC<AutocompleteOptionsProps> = ({active, filtered, onMouseEnter, onClick})  => {
  return filtered.length ? (
    <ul className={styles.suggestions} data-cy="autocomplete-suggestions">
      {filtered.map((suggestion, index) => {
        return (
          <li 
            className={index === active ? `${styles.active} ${styles.suggestionsItem}` : styles.suggestionsItem } 
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