import React from 'react';
import renderer from 'react-test-renderer';
import CreatePost from './CreatePost';

describe('CreatePost', () => {
  it("should render a CreatePost button", () => {
    const tree = renderer.create(<CreatePost/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

