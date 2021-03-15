import React from 'react';
import { act, create } from 'react-test-renderer';
import AutocompleteInput from '../AutocompleteInput';

const props = {
  onChange: () => null,
  preInput: '0',
  input: '',
  options: [ 'apple', 'avocado', 'banana' ],
  onKeyDown: () => null
}

const renderComponent = (props: any) => {
  let result: any;
  act(() => {
    result = create(<AutocompleteInput {...props} />);
  });

  return result;
};

describe('AutocompleteInput', () => {
  it('should render with AutocompleteInput', () => {
    const component = renderComponent(props);
    component.root.findByProps({ className: 'autocomplete-input' }).props.onChange()
    expect(component.toJSON).toMatchSnapshot();
  });
});