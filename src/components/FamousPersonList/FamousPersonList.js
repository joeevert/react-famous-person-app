import React, { Component } from 'react';

class FamousPersonList extends Component {
      
  render() {
    return (
      <section>
        <h2>Famous People List</h2>
        <ul>
          {this.props.list.map( person => 
          <li key={person.name}><h3>{person.name} is famous for {person.claim}.</h3></li>
          )}
        </ul>
      </section>
    );
  }
}

export default FamousPersonList;
