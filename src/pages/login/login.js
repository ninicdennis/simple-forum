import React from 'react';
import './login.css'

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
               <h1>Login:</h1>
               <form className = 'formbox'>
                  Username: <input type = 'text' required/>
                  Password: <input type = 'password' required/>
                  <button>Login!</button>
               </form>
            </div>
         </div>
      )
   }
}

export default Homepage