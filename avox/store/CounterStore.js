import { createStore } from "redux";

const initialState = {
  counter: 0,
};

const INCREMENT = "INCREMENT";

export const incrementCounter = () => ({
  type: INCREMENT,
});

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, counter: state.counter + 1 };
    default:
      return state;
  }
};

const store = createStore(counterReducer);

export default store;
