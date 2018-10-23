import React, { Component } from 'react';
import './FamousPerson.css';

class FamousPerson extends Component {

    state = { 
      person: {
        name: '',
        claim: ''
      }
    }

    handleChangeFor = (propertyName) => {
      return (event) => {
        this.setState( { 
          person: {
            ...this.state.person,
            [propertyName]: event.target.value
            }
          });
        }
      }

    submitPerson = () => {
        console.log(this.state.person);
    }
      
  render() {
    return (
      <div>
        <input onChange={this.handleChangeFor('name')} placeholder="Name"/>
        <input onChange={this.handleChangeFor('claim')} placeholder="Claim"/>
        <button onClick={this.submitPerson}>Submit</button>

        <h3>{this.state.person.name} is famous for {this.state.person.claim}</h3>

      </div>
    );
  }
}

export default FamousPerson;
