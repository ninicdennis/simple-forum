import React from 'react';
import './createtopic.css'

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
               Submit a topic:
               <form className = 'formadjust' onSubmit = {e => {this.submitTopic(e)}}>
                  Title: <input type = 'text' value = {this.state.title} onChange = {this.titleChange} required/>
                  Body: <textarea name = 'body' value = {this.state.body} onChange = {this.bodyChange} required/>
                  <button className = 'button'>Submit</button>
               </form>
            </span>
         </div>
      )
   }
}


export default Topic 