import React from 'react';
import './topicpage.css'
import { Header, Button, TextArea } from 'semantic-ui-react';

class Topic extends React.Component {
   constructor(props){
      super(props)
      this.state = {
         falseData: {
            user: 'foobar',
            date: '07/03/2019',
            title: 'this is The Title'
         },
         responding: ''
      }
   }

   changeResponse = (event) => {
      event.preventDefault()
      this.setState({responding: event.target.value})
      console.log('Response: ', event.target.value)
   }
   render() {
      let ipsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vel placerat arcu, ultrices dictum ligula. Maecenas non malesuada magna, vel ullamcorper magna.Aenean vitae orci vel libero bibendum feugiat. Mauris aliquam odio in vehicula fermentum. Morbi ut pulvinar neque. Vivamus a pretium felis, in facilisis risus. Sed eget mi vitae mi accumsan maximus. Aenean imperdiet suscipit ligula sed condimentum.Donec iaculis libero turpis, at varius eros porta eget.'

      return (
         <div className = 'whitespace'>
            <div className = 'main'>
               <Header as= 'h2' className = 'title'>
                  Title: {this.state.falseData.title}
               </Header>
               <p className = 'topics'>
                  <Header as= 'h3'>
                     Created By: {this.state.falseData.user}
                  </Header>
                     {ipsum}
               <span>Date: {this.state.falseData.date}</span>
               </p>
               <div className = 'response'>
                  <Header as='h3'>
                     User: {this.state.falseData.user}
                  </Header>
                  this is my response to that statement.
                  <span> Date: {this.state.falseData.date}</span>
               </div>
               <Header as= 'h3' className = 'response'>
                  Leave your response:
                  <form>
                     <TextArea type = 'text' className = 'textbox' value = {this.state.responsding} onChange = {this.changeResponse}/>
                     <Button className = 'margin-button'>Submit</Button>
                  </form>
               </Header>
            </div>
         </div>
      )
   }
}

export default Topic 