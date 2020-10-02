import { DECREMENT, INCREMENT } from '../types/count';

export default (state = 0, { type }) => {
  switch (type) {
    case DECREMENT:
      return state - 1;
    case INCREMENT:
      return state + 1;
    default:
      return state;
  }
};
