import React from 'react';
import { useAuth0 } from "../../auth0-wrapper";

import Topic from './topicpage'

const AuthThread = (props) => {
   const { loading, user } = useAuth0();

  if (loading || !user) {
   return (
      <div>
         <Topic userLog = {false} match = {props.match}/>
      </div>

   );
 }
 return (
      <div>
         <Topic userLog = {user.nickname} match = {props.match} />
       </div>
 )

}

export default AuthThread
