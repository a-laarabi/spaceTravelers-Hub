import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import store from '../redux/configureStore';
import Rockets from '../components/pages/Rockets';

describe('Test for Rockets components', () => {
  it('Check if the Rockets section are available', () => {
    const mission = renderer.create(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    );
    expect(mission).toMatchSnapshot();
  });
});
