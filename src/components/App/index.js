// == Import npm
import React from 'react';

import Form from 'src/components/Form';
import Counter from 'src/components/Counter';
import Tasks from 'src/components/Tasks';

// import des taches depuis leur fichier...
import taskArray from 'src/data/tasks';

import './app.scss';

// == Composant sous forme de classe
// (pour gérer un state)
class App extends React.Component {
  // constructeur de notre classe
  constructor(props) {
    // super = appel du constructeur parent (React.Component)
    super(props);

    // déclaration de notre state
    this.state = {
      // on va crééer dans notre state une string qui va être la valeur de l'input
      inputValue: '',
      // je copie dans mon state, les données en provenance du fichier tasks.
      tasks: taskArray,
    };

    // on veut que notre methode garde son contexte même quand on la détache
    this.setInputValue = this.setInputValue.bind(this);
    this.addTaskFromInput = this.addTaskFromInput.bind(this);
  }

  // une méthode pour modifier la propriété inputValue dans le state
  setInputValue(newValue) {
    this.setState({ inputValue: newValue });
  }

  // objectif : déterminer le nouvel ID a ajouter dans notre tableau
  computeNewId() {
    const { tasks } = this.state;

    // on commence par récupérer tous les ids...
    const ids = tasks.map((task) => task.id);

    // ensuite, je veux trouver l'id le plus grand
    const highestId = Math.max(...ids);

    return highestId + 1;
  }

  // une méthode qui va ajouter la tâche saisie dans noter tableau de tâches
  addTaskFromInput() {
    const { tasks, inputValue } = this.state;

    const taskName = inputValue;

    const newTask = {
      label: taskName,
      done: false,
      id: this.computeNewId(),
    };

    // pour éviter de modifier l'ancien state (cf Recap) j'utilise le spread operator
    // afin de fabriquer un tout nouveau tableau.
    this.setState({
      inputValue: '', // je remet a 0 la valeur de mon input
      tasks: [...tasks, newTask],
    });
  }

  render() {
    const { tasks, inputValue } = this.state;

    return (
      <div className="app">
        <Form
          onInputChange={this.setInputValue}
          onFormSubmit={this.addTaskFromInput}
          inputValue={inputValue}
        />
        {/* On donne à Counter le nombre de tâches */}
        <Counter nbTasks={3} />
        {/* On donne à <Tasks> la liste des tâches */}
        <Tasks tasks={tasks} />
      </div>
    );
  }
}

// == Export
export default App;
