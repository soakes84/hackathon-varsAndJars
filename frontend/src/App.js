import React, { Component } from "react";
import "./App.css";
import axios from 'axios';

import Form from './Form';

class App extends Component {
   state = {
      people: []
   }

   componentDidMount(){
      this._fetchPeople();
   }
   _fetchPeople = () => {
      axios.get('http://localhost:8080')
         .then(response => {
            console.log(response);
            this.setState({people: response.data })
         })
   }

   _addNewPerson = (personData) => {
      axios.post('http://localhost:8080', personData)
         .then( response => {
            this._fetchPeople();
         })

   }

   render() {
      return (
         <div className="container">
            <Form
               addNewPerson={this._addNewPerson}
            />
            <ul>
               {this.state.people.map(person => {
                  return (
                     <li key={person.id}>
                        {person.firstName}
                     </li>
                  );
               })}
            </ul>

         </div>
      );
   }
}

export default App;
