import React from 'react';
import { shallow } from 'enzyme';
import Routes from './routes';
import renderer from 'react-test-renderer';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('MyComponent', () => {
  it("should render properly", () => {
    const tree = renderer.create(Routes).toJSON();
    expect(tree).toMatchSnapshot();
  });
});