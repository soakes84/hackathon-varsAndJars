import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from 'axios';

class App extends Component {
   state = {
      people: []
   }
   componentDidMount(){
      axios.get('http://localhost:8080/')
         .then(response => {
            console.log(response);
            this.setState({people: response.data })
         })
   }

   render() {
      return (
         <div className="container">
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
