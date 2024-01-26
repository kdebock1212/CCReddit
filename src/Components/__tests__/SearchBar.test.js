// src/Components/__tests__/SearchBar.test.js

import React from 'react';
import { shallow } from 'enzyme';
import SearchBar from '../SearchBar';

describe('SearchBar Component', () => {
  it('renders input and button', () => {
    const wrapper = shallow(<SearchBar />);
    expect(wrapper.find('input')).toHaveLength(1);
    expect(wrapper.find('button')).toHaveLength(1);
  });

  it('calls onSearch prop when button is clicked', () => {
    const mockOnSearch = jest.fn();
    const wrapper = shallow(<SearchBar onSearch={mockOnSearch} />);
    wrapper.find('button').simulate('click');
    expect(mockOnSearch).toHaveBeenCalled();
  });
});
