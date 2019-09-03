import React from 'react';
import './homepage.css'
import { Header, Container } from 'semantic-ui-react';

class Homepage extends React.Component {
   constructor(props){
      super(props)
      this.state = {
         backendThread: [],
         testArray:[{name: 'jeff'},{name:'beff'}]
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
                     {threadProperties.body}
                  </p>
               </Container>
            </div>
         </article>
         
         </div>
         )
      })

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