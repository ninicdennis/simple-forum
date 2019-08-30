import React from 'react';
import './homepage.css'

class Homepage extends React.Component {
   constructor(props){
      super(props)
      this.state = {
         backendObj: {},
         falseData: {
            user: 'foobar',
            date: '07/03/2019'
         }
      }
   }

   componentDidMount() {
      fetch('http://localhost:5250/', {
         method: 'GET'
      })
      .then(response => response.json())
      .then(call => this.setState({backendObj: call}))
      console.log('State has been set!')
   }
   render() {
      return (
         <div>
            <div className = 'whitespace'>
            <article>
               <h1>
                  Recent topics
               </h1>

               <div className = 'thread'>
                  <div className = 'left'>
                     <span>User: {this.state.falseData.user}</span>
                     <span>Date: {this.state.falseData.date}</span>
                  </div>
                  <div className = 'right'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vel placerat arcu, ultrices dictum ligula. Maecenas non malesuada magna, vel ullamcorper magna. Aenean vitae orci vel libero bibendum feugiat. Mauris aliquam odio in vehicula fermentum. Morbi ut pulvinar neque. Vivamus a pretium felis, in facilisis risus. Sed eget mi vitae mi accumsan maximus. Aenean imperdiet suscipit ligula sed condimentum. Donec iaculis libero turpis, at varius eros porta eget.
                  </div>
               </div>

               <div className = 'thread'>
                  <div className = 'left'>
                     <span>User: {this.state.falseData.user}</span>
                     <span>Date: {this.state.falseData.date}</span>
                  </div>
                  <div className = 'right'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vel placerat arcu, ultrices dictum ligula. Maecenas non malesuada magna, vel ullamcorper magna. Aenean vitae orci vel libero bibendum feugiat. Mauris aliquam odio in vehicula fermentum. Morbi ut pulvinar neque. Vivamus a pretium felis, in facilisis risus. Sed eget mi vitae mi accumsan maximus. Aenean imperdiet suscipit ligula sed condimentum. Donec iaculis libero turpis, at varius eros porta eget.
                  </div>
               </div>

               <div className = 'thread'>
                  <div className = 'left'>
                     <span>User: {this.state.falseData.user}</span>
                     <span>Date: {this.state.falseData.date}</span>
                  </div>
                  <div className = 'right'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vel placerat arcu, ultrices dictum ligula. Maecenas non malesuada magna, vel ullamcorper magna. Aenean vitae orci vel libero bibendum feugiat. Mauris aliquam odio in vehicula fermentum. Morbi ut pulvinar neque. Vivamus a pretium felis, in facilisis risus. Sed eget mi vitae mi accumsan maximus. Aenean imperdiet suscipit ligula sed condimentum. Donec iaculis libero turpis, at varius eros porta eget.
                  </div>
               </div>
            </article>
            </div>


         </div>
      )
   }
}

export default Homepage