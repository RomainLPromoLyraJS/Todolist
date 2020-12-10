/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';

import './tasks.scss';

const Tasks = ({ tasks }) => (
  <ul>
    {tasks.map((task) => (
      // la key sera toujours sur la première ligne après le map
      <li key={task.id} className="tasks__item tasks__item--completed">
        <label>
          <input type="checkbox" />
          {task.label}
        </label>
      </li>
    ))}
  </ul>
);

Tasks.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
      done: PropTypes.bool.isRequired,
    }),
  ).isRequired,
};

export default Tasks;
