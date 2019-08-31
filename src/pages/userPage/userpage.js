import React from 'react';
import './userpage.css'
import { Input, Header, Button } from 'semantic-ui-react';

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
               <Header as= 'h2'> Edit Your Info:</Header>
               <form className = 'formadjust' onSubmit = {e => {this.submitChanges(e)}}>
                  <Header>UserID: {this.state.userID}</Header>
                  <Header>Username:</Header> 
                  <Input type = 'text' onChange = {this.changeUser}  value = {this.state.tempuser} required/>
                  <Header>First Name:</Header> 
                  <Input type = 'text' onChange = {this.changeFirstName} value = {this.state.tempfirstname} required/>
                  <Header>Last Name: </Header>
                  <Input type = 'text' onChange = {this.changeLastName} value = {this.state.templastname} required/>

                  <Header>Date Created: {this.state.created}</Header>
                  <Header>Posts: {this.state.posts}</Header>
                  <Button className = 'button'>Submit!</Button>
               </form>

            </div>
         </div>
      )
   }
}

export default Userpage