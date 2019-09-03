import React from 'react';
import './homepage.css'
import { Header, Container, Button } from 'semantic-ui-react';

class ThreadBuild extends React.Component {
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
   deleteMe = (event, threadUUID, isLoggedIn, userCreated) => {
      event.preventDefault();
      console.log('Hitting this thread with a delete: ',threadUUID)
      console.log('Logged in: ', isLoggedIn)
      console.log('user Created: ',userCreated)
      if(isLoggedIn === false) {
         console.log('You are not the Correct user!')

      }
      if (isLoggedIn === userCreated){
         console.log('Now Deleting Thread.')
         fetch('http://localhost:5251/thread/' + threadUUID, {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(threadUUID)
         }).then(response => console.log(response))
      }
   }

   render() {
      var renderMe = this.state.backendThread.map(threadProperties => {
         console.log(threadProperties)
         var buttonRender = () => {
            if(this.props.userLog === false) {
               console.log('Invalid user to delete.')
            }
            if(threadProperties.user_created === this.props.userLog) {
               console.log('Button will render for your own threads.')
               return (
                  <Button onClick ={e => this.deleteMe(e, threadProperties.thread_id, this.props.userLog, threadProperties.user_created)}> 
                  Delete Me !
                  </Button>
               )
            }
            
         }
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
                     {threadProperties.body}
                  </p>
               </Container>
               {buttonRender()}
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

export default ThreadBuild