import React, { Component } from 'react';

class FamousPersonForm extends Component {
      
  render() {
    return (
    <div>
      <section>
        <h2>Add Person:</h2>
        <form onSubmit={this.props.submitPerson}>
          <label htmlFor="in-name">Name:</label>
          <input id="in-name" onChange={this.props.handleChangeFor('name')} placeholder="Name" 
            value={this.props.newPerson.name} />
          <label htmlFor="in-claim">Claim:</label>          
          <input id="in-claim" onChange={this.props.handleChangeFor('claim')} placeholder="Claim" 
            value={this.props.newPerson.claim} />
          <input type="submit" value="Submit"/>
        </form>
        <h3>{this.props.newPerson.name} is famous for {this.props.newPerson.claim}.</h3>
      </section>
    </div>
    );
  }
}

export default FamousPersonForm;
