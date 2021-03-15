import React from 'react';
import { act, create } from 'react-test-renderer';
import Autocomplete from '../Autocomplete';

const renderComponent = () => {
  let result: any;
  act(() => {
    result = create(<Autocomplete />);
  });

  return result;
};

describe('Breadcrumbs', () => {
  it('should render with background image and with scrim', () => {
    const component = renderComponent();
    act(() => {
      component.root.findByProps({ preInput: '' }).props.onChange({ currentTarget: { value: '' }})
    });
    expect(component.toJSON()).toMatchSnapshot();
  });
});