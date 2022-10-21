import React from 'react';
import PropTypes from 'prop-types';
import ListItem from '../../components/ListItem/ListItem';
import './ToDo.css';

// items = [{id, item, checked}, ...]
const ToDo = ({ items }) => {
  return (
    <div className="to-do-content">
      <h2>Today&apos;s To Do</h2>
      <div className="to-do-list">
        {items.map(i => (
          <ListItem key={i.id} id={i.id} item={i.item} />
        ))}
      </div>
    </div>
  );
};

ToDo.propTypes = {
  items: PropTypes.array.isRequired,
};

export default ToDo;
