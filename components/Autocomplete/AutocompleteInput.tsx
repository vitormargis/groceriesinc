import React, { FC, KeyboardEvent, ChangeEvent } from 'react';

interface AutocompleteInputProps {
  input: string,
  preInput: string,
  options: string[],
  onKeyDown: (e: KeyboardEvent<HTMLInputElement>) => void, 
  onChange: (e: ChangeEvent<HTMLInputElement>, options: string[]) => void
}

const AutocompleteInput: FC<AutocompleteInputProps> = ({onChange, onKeyDown, input, preInput, options})  => {
  return <>
    <input
      type="text"
      onChange={(e) => onChange(e, options)}
      onKeyDown={onKeyDown}
      value={input}
      placeholder="Search your fruit"
      className="autocomplete-input"
      data-cy="autocomplete-input"
    />
    <input
      type="text"
      value={preInput}
      className="autocomplete-pre-input"
      data-cy="autocomplete-pre-input"
      readOnly
    />
  </>
}

export default AutocompleteInput; 