import React, {Component} from 'react'
import { Button , Header, Input } from 'semantic-ui-react'
import './comments.css'
import uuid from 'uuid/v1'


class CommentComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      threadComment: [],
      replyValue: ''

    }
  }

  componentDidMount() {
    fetch('http://localhost:5251/threadcomment/' + this.props.threadInfo,{method:'GET'})
   .then(response => response.json())
   .then(data => {this.setState({threadComment: data})})
  }

  formRender = (isLoggedIn) => {
     if(isLoggedIn === false) {
        return (
         <div className ='commentsection'>
            <div className = 'centerform'>
               <Header as='h3' className = 'header-line'>Please Log in to submit a comment!</Header>
            </div>
         </div>
        )
     }
      else {
         return(
         <div className = 'commentsection'>
         <form className ='centerforum' onSubmit = {e => {this.submitComment(e, this.state.replyValue, isLoggedIn)}}>
            <Header as = 'h2' className = 'header-line'>Submit a comment:</Header>
            <Input type = 'text' value = {this.replyValue} onChange = {this.updateComment}/>
            <Button>Submit!</Button>
         </form>
      </div>
     )}

  }

  updateComment = (event) => {
     event.preventDefault()
     this.setState({replyValue: event.target.value})
  }

  deleteButton = (event, commentID) => {
     event.preventDefault()
     console.log('you are deleting this: ', commentID)
     fetch('http://localhost:5251/deletecomment', {
      method: 'DELETE',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({comment_id: commentID})
     })
     .then(response => console.log(response))
     .then(value => {
        console.log(value)
      fetch('http://localhost:5251/threadcomment/' + this.props.threadInfo,{method:'GET',})
         .then(response => response.json())
         .then(data => {this.setState({threadComment: data})})
   })
  }

  // Will have to change user logged in to validate that the correct user is logged in and render the button from there.
  renderComments = (userLoggedIn) => {
   var manyComments = this.state.threadComment.map(commentWrap => {
      if(userLoggedIn === false){
         return (
         <h3  className = 'comment-headline' key = {commentWrap.thread_id}>
            <div>{commentWrap.username} commented: </div>
            <div>{commentWrap.user_comment} </div>
         </h3>
         )
      }
      else{
         console.log(userLoggedIn)
         if(userLoggedIn === commentWrap.username) {
            return(
               <h3  className = 'comment-headline' key = {commentWrap.thread_id}>
                  <div>{commentWrap.username} commented: </div>
                  <div>{commentWrap.user_comment} </div>
                  <Button onClick = {e => {this.deleteButton(e, commentWrap.comment_id)}}>Delete</Button>
               </h3>
            )

         }
         else return (
            <h3  className = 'comment-headline' key = {commentWrap.thread_id}>
               <div>{commentWrap.username} commented: </div>
               <div>{commentWrap.user_comment} </div>
            </h3>
         )

      }
    })
    return manyComments
  }
  submitComment = (event, replyVar, user) => {
     event.preventDefault()
     console.log('Submitting Comment from:', user, 'with', replyVar)

     if(this.props.userNick === false) {
        return console.log('You must be logged in!')
     }
     else {
        var currentUUID = uuid()

        fetch('http://localhost:5251/postreply', {
         method: 'POST',
         headers: {
            'Accept' : 'application/json',
            'Content-Type': 'application/json'
         },
         body: JSON.stringify({
            thread_id: this.props.threadInfo,
            comment_id: currentUUID,
            user_comment: replyVar,
            username: user 

         })
      }).then(response => {
         console.log(response)
         if(response.status === 200) {
            console.log('Successfully Posted.')  
            fetch('http://localhost:5251/threadcomment/' + this.props.threadInfo,{
               method:'GET'})
            .then(response => response.json())
            .then(data => {this.setState({threadComment: data, replyValue: ''})
         })
         }
      })
        
     }

     
  }

  render() {
    return(
      <div>
         <div className = 'commentsection'>
            <Header as = 'h1' className = 'underline'>
            Comments: 
            </Header>
            <div className = 'commentfixed'>
            {this.renderComments(this.props.userNick)}
            </div>
         </div>
         {this.formRender(this.props.userNick)}
      </div>
     )
  }
}

export default CommentComp