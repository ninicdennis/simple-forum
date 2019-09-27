import React, {Component} from 'react';
import {Image, Header} from 'semantic-ui-react'
import './userpage.css'

class UserInfo extends Component {
   constructor(props){
      super(props)
      this.state = {
         postCount : []

      }
   }

   componentDidMount() {
      fetch('http://localhost:5251/' + this.props.UserLogged)
      .then(response => response.json())
      .then(data =>this.setState({postCount: data}))
   }

   render() {
      return (
      <div className = 'whitespace'>
         <div className = 'boxy'>
         <Image src={this.props.UserPicture} alt="Profile" size = 'small' />
             <Header as = 'h2'>Name: {this.props.UserRealName}</Header>
             <p>Email: {this.props.UserEmail}</p>
             <p>Username: {this.props.UserLogged}</p>
             <p>Posts: {this.state.postCount.length}</p>
            </div>
           </div>
      )
   }
}

export default UserInfo