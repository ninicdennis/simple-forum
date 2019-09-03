import React from 'react';
import './homepage.css'
import { Header, Container, Button } from 'semantic-ui-react';

import { useAuth0 } from "../../auth0-wrapper";

class Homepage extends React.Component {
   constructor(props){
      super(props)
      this.state = {
         backendThread: [],
      }
   }

   componentDidMount() {
      fetch('http://localhost:5251/', {
         method: 'GET'
      })
      .then(response => response.json())
      .then(call => this.setState({backendThread:call}))
      console.log('State has been set!')
   }
// Most likely will have to add auth0 to this in order for the specific user to delete their post.
   deleteMe = (event, threadUUID) => {
      event.preventDefault();
      console.log('Hitting this thread with a delete: ',threadUUID)

      fetch('http://localhost:5251/thread/' + threadUUID, {
         method: 'DELETE',
         headers: {'Content-Type': 'application/json'},
         body: JSON.stringify(threadUUID)
      }).then(response => console.log(response))
   }

   render() {
      var renderMe = this.state.backendThread.map(threadProperties => {
         console.log(threadProperties)
         return ( 
           <div className = 'whitespace' key = {threadProperties.id} >
            <article>
               

            <Header  as = 'h2' className = 'header-thread'>
               {threadProperties.title}
            </Header>

            <div className = 'thread'>
               <Container fluid className = 'userinfo'>
                  <p>User: {threadProperties.user_created}</p>
                  <p>Date: {threadProperties.date_created}</p>
               </Container>

               <Container>
                  <p className = 'threadbody'>
                  </p>
               </Container>

               <Button onClick ={e => this.deleteMe(e, threadProperties.thread_id)} > Delete Me !</Button>
            </div>
         </article>
         
         </div>
         )
      });
      return (
         <div>
            <div className = 'spacing'>
               {renderMe}
            </div>
         </div>
      )
   }
}

export default Homepage