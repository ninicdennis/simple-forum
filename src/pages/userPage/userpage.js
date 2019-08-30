import React from 'react';
import './userpage.css'

class Userpage extends React.Component {
   constructor(props){
      super(props)
      this.state = {
         userID: '123059814305814501834',
         //this is supposed to be a UUID
         username: 'foo',
         tempuser: 'foo',
         firstname: 'Foobar',
         tempfirstname: 'Foobar',
         lastname: 'theFith',
         templastname: 'theFith',
         created: '07/03/1999',
         posts: '1',
         testget: {}


      }
   }

   componentDidMount() {
      fetch('http://localhost:5250/user')
      .then(response => response.json())
      .then(data => this.setState({testget: data}))
   }

   changeUser = (event) => {
      event.preventDefault()
      this.setState({tempuser: event.target.value})
      console.log(this.state.tempuser)
   }

   changeFirstName = (event) => {
      event.preventDefault()
      this.setState({tempfirstname: event.target.value})
      console.log(this.state.tempfirstname)
   }

   changeLastName = (event) => {
      event.preventDefault()
      this.setState({templastname: event.target.value})
      console.log(this.state.templastname)
   }

   submitChanges = (event) => {
      event.preventDefault()
      let postFormJson = {
         username: this.state.tempuser,
         firstname: this.state.tempfirstname,
         lastname: this.state.templastname,
      }
      console.log(postFormJson)
   }
   render() {
      return (
         <div className = 'whitespace'>
            <div className = 'useredit'>
               <h2> Edit Your Info:</h2>
               <form className = 'formadjust' onSubmit = {e => {this.submitChanges(e)}}>
                  <p>UserID: {this.state.userID}</p>
                  <p>Username:</p> 
                  <input type = 'text' onChange = {this.changeUser}  value = {this.state.tempuser} required/>
                  <p>First Name:</p> 
                  <input type = 'text' onChange = {this.changeFirstName} value = {this.state.tempfirstname} required/>
                  <p>Last Name: </p>
                  <input type = 'text' onChange = {this.changeLastName} value = {this.state.templastname} required/>

                  <p>Date Created: {this.state.created}</p>
                  <p>Posts: {this.state.posts}</p>
                  <button className = 'button'>Submit!</button>
               </form>

            </div>
         </div>
      )
   }
}

export default Userpage