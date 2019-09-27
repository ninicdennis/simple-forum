import React from 'react';
import './homepage.css'
import { Header, Container, Button } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';

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
            // I can grab this from the api instead of passing it from the body.

            // Take it from request.params.id from the api
         }).then(response => {
            console.log(response)
            fetch('http://localhost:5251/', {
               method: 'GET'
            })
            .then(response => response.json())
            .then(call => this.setState({backendThread:call}))
            console.log('State has been set!')
         })
      }
   }

   redirectUser = (event, thread) => {
      event.preventDefault()
      console.log('Moving to: ', thread)
      this.props.history.push('/topic/' + thread)
   }

   render() {
      var renderMe = this.state.backendThread.map(threadProperties => {
         console.log(threadProperties)
         var buttonRender = () => {
            if(this.props.userLog === false) {
               console.log('Invalid user to delete.')
               console.log('This is threadproperties...' , threadProperties.thread_id)

            }
            if(threadProperties.user_created === this.props.userLog) {
               console.log('Button will render for your own threads.')
               return (
                  // template strings on delete
                  <Button key = {'delete-' + threadProperties.thread_id} onClick ={e => this.deleteMe(e, threadProperties.thread_id, this.props.userLog, threadProperties.user_created)}> 
                  Delete Me !
                  </Button>
               )
            }
            
         }

         var threadButton = () => {
            return <Button key = {threadProperties.thread_id} onClick = {e => (this.redirectUser(e,threadProperties.thread_id))}>Go to Thread</Button>
         }
         return ( 
           <div className = 'whitespace' key = {threadProperties.thread_id} >
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
               <div className = 'vertical-button'>
               {buttonRender()}
               {threadButton()}

               </div>

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

export default withRouter(ThreadBuild)