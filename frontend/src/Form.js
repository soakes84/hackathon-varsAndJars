import React, { Component } from "react";

export default class Form extends Component {
   state = {
      firstName: "",
      lastName: ""
   };
   _handleChange = evt => {
      let evtName = evt.target.name;
      let evtVal = evt.target.value;
      this.setState({ [evtName]: evtVal });
   };

   _handleSubmit = evt => {
      evt.preventDefault();

      this.props.addNewPerson(this.state);
      this.setState({ firstName: "", lastName: "" });
   };

   render() {
      return (
         <form onSubmit={this._handleSubmit} className="people-form">
            <input
               value={this.state.firstName}
               placeholder="enter first name"
               type="text"
               name="firstName"
               onChange={this._handleChange}
            />
            <input
               value={this.state.lastName}
               placeholder="enter last name"
               type="text"
               name="lastName"
               onChange={this._handleChange}
            />
            <button className="submit-button">Add new person</button>
         </form>
      );
   }
}
