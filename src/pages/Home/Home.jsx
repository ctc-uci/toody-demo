import React from 'react';
import PropTypes from 'prop-types';
import ToDo from './ToDo';
import './Home.css';

const items = [
  { id: '1', item: 'Go to costco to get gas' },
  { id: '2', item: 'Pickup sister from the airport' },
  { id: '3', item: 'Buy groceries for the week' },
];

const Home = ({ name }) => {
  return (
    <div className="home">
      <div className="landing">
        Hello {name}! Welcome to Toody.
        <br />
        You&apos;ve been using Toody for 100 days!
      </div>
      <div className="to-do">
        <ToDo items={items} />
      </div>
      <div className="journal-entries">Journal Entry</div>
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
