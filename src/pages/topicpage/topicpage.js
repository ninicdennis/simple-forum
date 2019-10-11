import React, {Component} from 'react';
import './topicpage.css'
import { Header, Button } from 'semantic-ui-react'
import CommentSection from './comments';

class Topic extends Component {
   constructor(props){
      super(props)
      this.state = {
         threadData: [],
         threadDataEdit: {},
         responding: '',
         edit: false,

      }
   } 
   componentDidMount() {
      fetch(`http://localhost:5251/thread/${this.props.match.params.id}`,{
         method:'GET',         
      })
      .then(response => response.json())
      .then(data => {
         var threadFirst = data[0]
         this.setState({threadData: threadFirst, threadDataEdit: threadFirst.body})
      })
   }

   changeResponse = (event) => {
      event.preventDefault()
      this.setState({responding: event.target.value})
      console.log('Response: ', event.target.value)
   }

   updateThreadBody = (event) => {
      event.preventDefault()
      this.setState({threadDataEdit: event.target.value})
      console.log(event.target.value)
      console.log(this.state.threadDataEdit)
   }

   sendUpdate = (event, body) => {
      event.preventDefault()
      console.log(body)
      var threadChange = this.state.threadData
      threadChange.body = body
      console.log('This is the new thread: ', threadChange)
      console.log('updating: ', this.props.match.params.id)
     
      fetch(`http://localhost:5251/thread/${this.props.match.params.id}`, {
         method: 'PUT',
         headers: {
            'Accept' : 'application/json',
            'Content-Type': 'application/json'
         },
         body: JSON.stringify(threadChange)
      })
      .then(response => response.json())
      .then(update => {
         console.log(update)
         fetch(`http://localhost:5251/thread/${this.props.match.params.id}`,{
         method:'GET',         
      })
      .then(response => response.json())
      .then(data => {
         var threadFirst = data[0]
         this.setState({threadData: threadFirst, threadDataEdit: threadFirst.body, edit: false})
         })
      })
   }

   updateArea = () => {
      var threadValue = this.state.threadData
         return(
            <div className = 'main' key = {threadValue}>
               <Header as= 'h2' className = 'title'>
                 {threadValue.title}
               </Header>
                  <div className = 'topics'>
                     <Header as= 'h3' className ='bottom-line'>
                        Created By: {threadValue.user_created}
                     </Header>
                        <textarea value = {this.state.threadDataEdit} onChange = {this.updateThreadBody} />
                     <span>
                        Date:{threadValue.date_created}
                        <Button onClick = {e => this.setState({edit: false})}>Edit</Button>
                        <Button onClick = {e => this.sendUpdate(e, this.state.threadDataEdit)}>Update</Button>
                     </span>
               </div>
            </div>
            ) 
   }

   topicRender = () => {
      var threadValue = this.state.threadData

      console.log('HERE', threadValue)
      if(this.props.userLog === false) {
         return(
            <div className = 'main' key = {threadValue}>
            <Header as= 'h2' className = 'title'>
              {threadValue.title}
            </Header>
            <div className = 'topics'>
               <Header as= 'h3' className ='bottom-line'>
                  Created By: {threadValue.user_created}
               </Header>
               {threadValue.body}
            <span>
               Date:{threadValue.date_created}
               </span>
            </div>
         </div>
         )
      }
      else if (this.props.userLog === threadValue.user_created) {
         return(
            <div className = 'main' key = {threadValue}>
               <Header as= 'h2' className = 'title'>
               {threadValue.title}
               </Header>
            <div className = 'topics'>
               <Header as= 'h3' className ='bottom-line'>
                  Created By: {threadValue.user_created}
               </Header>
                  {threadValue.body}
            <span>
               Date:{threadValue.date_created}
               {/* check to see if user is logged in! */}
               <Button onClick = {e => this.setState({edit: true})}>Edit</Button>
            </span>
            </div>
         </div>
         )
      }
   }
   render() {
      if(this.state.edit === false){
         return (
            <div>
               <div className = 'whitespace'>
                  {this.topicRender()}
            </div>
               <div>
               <CommentSection threadInfo = {this.props.match.params.id}/>
               </div>
            </div>
         )
      }
      else{
         return (
            <div>
               <div className = 'whitespace'>
                  {this.updateArea()}
            </div>
            <div>
               <CommentSection threadInfo = {this.props.match.params.id}/>
            </div>
         </div>

         )
      }
   }
}

export default Topic 