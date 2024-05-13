import React from 'react';
import renderer from 'react-test-renderer';
import {FullScreenLoader} from './FullScreenLoader';

describe('tests on Input', () => {
  it('without props', () => {
    const tree = renderer.create(<FullScreenLoader />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
