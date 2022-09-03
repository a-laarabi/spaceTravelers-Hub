import React from "react";
import store from "../redux/configureStore";
import Missions from "../components/pages/Missions";
import { Provider } from "react-redux";
import renderer from 'react-test-renderer';

describe('Test for Missions components', () => {
  it('Check if the Missions section are available', () => {
    const mission = renderer.create(
      <Provider store={store}>
        <Missions />
      </Provider>,
    );
  expect(mission).toMatchSnapshot();
  })
})