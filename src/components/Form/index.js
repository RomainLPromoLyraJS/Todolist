import React from 'react';
import PropTypes from 'prop-types';

import './form.scss';

const Form = ({ inputValue, onInputChange, onFormSubmit }) => (
  <form onSubmit={(event) => {
    // je veux pas que ma page se recharge.
    event.preventDefault();
    // maintenant, il faudrait que je dise au composant parent (App)
    // que j'ai validé ma saisie
    onFormSubmit();
  }}
  >
    <input
      value={inputValue}
      onChange={(event) => {
        // dans le onChange, je récupère la nouvelle valeur saisie par l'utilisateur
        // je la récupère depuis l'event HTML (event)
        const newValue = event.target.value;

        // maintenant, je "remonte" ma modification au parent,
        // grâce a ma callback prop
        onInputChange(newValue);
      }}
      className="form__input"
      type="text"
      placeholder="Ajouter une tâche"
    />
  </form>
);

Form.propTypes = {
  inputValue: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onFormSubmit: PropTypes.func.isRequired,
};

export default Form;
