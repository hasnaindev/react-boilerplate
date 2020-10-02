import { DECREMENT, INCREMENT } from '../types/count';

export const decrement = () => ({
  type: DECREMENT,
});

export const increment = () => ({
  type: INCREMENT,
});
