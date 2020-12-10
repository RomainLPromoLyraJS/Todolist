import React from 'react';
import PropTypes from 'prop-types';

import './counter.scss';

const Counter = ({ nbTasks }) => (
  <p className="ongoing-tasks">{nbTasks} tâches en cours</p>

);

Counter.propTypes = {
  nbTasks: PropTypes.number.isRequired,
};

export default Counter;
