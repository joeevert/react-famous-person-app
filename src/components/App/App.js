import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import FamousPersonForm from '../FamousPersonForm/FamousPersonForm';
import FamousPersonList from '../FamousPersonList/FamousPersonList';

class App extends Component {

  state = { 
    newPerson: {
      name: '',
      claim: ''
    },
    peopleList: [],
  }

  handleChangeFor = (propertyName) => (event) => {
    this.setState({
      newPerson: {
        ...this.state.newPerson,
        [propertyName]: event.target.value,
      }
    })
  }

  submitPerson = (event) => {
    event.preventDefault();
    this.setState({
      newPerson: {
        name: '',
        claim: '',
      },
      peopleList: [...this.state.peopleList, this.state.newPerson],
    })
  }
  
  render() {
    return (
      <div className="App">
        <Header />
        <FamousPersonForm submitPerson={this.submitPerson}
          handleChangeFor={this.handleChangeFor} newPerson={this.state.newPerson}/>
        <FamousPersonList list={this.state.peopleList}/>
      </div>
    );
  }
}

export default App;
