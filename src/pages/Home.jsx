import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Home = ({ count, incrementCount }) => (
  <div>
    <h1>Hello World</h1>
    <p>
      Times button was clicked&nbsp;
      {`${count}!`}
    </p>
    <button type="button" onClick={incrementCount}>
      Increment
    </button>
  </div>
);

Home.defaultProps = {
  count: 0,
  incrementCount: () => {},
};

Home.propTypes = {
  count: PropTypes.number,
  incrementCount: PropTypes.func,
};

const mapStateToProps = ({ count }) => ({
  count,
});

const mapDispatchToProps = (dispatch) => ({
  incrementCount: () => dispatch({ type: 'INCREMENT' }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
