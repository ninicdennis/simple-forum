import React from 'react';
import './topicpage.css'

class Topic extends React.Component {
   constructor(props){
      super(props)
      this.state = {
         falseData: {
            user: 'foobar',
            date: '07/03/2019'
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
      return (
         <div className = 'whitespace'>
            <div className = 'main'>
               <p className = 'topics'>
               <span>User: {this.state.falseData.user}</span>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vel placerat arcu, ultrices dictum ligula. Maecenas non malesuada magna, vel ullamcorper magna. Aenean vitae orci vel libero bibendum feugiat. Mauris aliquam odio in vehicula fermentum. Morbi ut pulvinar neque. Vivamus a pretium felis, in facilisis risus. Sed eget mi vitae mi accumsan maximus. Aenean imperdiet suscipit ligula sed condimentum. Donec iaculis libero turpis, at varius eros porta eget.
               <span>Date: {this.state.falseData.date}</span>
               </p>
               <div className = 'response'>
                  <span>
                     User: {this.state.falseData.user}
                  </span>
                  this is my response to that statement.
                  <span> Date: {this.state.falseData.date}</span>
               </div>
               <div className = 'response'>
                  Leave your response:
                  <form>
                     <input type = 'text' className = 'textbox' value = {this.state.responsding} onChange = {this.changeResponse} required/>
                  </form>
               </div>
            </div>
         </div>
      )
   }
}

export default Topic 