// src/Components/__tests__/Header.test.js

import React from 'react';
import { shallow } from 'enzyme';
import Header from '../Header';

describe('Header Component', () => {
  it('renders logo and search bar', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('.logo')).toHaveLength(1);
    expect(wrapper.find('SearchBar')).toHaveLength(1);
  });

  it('calls onCategoryChange prop when category button is clicked', () => {
    const mockOnCategoryChange = jest.fn();
    const wrapper = shallow(<Header onCategoryChange={mockOnCategoryChange} />);
    wrapper.find('.category-button').simulate('click');
    expect(mockOnCategoryChange).toHaveBeenCalled();
  });
});
