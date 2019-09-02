import React from 'react';
import './createtopic.css'
import { Header, Button, Input, TextArea } from 'semantic-ui-react'
import uuid from 'uuid/v1'

class Topic extends React.Component {
   constructor(props){
      super(props)
      this.state = {
         finishedJSON: {},
         title : '',
         body: '',
         user_created: ''         
         }
      }


      usernameChange = (event) => {
         event.preventDefault()
         this.setState({username:event.target.value})
      }

      titleChange = (event) => {
         event.preventDefault()
         this.setState({title: event.target.value})
      }

      bodyChange = (event) => {
         event.preventDefault()
         this.setState({body: event.target.value})
      }

      submitTopic = (event) => {
         event.preventDefault()
         if(this.state.title === '' || this.state.body === '' || this.state.username === '') {
            console.log('You need to input the missing data!')
         }
         else {
            var threadDay = new Date()
            var year = threadDay.getFullYear()
            var day = threadDay.getDay() + 1
            var month = threadDay.getMonth() + 1

            var totalDay = month + '/' + day + '/' + year

            fetch('http://localhost:5251/postthread', {
               method: 'POST',
               headers: {
                  'Accept' : 'application/json',
                  'Content-Type': 'application/json'
   
               },
               body: JSON.stringify({
                  body: this.state.body,
                  date_created : totalDay ,
                  thread_id : uuid(),
                  title: this.state.title,
                  user_created: this.state.user_created
      
               })
            }).then(response => {
               console.log(response)
               if(response.status === 200) {
                  console.log('Successfully Posted.')

                  // Here is the redirect to the thread in a more specific view,
                  // Pull the thread from thread_id, as its being generated.

               }
            })

         }
      }
   
   render() {
      return (
         <div className = 'whitespace'>
            <span className = 'topicmain'>
               <Header as = 'h1' className = 'header-margin'>
               Submit a topic:
               </Header>
               <form className = 'formadjust' onSubmit = {e => {this.submitTopic(e)}}>
                  <Header>
                     Username:
                  </Header>
                  <Input type = 'text' value ={this.state.username} onChange = {this.usernameChange} required/>
                  <Header>
                     Title:
                  </Header>
                   <Input type = 'text' value = {this.state.title} onChange = {this.titleChange} required/>
                  <Header>
                     Body: 
                  </Header>
                  <TextArea name = 'body' value = {this.state.body} onChange = {this.bodyChange} required/>
                  <Button>Submit</Button>
               </form>
               <button onClick ={e => {
                  var threadDay = new Date()

                  console.log(threadDay)
               }}> oof  </button>
            </span>
         </div>
      )
   }
}


export default Topic 