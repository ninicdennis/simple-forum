import React from 'react';
import './comments.css'
import CommentsComp from '../../component/comments/comments'

import { useAuth0 } from "../../auth0-wrapper";

const CommentSection = (props) => {
   const { loading, user } = useAuth0();
   console.log(props)

  if (loading || !user) {
    return(
      <div>
        <CommentsComp threadInfo = {props.threadInfo} userNick = {false} />
      </div>
    )
 }
 return (
      <div>
        <CommentsComp threadInfo = {props.threadInfo} userNick = {user.nickname}/>
       </div>
 )

}

export default CommentSection
