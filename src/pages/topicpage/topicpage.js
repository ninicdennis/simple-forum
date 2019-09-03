import React from 'react';
import './topicpage.css'
import { Header } from 'semantic-ui-react'
import CommentSection from './comments';


class Topic extends React.Component {
   constructor(props){
      super(props)
      this.state = {
         threadData: [],
         specificData: {},
         responding: ''
      }
   } 
   componentDidMount() {
      fetch('http://localhost:5251/thread/' + this.props.match.params.id,{
         method:'GET',         
      })
      .then(response => response.json())
      .then(data => this.setState({threadData: data}))
   }

   changeResponse = (event) => {
      event.preventDefault()
      this.setState({responding: event.target.value})
      console.log('Response: ', event.target.value)
   }
   render() {
      var threadArray = this.state.threadData.map(threadValue => {
         return(
            <div className = 'main'>
               <Header as= 'h2' className = 'title'>
                 {threadValue.title}
               </Header>
               <p className = 'topics'>
                  <Header as= 'h3' className ='bottom-line'>
                     Created By: {threadValue.user_created}
                  </Header>
                  {threadValue.body}
                     
               <span>Date:{threadValue.date_created}</span>
               </p>
            </div>
         )
      })
      return (
         <div>
            <div className = 'whitespace'>
               {threadArray}
         </div>
         <div>
         <CommentSection threadInfo = {this.props.match.params.id}/>
         </div>

         </div>


      )

   }
}

export default Topic 