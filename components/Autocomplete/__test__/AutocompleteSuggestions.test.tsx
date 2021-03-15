import React from 'react';
import { act, create } from 'react-test-renderer';
import AutocompleteSuggestions from '../AutocompleteSuggestions';

const props = {
  onClick: () => null,
  active: 0,
  filtered: [ 'apple' ],
  onMouseEnter: () => null
}

const renderComponent = (props: any) => {
  let result: any;
  act(() => {
    result = create(<AutocompleteSuggestions {...props} />);
  });

  return result;
};

describe('AutocompleteSuggestions', () => {
  it('should render with AutocompleteSuggestions', () => {
    const component = renderComponent(props);
    component.root.findByType('li').props.onClick();
    expect(component.toJSON).toMatchSnapshot();
  });
});