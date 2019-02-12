import React from 'react';
import renderer from 'react-test-renderer';
import Navigation from './Navigation';

describe('Navigation', () => {
  it("should render a Navigation bar", () => {
    const tree = renderer.create(<Navigation/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});