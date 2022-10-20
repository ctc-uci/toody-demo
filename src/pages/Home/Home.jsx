import React from 'react';
import PropTypes from 'prop-types';
import './Home.css';

const Home = ({ name }) => {
  return (
    <div className="home">
      <div className="landing">
        Hello {name}! Welcome to Toody.
        <br />
        You&apos;ve been using Toody for 100 days!
      </div>
    </div>
  );
};

Home.propTypes = {
  name: PropTypes.string,
};

Home.defaultProps = {
  name: 'Alex',
};

export default Home;
