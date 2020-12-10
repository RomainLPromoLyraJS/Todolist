/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';

import './tasks.scss';

const Tasks = ({ tasks, onOffTask }) => (
  <ul>
    {tasks.map((task) => (
      // la key sera toujours sur la première ligne après le map
      <li key={task.id} className={task.done ? 'tasks__item tasks__item--completed' : 'tasks__item'}>
        <label>
          <input checked={task.done} type="checkbox" onChange={() => onOffTask(task.id)} />
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
  onOffTask: PropTypes.func.isRequired,
};

export default Tasks;
