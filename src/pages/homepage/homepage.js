import React from 'react';
import './homepage.css'
import { Header, Container } from 'semantic-ui-react';

class Homepage extends React.Component {
   constructor(props){
      super(props)
      this.state = {
         backendObj: {},
         falseData: {
            user: 'foobar',
            date: '07/03/2019',
            title: 'This is a title.'
         }
      }
   }

   componentDidMount() {
      fetch('http://localhost:5251/', {
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
               <Header  as = 'h2' className = 'header-thread'>
                  Recent topics
               </Header>

               <div className = 'thread'>
                  <Container fluid className = 'userinfo'>
                     <p>User: {this.state.falseData.user}</p>
                     <p>Date: {this.state.falseData.date}</p>
                     <p>Title: {this.state.falseData.title}</p>
                  </Container>

                  <Container>
                     <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vel placerat arcu, ultrices dictum ligula. Maecenas non malesuada magna, vel ullamcorper magna. Aenean vitae orci vel libero bibendum feugiat. Mauris aliquam odio in vehicula fermentum. Morbi ut pulvinar neque. Vivamus a pretium felis, in facilisis risus. Sed eget mi vitae mi accumsan maximus. Aenean imperdiet suscipit ligula sed condimentum. Donec iaculis libero turpis, at varius eros porta eget.
                     </p>
                  </Container>
               </div>
            </article>
            </div>

            <button onClick = {e => {console.log(this.state.backendObj)}}>backendObj Button</button>

         </div>
      )
   }
}

export default Homepage