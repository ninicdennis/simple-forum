import React from 'react';
import './login.css'
import { Header, Button, Input } from 'semantic-ui-react'

class Homepage extends React.Component {
   constructor(props){
      super(props)
      this.state = {
         }
      }

   componentDidMount() {
   }

   render() {
      return (
         <div className = 'center' >
            <div className = 'square-box'>
               <Header as = 'h1'>Login:</Header>
               <form className = 'formbox'>
                  <Header as ='h3'>
                     Username: 
                  </Header>
                  <Input type = 'text' required/>
                  <Header as = 'h3'>
                     Password: 
                  </Header>
                  <Input type = 'password' required/>
                  <Button>Login</Button>
               </form>
            </div>
         </div>
      )
   }
}

export default Homepage