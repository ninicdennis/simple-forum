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
    fetch('http://localhost:5251/threadcomment/' + this.props.threadInfo,{
      method:'GET',         
   })
   .then(response => response.json())
   .then(data => this.setState({threadComment: data}))
  }


  formRender = (isLoggedIn) => {
     if(isLoggedIn === false) {
        return (
         <div className = 'commentsection'>
            <Header as='h3' className = 'header-line'>Please Log in to submit a comment!</Header>
         </div>

        )
     }
      else return(
      <div className = 'commentsection'>
      <form className ='centerforum' onSubmit = {e => {this.submitComment(e, this.state.replyValue, isLoggedIn)}}>
        <Header as = 'h2' className = 'header-line'>Submit a comment:</Header>
        <Input type = 'text'  onChange = {this.updateComment}/>
        <Button>Submit!</Button>
      </form>
    </div>
     )

  }

  updateComment = (event) => {
     event.preventDefault()
     this.setState({replyValue: event.target.value})
  }

  submitComment = (event, replyVar, user) => {
     event.preventDefault()
     console.log('Submitting Comment from:', user, 'with', replyVar)

     if(this.props.userNick === false) {
        return console.log('You must be logged in!')
     }
     else {
        console.log('Yay you logged in!')
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
         }
      })
        
     }
  }

  render() {
    var manyComments = this.state.threadComment.map(commentWrap => {
      return(
        <h3 stylename = 'comment-headline'>{commentWrap.username}:{commentWrap.user_comment}</h3>
      )
    })
    return(
      <div>
      <div className = 'commentsection'>
      <Header as = 'h1' className = 'underline'>
        Comments: 
      </Header>
      <div className = 'commentfixed'>
      {manyComments}
      </div>
   </div>
      {this.formRender(this.props.userNick)}
   </div>
     )
  }

}

export default CommentComp