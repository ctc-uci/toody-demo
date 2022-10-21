import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ListItem from '../../components/ListItem/ListItem';
import { SlPlus } from 'react-icons/sl';
import './ToDo.css';

// items = [{id, item, checked}, ...]
const ToDo = ({ items }) => {
  const [newTask, setNewTask] = useState('');
  //   const [change, setChange] = useState(false);

  const addNewTask = e => {
    console.log(newTask);
    e.preventDefault();
    // setChange(!change);
    // items.push({ id: '0', item: newTask });
  };

  //   useEffect(() => {
  //     setNewTask('');
  //   }, [change]);

  return (
    <div className="to-do-content">
      <h2>Today&apos;s To Do</h2>
      <div className="to-do-list">
        {items.map(i => (
          <ListItem key={i.id} id={i.id} item={i.item} />
        ))}
      </div>
      {/* submit by button or by pressing enter */}
      <form onSubmit={addNewTask}>
        <button className="add-task-button" type="submit">
          <SlPlus style={{ fontSize: '24px', color: '#FFFFFF' }} />
        </button>
        <input
          className="add-task-input"
          type="text"
          placeholder="New Task"
          onChange={setNewTask}
        />
      </form>
    </div>
  );
};

ToDo.propTypes = {
  items: PropTypes.array.isRequired,
};

export default ToDo;
