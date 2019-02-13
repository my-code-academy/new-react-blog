import React from 'react';
import renderer from 'react-test-renderer';
import CreatePost from './CreatePost';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

describe('CreatePost', () => {
  it("should render a CreatePost button", () => {
    const tree = renderer.create(<Router><CreatePost/></Router>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

