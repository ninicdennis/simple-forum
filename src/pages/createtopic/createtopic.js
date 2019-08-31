import React from 'react';
import './createtopic.css'
import { Header, Button, Input, TextArea } from 'semantic-ui-react'

class Topic extends React.Component {
   constructor(props){
      super(props)
      this.state = {
         title : '',
         body: ''         
         }
      }

      titleChange = (event) => {
         event.preventDefault()
         this.setState({title: event.target.value})
         console.log('title Change: ', event.target.value)
      }

      bodyChange = (event) => {
         event.preventDefault()
         this.setState({body: event.target.value})
         console.log('Body change: ', event.target.value)
      }

      submitTopic = (event) => {
         event.preventDefault()
         if(this.state.title === '' || this.state.body === '') {
            console.log('You need to input the missing data!')
         }
         else {
         let jsonSend = {title: this.state.title, body: this.state.body}
         console.log(jsonSend)
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
                     Title:
                  </Header>
                   <Input type = 'text' value = {this.state.title} onChange = {this.titleChange} required/>
                  <Header>
                     Body: 
                  </Header>
                  <TextArea name = 'body' value = {this.state.body} onChange = {this.bodyChange} required/>
                  <Button>Submit</Button>
               </form>
            </span>
         </div>
      )
   }
}


export default Topic 