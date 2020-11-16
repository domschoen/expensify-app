//react-test-renderer
import React from 'react';
//import { shallow } from 'enzyme';
import ReactShallowRender from 'react-test-renderer/shallow';
import Header from '../../components/Header';

test('should render Header correctly', () => {
    const renderer = new ReactShallowRender();
    renderer.render(<Header />);
    expect(renderer.getRenderOutput()).toMatchSnapshot();
    //console.log(renderer.getRenderOutput());
});
