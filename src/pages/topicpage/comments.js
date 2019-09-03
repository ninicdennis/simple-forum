import React, {Component} from 'react'
import { Button , Header, Input } from 'semantic-ui-react'
import './comments.css'

// this will also need auth0 fixes. For later. Posting comments will not work.

class CommentSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      threadComment: []

    }
  }

  componentDidMount() {
    fetch('http://localhost:5251/threadcomment/' + this.props.threadInfo,{
      method:'GET',         
   })
   .then(response => response.json())
   .then(data => this.setState({threadComment: data}))
  }

  mapComments = () => {


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
   <div>
        <form className ='centerforum'>
          <Header as = 'h2'>Submit a comment:</Header>
          <Input type = 'text' />
          <Button>Submit!</Button>
        </form>
      </div>
   </div>
    )
  }

}

export default CommentSection
