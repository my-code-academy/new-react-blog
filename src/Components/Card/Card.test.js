import React from 'react';
import renderer from 'react-test-renderer';
import Card from './Card';
import {shallow} from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Card', () => {
  it("should render a card", () => {
    const tree = renderer.create(<Card/>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should increment clap count and toggle like", () => {
    const card = {
      "date": "2nd Januray, 2018",
      "readingTime": "2 mins",
      "title": "The future of abstract art and the culture ...",
      "description": "Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your...",
      "claps": 10,
      "liked": false,
      "image": "abstract.png"
    };

    const wrapper = shallow(<Card date = {card.date}
      readingTime = {card.readingTime}
      title = {card.title}
      description = {card.description}
      claps = {card.claps}
      liked = {card.liked}
      imageSrc = {`./Images/${card.image}`}  />);
    //console.log(wrapper.instance().renderRows());
    wrapper.instance().addClap();
    expect(wrapper.instance().state.clapsCount).toEqual(card.claps+1);
    wrapper.instance().toggleImage();
    expect(wrapper.instance().state.open).toEqual(!card.liked);
  });
});
