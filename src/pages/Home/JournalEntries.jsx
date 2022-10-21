import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './JournalEntries.css';

const JournalEntries = ({ entries }) => {
  const [newEntry, setNewEntry] = useState('');
  const addNewEntry = e => {
    e.preventDefault();
    console.log(newEntry);
  };
  console.log(entries);
  return (
    <div className="journal-content">
      <h2>Journal Entries</h2>
      <form className="new-entry" onSubmit={addNewEntry}>
        <textarea value={newEntry} onChange={e => setNewEntry(e.target.value)} />
      </form>
    </div>
  );
};

JournalEntries.propTypes = {
  entries: PropTypes.array.isRequired,
};

export default JournalEntries;
