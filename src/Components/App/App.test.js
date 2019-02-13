import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {shallow, mount} from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import { MemoryRouter } from 'react-router';
import Routes from '../../Routes';
import CreateBlogPost from '../CreateBlogPost/CreateBlogPost';

configure({ adapter: new Adapter() });

it('should render App component without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Router><App /></Router>, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('ComponentDidMount', () => {
  it('should call componentDidMount once', () => {
    const wrapper = shallow(<App />);
    const spy = jest.spyOn(wrapper.instance(), 'componentDidMount');
    const didMount = wrapper.instance().componentDidMount();
    expect(spy).toHaveBeenCalled();
    // expect(isPlaying).toBe(true);
    spy.mockRestore();
  });

  it (' should not render CreateBlogPost for random path', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/create']}>
        <Routes />
      </MemoryRouter>
    );
    expect(wrapper.find(CreateBlogPost)).toHaveLength(0);
  });
});