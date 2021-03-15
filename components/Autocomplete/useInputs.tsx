import { useState } from "react";

function useInputs(): useInputsInterface {
  const [preInput, setPreInput] = useState('');
  const [searchInput, setSearchInput] = useState('');

  return {
    onPreInput: ({ suggestion, inputValue }) => {
      const isExactMatch = inputValue.toLowerCase() === suggestion.toLowerCase().substring(0, inputValue.length);

      if(inputValue === '' || inputValue === ' ') {
        return setPreInput('')
      }

      if((isExactMatch && suggestion !== '') || suggestion === '') {
        return setPreInput(`${inputValue}${suggestion.substring(inputValue.length, suggestion.length)}`);
      }

      return setPreInput(`${inputValue} ➝ ${suggestion}`);
    },

    onSearchInput: (inputValue) => {
      setSearchInput(inputValue)
    },

    onResetPreInput: (inputValue) => {
      setPreInput('')
      setSearchInput(inputValue)
    },

    searchInput,
    preInput,
  }
}

export default useInputs;

interface useInputsInterface {
  onPreInput: (options: onPreInputInterface) => void,
  onSearchInput: (inputValue: string) => void,
  onResetPreInput: (inputValue: string) => void,
  searchInput: string
  preInput: string
}

interface onPreInputInterface {
  suggestion: string,
  inputValue: string,
}